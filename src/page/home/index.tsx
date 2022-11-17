import { Button } from 'antd'
import { observer } from 'mobx-react'

import homeStore from './model'
import styles from './style/index.module.less'
const config = import.meta.env
function Home(): JSX.Element {
  console.log('###home')
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <p>{config.VITE_TITLE}</p>
        <p>
          <Button type="primary" onClick={homeStore.add}>
            count is: {homeStore.count}
          </Button>
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className={styles['App-link']} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default observer(Home)
