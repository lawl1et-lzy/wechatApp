<template>
  <div class="section">
    <!-- 基本信息 -->
    <div class="detail" v-if="playlist">
      <image class="img" mode="aspectFill" :src="playlist.coverImgUrl"></image>
      <div class="detail-info">
        <div class="info-name">{{ playlist.name }}</div>
        <div class="info-user">
          <image class="user-img" mode="aspectFill" :src="playlist.creator.avatarUrl"></image>
          <div class="user-name">{{ playlist.creator.nickname }}</div>
        </div>
        <div class="info-edit">编辑简介</div>
      </div>
    </div>
    <!-- 歌曲列表 -->
      <div
        v-if="playlist"
        class="list"
      >
        <div
          class="song"
          v-for="(item, index) in playlist.tracks"
          :key="index"
          @click="handleSongClick(item.id)"
        >
          <div class="song-index">
            {{ index + 1 }}
          </div>
          <div class="song-info">
            <div class="info-name">
              {{ item.name }}{{ item.alia.length > 0 ? '(' + item.alia + ')': '' }}
            </div>
            <div class="info-author">
              {{ item.ar[0].name }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Api from '../../Api/index.api'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SongList',
  data() {
    return {
      title: '',
      playlist: ''
    }
  },
  computed: {
    ...mapState({
      listId: (state) => state.songSheetId
    })
  },
  watch: {
    // 设置标题
    title(n) {
      if(n) {
        wx.setNavigationBarTitle({
          title: this.title
        })
      }
    },
    listId(n) {
      if(n) {
        let rq = {
          id: n
        }
        // 获取音乐列表
        this.fetchSongList(rq)
      }
    }
  },
  methods: {
    // 获取歌曲列表
    fetchSongList(data) {
      Api.getSongList(data)
        .then(res => {
          let { playlist, code } = res
          console.log('playlist', playlist)
          if(code === 200) {
            this.playlist = playlist
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 歌曲点击事件
    handleSongClick(songId) {
      if(!songId) return false
      wx.navigateTo({
        url: `/pages/song/main?id=${songId}`
      })
    }
  },
  onLoad(options) {
    this.title = options.title
  }
}
</script>

<style lang="scss">
.section{
  .detail{
    display:flex;
    padding-left: 20rpx;
    .img{
      flex-shrink: 0;
      width:200rpx;
      height:200rpx;
      border-radius:16rpx;
      margin-right:20rpx;
    }
    .detail-info{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      .info-name {
        font-size:30rpx;
      }
      .info-user{
        display:flex;
        align-items:center;
        .user-img{
          width:40rpx;
          height:40rpx;
          border-radius:50%;
          margin-right: 10rpx;
        }
        .user-name{
          font-size: 26rpx;
        }
      }
      .info-edit{
        font-size: 24rpx;
      }
    }
  }
  .list {
    .song{
      display:flex;
      margin: 30rpx 0 0 20rpx;
      align-items:center;
      .song-index{
        font-size:26rpx;
        margin-right:20rpx;
      }
      .song-info{
        .info-name {
          font-size: 30rpx;
          width: 500rpx;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .info-author{
          font-size: 22rpx;
        }
      }
    }
  }
}
</style>