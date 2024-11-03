FROM node:22-alpine3.19 AS build

WORKDIR /app

ARG VITE_MATRESHKA_BACKEND_URL
ENV VITE_MATRESHKA_BACKEND_URL=$VITE_MATRESHKA_BACKEND_URL

ENV PATH=/app/node_modules/.bin:$PATH
COPY . .
RUN yarn install && yarn build

FROM --platform=$BUILDPLATFORM docker.angie.software/angie:1.7.0-minimal

ARG TARGETARCH
ARG BUILDPLATFORM

COPY --from=build /app/dist /usr/share/angie/html
COPY deploy/angie.conf /etc/angie/http.d/matreshka.conf

EXPOSE 80
CMD ["angie", "-g", "daemon off;"]
