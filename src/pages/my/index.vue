<template>
  <div class="wrap-user">
    <!-- 用户信息 -->
    <div class="user" 
      :style="{
        backgroundImage: 'url(' + userInfo.profile.backgroundUrl + ')',
        backgroundOrigin: 'border-box',
        backgroundSize: '100% auto',
        backgroundRepeat:'no-repeat',
        backgroundPosition: '0 -80rpx'
        }"
        v-if="userInfo">
      <div class="user-head">
        <image class="img" mode="aspectFill" :src="userInfo.profile.avatarUrl"></image>
        <div class="btn-user-edit">编辑</div>
      </div>
      <div class="user-info">
        <div class="info-name">{{ userInfo.profile.nickname }}</div>
        <div class="info-f">
          <div class="f-follows">关注 {{ userInfo.profile.follows }}</div>
          <div class="vertical-line">|</div>
          <div class="f-followeds">粉丝 {{ userInfo.profile.followeds }}</div>
        </div>
        <div class="info-label">
          <div class="label label-level">Lv.{{ userInfo.level }}</div>
        </div>
      </div>
    </div>
    <!-- 用户额外信息 -->
    <div class="user-sheet">
      <div>歌单</div>
      <SongSheetList v-if="playlist" :playlist="playlist" :scrollY="false"></SongSheetList>
    </div>
  </div>
</template>

<script>
import Api from '../../Api/index.api'
import SongSheetList from '../../components/SongSheetList'
export default {
  name: 'My',
  data() {
    return {
      userInfo: '',
      playlist: ''
    }
  },
  components: {
    SongSheetList
  },
  methods: {
    init() {
      try {
        let user = wx.getStorageSync('user')
        this.user = user ? JSON.parse(user) : ''
      } catch (error) {
        console.error(error)
      }
      if(this.user) {
        let rq = {
          uid: this.user.id
        }
        // 获取个人信息
        this.getPersonalInfo(rq)
        // 获取音乐列表
        this.fetchSongSheet(rq)
      } else {
        wx.navigateTo({
          url: 'pages/login/main'
        })
      }
    },
    // 获取歌单列表数据
    fetchSongSheet(data) {
      Api.getSongSheet(data)
        .then(res => {
          let { playlist, code } = res
          if(code === 200) {
            this.playlist = playlist
          }
        })
        .catch(err => {
          console.log('getSongSheet err', err)
        })
    },
    getPersonalInfo(data) {
      Api.getPersonalInfo(data)
        .then(res => {
          this.userInfo = res || ''
        })
        .catch(err => {
          console.error(err)
        })
    },
  },
  created() {
    this.init()
  },
}
</script>

<style lang="scss" scoped>
.wrap-user{
  width: 100%;
  overflow: hidden;
  .user{
    padding: 46rpx 46rpx 90rpx 46rpx;
    color: #fff;
    .user-head{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img{
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
      }
      .btn-user-edit{
        width: 100rpx;
        height: 40rpx;
        font-size: 26rpx;
        border: 1px solid #ccc;
        line-height: 40rpx;
        text-align: center;
      }
    }
    .user-info{
      margin-top: 30rpx;
      .info-name{
        font-size: 36rpx;
        font-weight: 500;
      }
      .info-f{
        display: flex;
        align-items: center;
        font-size: 24rpx;
        margin-top: 10rpx;
        .vertical-line{
          width: 1px;
          margin: 0 18rpx;
          color: #ccc;
        }
      }
      .info-label{
        margin-top: 10rpx;
        display: flex;
        .label{
          font-size: 24rpx;
          padding: 2rpx 20rpx;
          border-radius: 20rpx;
          &.label-level{
            background-color: #ccc;
          }
        }
      }
    }
  }
  .user-sheet{
    color: #000;
  }
}
</style>