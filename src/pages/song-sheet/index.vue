<template>
  <view class="section">
    <scroll-view scroll-y class="scroll-view">
      <view
        v-for="item in playlists"
        :key="item.id"
        class="scroll-view-item"
        @click="handleSongSheetItemClick(item.id)"
      >
        <image class="img" mode="aspectFill" :src="item.coverImgUrl"></image>
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
export default {
  name: 'SongSheet',
  data() {
    return {
      playlists: []
    }
  },
  methods: {
    // 获取歌单列表数据
    fetchSongSheet(data) {
      Api.getSongSheet(data)
        .then(res => {
          console.log('getSongSheet res', res)
          let { result: { playlists }, code } = res
          if(code === 200) {
            this.playlists = playlists
          }
        })
        .catch(err => {
          console.log('getSongSheet err', err)
        })
    },
    //  
    handleSongSheetItemClick(id) {

    }
  },
  created() {
    let reqParam = {
      type: 'search',
      search_type: '1000',
      s: 'lawl1et丶lzy'
    }
    // 获取音乐列表
    this.fetchSongSheet(reqParam)
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
        padding-right: 10rpx;
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