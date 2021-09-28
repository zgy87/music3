import { SET_FULL_SCREEN } from './mutations-type'
export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  }
}
