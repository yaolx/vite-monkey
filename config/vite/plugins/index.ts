/**
 * vite plugin
 */

import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import monkey, { cdn } from 'vite-plugin-monkey'

import configStyleImportPlugin from './styleImport'
import configVisualizerPlugin from './visualizer'

import { VITE_APP_ANALYZE, VITE_APP_COMPRESS_GZIP } from '../../constant'

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins = [
    {
      ...eslint({
        include: 'src/**/*.+(js|jsx)'
      }),
      enforce: 'pre'
    },
    typescript(),
    reactRefresh(),
    legacy(),
    configStyleImportPlugin(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www.ximalaya.com/*', 'https://www.iqiyi.com/*', 'https://music.163.com/*']
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js')
        }
      }
    })
  ]

  // 包分析
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin())

  // 发布，打包
  if (VITE_APP_COMPRESS_GZIP && isBuild) {
    vitePlugins.push(viteCompression({ deleteOriginFile: true }))
  }

  return vitePlugins
}
