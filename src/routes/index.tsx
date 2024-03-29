import { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/page/home'))
const Music = lazy(() => import('@/page/download'))

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/music',
    element: <Music />
  }
]

const Router = () => {
  const appRouter = useRoutes(routesConfig)
  return appRouter
}

export default Router
