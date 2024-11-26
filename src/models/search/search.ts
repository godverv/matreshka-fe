import {SortType} from "matreshka-api/api/grpc/matreshka-be_api.pb.ts";

export type ListServicesReq = {
    paging: Paging;

    sort: Sort;
    searchPattern: string;
};

export type Paging = {
    limit: number;
    offset: number;
}
export type Sort = {
    type: SortType
    desc: boolean
}
