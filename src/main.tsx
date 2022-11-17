import { StrictMode, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'
import ReactDom from 'react-dom/client'

import Router from '@/routes'
import globalStore from '@/store/global'
import './index.less'

const stores = {
  globalStore
}
const root = ReactDom.createRoot(
  (() => {
    const app = document.createElement('div')
    app.className = 'monkey'
    document.body.append(app)
    return app
  })()
)
root.render(
  <StrictMode>
    <Provider stores={stores}>
      <HashRouter>
        <Suspense>
          <Router />
        </Suspense>
      </HashRouter>
    </Provider>
  </StrictMode>
)
