import request from '@/config/request'

/**
 * 获取学生列表
 *
 * @returns
 */
export function getStudentList(): Promise<Student[]> {
  return request.get('/students')
}
/**
 * 新增
 * @param data
 * @returns
 */
export function addStudent(data): Promise<Student> {
  return request.post('/students', data)
}
/**
 * 删除
 * @param id
 * @returns
 */
export function deleteStudent(id) {
  return request.delete(`/students/${id}`)
}
