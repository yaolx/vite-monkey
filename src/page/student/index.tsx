import { useEffect, useState } from 'react'

import { Button, message } from 'antd'
import { map, difference, isEmpty } from 'lodash'

import { getStudentList, addStudent, deleteStudent } from '@/api/app-api'
import { getRandomInt } from '@/utils/math-utils'

import styles from './style/index.module.less'

const stus = ['A', 'B', 'C', 'D', 'E', 'F']
function Student(): JSX.Element {
  const [list, setList] = useState<Student[]>([])
  const onSearch = async () => {
    const data = await getStudentList()
    setList(data)
  }
  // 新增学生
  const onAdd = async () => {
    const curStus = map(list, (item) => item.name.at(item.name.length - 1))
    const otherStus = difference(stus, curStus)
    if (isEmpty(otherStus)) {
      message.success('添加学生人数已达上限')
      return
    }
    const data = await addStudent({
      name: '学生' + otherStus[getRandomInt(0, otherStus.length - 1)]
    })
    if (data.id) {
      message.success('新增成功')
      onSearch()
    }
  }
  // 删除学生
  const onDelete = async (id: number) => {
    await deleteStudent(id)
    onSearch()
  }
  useEffect(() => {
    onSearch()
  }, [])

  return (
    <div className={styles.student}>
      <div>
        <Button type="primary" onClick={onAdd}>
          新增
        </Button>
      </div>
      {map(list, (item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.name}>{item.name}</div>
            <Button type="primary" className={styles.btn} onClick={() => onDelete(item.id)}>
              删除
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default Student
