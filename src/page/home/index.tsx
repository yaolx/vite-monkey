import { useState } from 'react'

import { RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons'
import { Drawer } from 'antd'
import classname from 'classnames'
import { map } from 'lodash'

import styles from './style/index.module.less'

const menus = [
  {
    name: '去除广告',
    key: 'cancelAd'
  },
  {
    name: 'uckey登录',
    key: 'uckeyLogin'
  },
  {
    name: '开发自测checklist',
    key: 'developChecklist'
  }
]

function Home(): JSX.Element {
  const [visible, setVisible] = useState(false)
  const [expand, setExpand] = useState(false)
  const onExpand = () => {
    setExpand(!expand)
  }
  if (!expand) {
    return <LeftCircleTwoTone className={classname(styles.expand, styles.left_expand)} onClick={onExpand} />
  }
  return (
    <div className={styles.App}>
      <div className={styles.title}>
        开发小助手
        <RightCircleTwoTone className={styles.expand} onClick={onExpand} />
      </div>
      <div className={styles.menus}>
        {map(menus, (item) => (
          <div className={styles.menu} key={item.key} onClick={() => setVisible(true)}>
            {item.name}
          </div>
        ))}
      </div>
      <Drawer title="Basic Drawer" placement="right" onClose={() => setVisible(false)} open={visible} getContainer={false}>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default Home
