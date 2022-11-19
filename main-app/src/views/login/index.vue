<template>
  <img class="bg_img" src="@resource/img/login_bg.jpeg" alt="" />
  <div class="container flex_Vertical_LevelCenter_sb">
    <div class="flex_Level_VerticalCenter" style="width: 100%;flex: 1;">
      <div class="left_box flex_LevelVertical_center">
        <div class="title">智慧云办公系统<span>0.0.1</span></div>
        <div class="text">
          <p>用科技</p>
          <p>让复杂的办公更简单</p>
        </div>
      </div>
      <div class="right_box flex_LevelVertical_center">
        <div class="form_box flex_Vertical">
          <img v-if="loginType == 1" class="icon_img" src="@resource/img/login_code.png" alt="" @click="loginType = 2" />
          <img v-if="loginType == 2" class="icon_img" src="@resource/img/login_account.png" alt="" @click="loginType = 1" />
          <div class="type_text">{{ loginType == 1 ? '账号' : '扫码' }}登录</div>
          <div v-if="loginType == 1" class="flex_LevelVertical_center" style="width: 100%;flex: 1;">
            <el-form ref="formRef" :model="formModel" :rules="formRules" size="large">
              <div class="input_box flex_Level_VerticalCenter">
                <div class="iconfont icon-zhanghao1"></div>
                <el-form-item prop="username">
                  <el-input v-model="formModel.username" spellcheck="false" placeholder="请输入OA账号" clearable></el-input>
                </el-form-item>
              </div>
              <div class="input_box flex_Level_VerticalCenter">
                <div class="iconfont icon-mima1"></div>
                <el-form-item prop="password">
                  <el-input v-model="formModel.password" spellcheck="false" placeholder="请输入OA密码" maxlength="12" show-password></el-input>
                </el-form-item>
              </div>
              <div class="text_box flex_Level_VerticalCenter_sb">
                <div>联系技术：<span>17888888888</span></div>
                <div class="forgot_password" @click="forgotPassword">忘记密码？</div>
              </div>
              <el-button type="primary" round :loading="loading" @click="submitForm(formRef)">{{ loading ? '正在登录' : '立即登录' }}</el-button>
            </el-form>
          </div>
          <div v-if="loginType == 2" class="flex_LevelVertical_center" style="width: 100%;flex: 1;">
            <img style="width: 300px;height: 300px;" src="https://img2.baidu.com/it/u=3837034398,3791459480&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500" alt="" />
          </div>
        </div>
      </div>
    </div>
    <p>为了确保个人信息安全，在任何情况下都不要将您公司的相关账号密码告诉他人；若有泄漏或异常事件发生，请反馈公司 IT 同事，并及时更改账号密码。</p>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
const router = useRouter()

// 登录方式（1：账号登录   2：扫码登录）
const loginType = ref<number>(1)

// 表单数据
const loading = ref<boolean>(false)
const formRef = ref<FormInstance>()
const formModel = reactive({
  username: 'admin',
  password: '123456'
})
const formRules = reactive<FormRules>({
  username: [ { required: true, message: 'OA 账号不能为空', trigger: 'blur' } ],
  password: [ { required: true, message: 'OA 密码不能为空', trigger: 'blur' } ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) accountLogin()
    else console.log('error submit!', fields)
  })
}

// 账号登录
const accountLogin = () => {
  loading.value = true
  ElMessage({ type: 'success', message: '登录成功' })
  window.sessionStorage.setItem('token', '123123')
  setTimeout(() => {
    loading.value = false
    router.replace('/')
  }, 3000)
}

// 忘记密码
const forgotPassword = () => {
  ElMessage({ type: 'warning', message: '请联系管理员进行密码重置', grouping: true })
}

// 扫码登录
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
