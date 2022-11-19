export {}

declare global {
  // 定义对象类型
  interface objectType {
    [key: string]: any
  }

  // 定义数组类型
  type arrayType = objectType[] | any

  // 定义请求返回类型
  interface dataType<T> {
    [key: string]: any
    code: number
    result: T
    msg: string
  }

  // 定义请求类型
  type promiseDataType<T> = promise<dataType<T>>
}
