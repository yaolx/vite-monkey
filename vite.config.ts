/// <reference types="vitest" />

import fs from 'fs'
import path from 'path'

import dotenv from 'dotenv'
import { ConfigEnv } from 'vite'

import { PORT } from './config/constant'
import { createVitePlugins } from './config/vite/plugins'
import { createProxy } from './config/vite/proxy'
/**
 * 环境初始化
 * @param mode
 */
function envInit(mode) {
  const envFile = `./config/env/.env.${mode}`
  try {
    fs.accessSync(envFile, fs.constants.F_OK)
    const envConfig = dotenv.parse(fs.readFileSync(envFile))
    for (const k in envConfig) {
      if (Object.prototype.hasOwnProperty.call(envConfig, k)) {
        process.env[k] = envConfig[k]
      }
    }
  } catch (error) {
    console.log('配置文件不存在，忽略')
  }
}
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  envInit(mode)
  return {
    test: {},
    plugins: createVitePlugins(mode, isBuild),
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, './src'),
        monkey: path.resolve(__dirname, './node_modules/vite-plugin-monkey/dist/client')
      }
    },
    // css 配置
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // antd 定制主题样式
          modifyVars: {
            '@fill-body': '#fff'
          }
        }
      },
      modules: {
        localsConvention: 'camelCase'
      }
    }
  }
}
