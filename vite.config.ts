import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-expect-error
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    base: '/',
  });
}
