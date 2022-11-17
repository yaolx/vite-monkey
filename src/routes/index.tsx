import { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/page/home'))
const Student = lazy(() => import('@/page/student'))
const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/student',
    element: <Student />
  }
]

const Router = () => {
  const appRouter = useRoutes(routesConfig)
  return appRouter
}

export default Router
