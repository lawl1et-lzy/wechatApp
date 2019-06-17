import axios from '../utils/fly'

class Api {
  // 登录
  static getLogin(data) {
    return axios({
      method: 'get',
      url: '/login/cellphone',
      data
    })
  }
  // 获取歌单列表
  static getSongSheet(data) {
    return axios({
      method: 'get',
      url: '/user/playlist',
      data
    })
  }

  // 获取歌单详细信息
  static getSongList(data) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      data
    })
  }

  // 获取歌曲详细信息
  static getSongInfo(data) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      data
    })
  }

  // 获取个人信息
  static getPersonalInfo(data) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      data
    })
  }
}

export default Api