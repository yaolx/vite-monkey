# react-boat

从零开始搭 vite + reactjs 项目，，并通过 Actions 自动构建，发布

vite + reactjs + typescript + mobx + eslint + json-server


## 全新vite3.0体验

## react-router 6.0

useRouters构造路由

## React.Suspense + React.lazy做异步加载

通过import做异步加载

`const Home = lazy(() => import('@/page/home'))`

## json-server

json-server做mock请求，接口定义符合RESTful API 规范

## concurrently

concurrently同时启动前端、后端2个服务


## vitest单元测试框架

[官方地址](https://cn.vitest.dev/)

## 命令介绍

1. yarn mock

本地开发，启动mock请求

2. yarn build

构建生产环境

3. yarn server

构建后，用dist目录的静态资源启动服务，并开启mock

4. yarn json-server

开启json-server，模拟数据接口