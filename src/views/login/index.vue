<template>
  <div class="container">
    <div class="login-form">
      <div class="login-form-left">
        <img src="@/assets/img/login_one.png" style="width: 400px;height: 500px"/>
      </div>
      <div class="login-form-right">
        <div class="login-form-right-form" style="padding-top: 90px;margin: 0 auto;width: 320px;">
          <p style="font-size: 24px;font-weight: 500;line-height: 32px">北极熊业务系统</p>
          <p style="font-size: 16px;line-height: 24px;color: #86909C">Polar Bear Admin</p>
        </div>

        <div class="login-form-right-form" style="width: 320px;margin: 0 auto;padding-top: 40px">

          <div>
            <el-form ref="loginFormRef" :rules="rules" :model="dataConfig.form" label-width="auto">
              <el-form-item prop="account_name">
                <el-input
                  v-model="dataConfig.form.account_name"
                  style="width: 320px;height: 32px;"
                  placeholder="请输入账号名"
                  :prefix-icon="User"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="dataConfig.form.password"
                  style="width: 320px"
                  type="password"
                  placeholder="请输入密码"
                  :prefix-icon="Lock"
                />
              </el-form-item>
            </el-form>
          </div>

          <div style="display: flex;align-content: center;justify-content: space-between">
            <el-radio :label="true" size="small">记住密码</el-radio>
            <el-link type="primary" style="color: #165DFF;font-size: 12px">忘记密码</el-link>
          </div>
          <div style="margin-top: 10px">
            <el-button type="primary" style="width: 320px; padding: 12px 20px; margin-bottom: 10px" @click="userLogin"
                       color="rgb(22, 93, 255)">登陆
            </el-button>
            <el-button type="text" style="width: 320px; padding: 12px 20px; margin: 0; color: rgb(134, 144, 156)">注册账号
            </el-button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>
<script setup lang="ts">

import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import {ElMessage, type FormInstance, type FormRules} from "element-plus";
import {userLoginApi} from "@/api/user";
import type {UserLoginRequest} from "@/api/user/type.ts";
import {useUserStore} from "@/store/user";
import router from "@/router";
import {useRoute} from "vue-router";

interface LoginForm {
  account_name: string,
  password: string,
}

const userStore = useUserStore()
const route = useRoute()
const dataConfig = reactive({
  form: {
    account_name: '',
    password: '',
  } as LoginForm
})

const reqConfig = reactive({
  userLoginReq: {
    //用户名
    user_name: '',
    //账户名
    account_name: '',
    //手机号
    phone: '',
    //密码
    password: ''
  } as UserLoginRequest
})
const loginFormRef = ref<FormInstance>()
const rules = reactive<FormRules<LoginForm>>({
  account_name: [
    {required: true, message: '请输入账户名', trigger: 'blur'},
    {len: 8, message: '账户名为8位', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 8, message: '密码最少8位', trigger: 'blur'},
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const userLogin = async () => {
  try {
    reqConfig.userLoginReq.account_name = 'ustcyang'
    reqConfig.userLoginReq.password = '5203344yh'
    if (loginFormRef.value) {
      await loginFormRef.value.validate()
    }
    // const userLoginRsp = await userLoginApi(reqConfig.userLoginReq);
    // console.log('userLoginRsp:', userLoginRsp)
    ElMessage.success('登陆成功')
    userStore.userLogin(reqConfig.userLoginReq)
    console.log(route)
    if (route.query?.redirect) {
      console.log('跳转')
      router.push(route.query?.redirect as string)
    } else {
      router.push('/')
    }
  } catch (err) {
    ElMessage.error('登陆失败')
  }

}


</script>


<style scoped lang="less">
@import "./index.less";
</style>