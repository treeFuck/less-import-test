import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8089, // 设置端口为 8089
    open: '/vite-test/index.html', // 自动打开 vite-test/index.html 页面
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html'),
      },
    },
  },
});