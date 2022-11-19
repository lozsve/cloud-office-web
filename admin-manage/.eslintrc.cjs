module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    '.eslintrc-auto-import.json',
    '.eslintrc-global.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [ 'vue', '@typescript-eslint' ],
  rules: {
    'vue/singleline-html-element-content-newline': 0, // 禁用单行标签内容需换行的校验
    'vue/multiline-html-element-content-newline': 0, // 禁用多行标签内容需换行的校验
    'vue/max-attributes-per-line': 0, // 关闭每行的最大属性数验证
    'vue/first-attribute-linebreak': 0, // 关闭强制第一个属性的位置（属性换行）
    'vue/html-self-closing': 0, // 关闭闭合标签验证
    'vue/multi-word-component-names': 0, // 关闭 template 多节点验证
    '@typescript-eslint/ban-types': 0, // 关闭空对象验证
    '@typescript-eslint/no-explicit-any': 0, // 关闭 any 验证
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    'no-use-before-define': 0, // 不允许在变量定义之前使用
    'eol-last': [ 2, 'always' ], // 文件末尾强制换行
    'comma-style': [ 2, 'last' ], // 控制逗号在行尾出现
    'comma-dangle': [ 2, 'never' ], // 去掉数组和对象键值对最后一个逗号
    'comma-spacing': [ 2, { 'before': false, 'after': true } ], // 控制逗号前后的空格
    'array-bracket-spacing': [ 2, 'always' ], // 指定数组的元素之间要以空格隔开
    'object-curly-spacing': [ 2, 'always' ], // 对象字面量是否允许必要的空格
    'key-spacing': [ 2, { 'beforeColon': false, 'afterColon': true } ], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'linebreak-style': [ 1, 'unix' ], // 强制使用一致的换行风格
    'lines-around-comment': [ 1, { 'beforeBlockComment': true } ], // 要求在块级注释之前有一空行
    'func-style': [ 2, 'declaration', { 'allowArrowFunctions': true } ], // 强制一致地使用函数声明或函数表达式（箭头函数）
    'arrow-spacing': [ 2, { 'before': true, 'after': true } ], // => 前后有空格
    'no-multiple-empty-lines': [ 2, { 'max': 1 } ], // 不允许多个空行
    'no-trailing-spaces': 2, // 禁用行尾空格
    'semi': [ 2, 'never' ], // 语句不允许分号结尾
    'quotes': [ 2, 'single' ], // 引号类型 `` "" ''
    'arrow-body-style': 2, // 要求箭头函数体使用大括号
    'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    'prefer-arrow-callback': 0, // 要求使用箭头函数作为回调
    'template-curly-spacing': 1, // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'indent': [ 2, 2 ], // 缩进风格
    'no-mixed-spaces-and-tabs': [ 2, false ], //禁止混用 tab 和空格
    'camelcase': 2 // 强制驼峰法命名
  }
}
