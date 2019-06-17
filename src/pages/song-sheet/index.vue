<template>
  <view class="section">
    <scroll-view scroll-y class="scroll-view">
      <view
        v-for="item in playlist"
        :key="item.id"
        class="scroll-view-item"
        @click="handleSongSheetItemClick(item)"
      >
        <image class="img" mode="scaleToFill" :src="item.coverImgUrl"></image>
        <view class="sheet">
          <div class="sheet-name">{{ item.name }}</div>
          <div class="sheet-num">{{ item.trackCount }}首</div>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import Api from '../../Api/index.api'
import { mapActions } from 'vuex'
export default {
  name: 'SongSheet',
  data() {
    return {
      playlist: []
    }
  },
  methods: {
    ...mapActions(['setSongSheetId']),
    // 获取歌单列表数据
    fetchSongSheet(data) {
      Api.getSongSheet(data)
        .then(res => {
          console.log('getSongSheet', res)
          let { playlist, code } = res
          if(code === 200) {
            this.playlist = playlist
          }
        })
        .catch(err => {
          console.log('getSongSheet err', err)
        })
    },
    handleSongSheetItemClick(songListObj) {
      if(!songListObj) return
      let id = songListObj.id
      let songListTitle = songListObj.name
      this.setSongSheetId(id) // 设置vuex id
      wx.navigateTo({
        url: `/pages/song-list/main?title=${songListTitle}`
      })
    },
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
        console.dir(rq)
        // 获取音乐列表
        this.fetchSongSheet(rq)
      } else {
        wx.navigateTo({
          url: 'pages/login/main'
        })
      }
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.section{
  height: 100vh;
  .scroll-view{
    height: 100%;
    .scroll-view-item{
      display: flex;
      align-items: center;
      margin-top: 10rpx;
      padding: 0 10rpx;
      .img{
        border-radius: 8rpx;
        width: 100rpx;
        height: 100rpx;
        margin-right: 10rpx;
      }
      .sheet{
        height: 100%;
        .sheet-name{
          font-size: 32rpx;
        }
        .sheet-num{
          font-size: 24rpx;
        }
      }
    }
  }
}

</style>