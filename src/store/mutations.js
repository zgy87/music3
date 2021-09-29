import { SET_FULL_SCREEN, SET_MINI_PLAYER, SET_IS_PLAYING } from './mutations-type'
export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  }
}
