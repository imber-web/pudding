import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import externalGlobals from 'rollup-plugin-external-globals'
// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: '.',
  plugins: [
    vue(),
    visualizer({
      // open: true// 打包完成后自动打开浏览器，显示产物体积报告
    })
  ],
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      plugins: [
        externalGlobals({
          vue: 'Vue'
        })
      ]
    }
  },
  base: './' //打包路径变为相对路径，后面上线可能会修改
})
