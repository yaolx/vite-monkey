import { Button } from 'antd'
import { observer } from 'mobx-react'

import { clearHtmlTag } from '@/utils/html-utils'

import { GM_download as GMDownload } from 'monkey'

import styles from './style/index.module.less'

function Home(): JSX.Element {
  const cancelAd = () => {
    console.log(111)
  }
  const downloadMusic = () => {
    const { $webPlayer } = window as Window
    console.log('###', $webPlayer)
    GMDownload({
      url: $webPlayer?.currentTrack?.src,
      name: $webPlayer?.currentTrack?.trackName,
      saveAs: true
    })
  }
  return (
    <div className={styles.App}>
      <Button onClick={cancelAd} type="primary">
        去除广告
      </Button>
      <Button onClick={downloadMusic} type="primary" className={styles.btn}>
        下载音乐
      </Button>
    </div>
  )
}

export default observer(Home)
