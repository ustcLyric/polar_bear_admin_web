<template>
  <div class="container">
    <div class="login-form">
      <div class="login-form-left">left</div>
      <div class="login-form-right">
        <div class="login-form-right-header">
          北极熊业务系统
          Polar Bear Admin
        </div>
        <div class="login-form-right-form" style="width: 250px">
          <div>

            <el-form ref="loginFormRef" :rules="rules" :model="dataConfig.form" label-width="auto">
              <el-form-item prop="account_name">
                <el-input
                  v-model="dataConfig.form.account_name"
                  style="width: 250px;height: 32px;"
                  placeholder="请输入账号名"
                  :prefix-icon="User"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="dataConfig.form.password"
                  style="width: 250px"
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
            <el-button type="primary" style="width: 250px; padding: 12px 20px; margin-bottom: 10px"
                       color="rgb(22, 93, 255)">登陆
            </el-button>
            <el-button type="text" style="width: 250px; padding: 12px 20px; margin: 0; color: rgb(134, 144, 156)">注册账号
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
import type {FormInstance, FormRules} from "element-plus";

interface LoginForm {
  account_name: string,
  password: string,
}

const dataConfig = reactive({
  form: {
    account_name: '',
    password: '',
  } as LoginForm
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


</script>


<style scoped lang="less">
@import "./index.less";
</style>