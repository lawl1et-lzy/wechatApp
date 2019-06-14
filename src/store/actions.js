import * as type from './mutations-type'
const actions = {
  // 设置歌单ID
  setSongSheetId({ commit }, id) {
    if(!id) return
    commit(type.SET_SONG_SHEET_ID, id)
  }
}

export default actions