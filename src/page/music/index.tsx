import { Button } from 'antd'

import { clearHtmlTag } from '@/utils/html-utils'

import { GM_download as GMDownload } from 'monkey'

import styles from './style/index.module.less'

function Music(): JSX.Element {
  const cancelAd = () => {
    console.log(111)
  }
  const downloadMusic = () => {
    const { yaolxPlayer } = window as Window
    console.log('###', yaolxPlayer)
    const $title = document.querySelector('#title') as HTMLDivElement
    const title = clearHtmlTag($title.innerHTML)
    GMDownload({
      url: yaolxPlayer.src,
      name: title,
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

export default Music
