<template>
  <div class="wrap-login">
    <div class="form-group">
      <input class="form-control account" name="account" placeholder="please input account" v-model="account" />
    </div>
    <div class="form-group">
      <input type="password" class="form-control password" name="password" placeholder="please input password" v-model="password" />
    </div>
    <button
      class="login"
      type="primary"
      size="default"
      :loading="loading"
      :plain="plain"
      :disabled="disabled"
      bindtap="primary"
      @click="login">
        Sign In
      </button>
  </div>
</template>

<script>
import Api from '../../Api/index.api'
export default {
  name: 'Login',
  data () {
    return {
      loading: false, // 登录按钮
      plain: false, // 按钮是否镂空
      disabled: true, // 是否禁用
      
      account: '', // 账号
      password: '' // 密码
    }
  },
  watch: {
    account(n) {
      // valiadate
      if(n && n.length === 11) {
        this.disabled = false
      }
    }
  },
  methods: {
    login() {
      let rq = {
        phone: this.account,
        password: this.password
      }
      this.fetchLogin(rq)
    },
    fetchLogin(data) {
      Api.getLogin(data)
        .then(res => {
          let { code, account } = res
          if(code && code === 200) {
            let user = account ? JSON.stringify(account) : ''
            if(user) {
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1.5 * 1000
              })
              try {
                wx.setStorageSync('user', user)
              } catch (error) {
                console.error(error)
              }
              this.handleAfterLogin() // 登录后的处理
            } else {
              wx.showToast({
                title: '失败',
                duration: 1.5 * 1000
              })
            }
          } else {
            wx.showToast({
              title: '失败',
              duration: 1.5 * 1000
            })
          }
        })
        .catch(err => {
          console.log('getLogin', err)
        })
    },
    // 登录后的处理
    handleAfterLogin() {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-login{
  padding: 20rpx;
  .form-group{
    margin-top: 10rpx;
    .form-control{
      padding: 10rpx;
    }
  }
  .login{
    margin-top: 20rpx;
  }
}
</style>