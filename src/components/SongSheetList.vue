<template>
  <div class="section">
    <scroll-view :scroll-y="scrollY" class="scroll-view">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    playlist: {
      type: Array
    },
    scrollY: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions(['setSongSheetId']),
    handleSongSheetItemClick(songListObj) {
      if(!songListObj) return
      let id = songListObj.id
      let songListTitle = songListObj.name
      this.setSongSheetId(id) // 设置vuex id
      wx.navigateTo({
        url: `/pages/song-list/main?title=${songListTitle}`
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.section{
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
