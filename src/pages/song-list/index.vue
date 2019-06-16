<template>
  <div class="section">
    <div class="detail" v-if="playlist">
      <image class="img" mode="aspectFill" :src="playlist.coverImgUrl"></image>
      <div class="detail-info">
        <div class="info-name">{{ playlist.name }}</div>
        <div class="info-user">
          <div class="user-img">
            <image class="img" mode="aspectFill" :src="playlist.creator.avatarUrl"></image>
          </div>
          <div class="user-name">{{ playlist.creator.nickname }}</div>
        </div>
      </div>
    </div>
    <div class="list">
      
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
    title(n) {
      if(n) {
        wx.setNavigationBarTitle({
          title: this.title
        })
      }
    },
    listId(n) {
      if(n) {
        let reqParam = {
          type: 'playlist',
          id: this.listId,
          // id: 2632951386,
        }
        // 获取音乐列表
        this.fetchSongList(reqParam)
      }
    }
  },
  methods: {
    // 获取歌曲列表
    fetchSongList(data) {
      Api.getSongList(data)
        .then(res => {
          let { playlist, code } = res
          if(code === 200) {
            this.playlist = playlist
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  onLoad(options) {
    this.title = options.title
  },
  // beforeMount() {
  //   const self = this;
  //   wx.getSystemInfo({
  //       success(system) {
  //           console.log(`system:`, system);
  //           self.statusBarHeight = system.statusBarHeight;
  //           self.platform = system.platform;

  //           let platformReg = /ios/i;
  //           if (platformReg.test(system.platform)) {
  //               self.titleBarHeight = 44;
  //           } else {
  //               self.titleBarHeight = 48;
  //           }

  //           self.navBarHeight = self.statusBarHeight + self.titleBarHeight;
  //       }
  //   });
  //   },
}
</script>

<style>

</style>