import 'pinia'

declare module 'pinia' {
  // 用户信息
  export interface User {
    [key: string]: string | number | boolean | objectType | arrayType
  }
}
