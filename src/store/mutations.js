import * as type from './mutations-type'
const mutations = {
  [type.SET_SONG_SHEET_ID](state, pyload) {
    state.songSheetId = pyload
  }
}

export default mutations