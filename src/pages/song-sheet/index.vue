<template>
  <view class="section">
    <SongSheetList v-if="playlist" :playlist="playlist"></SongSheetList>
  </view>
</template>

<script>
import Api from '../../Api/index.api'
// const songSheetList = () => import('../../components/SongSheetList')
import SongSheetList from '../../components/SongSheetList'
export default {
  name: 'SongSheet',
  data() {
    return {
      playlist: ''
    }
  },
  components: {
    SongSheetList
  },
  methods: {
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
        // 获取音乐列表
        this.fetchSongSheet(rq)
      } else {
        wx.navigateTo({
          url: '/pages/login/main'
        })
      }
    }
  },
  onShow() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
</style>