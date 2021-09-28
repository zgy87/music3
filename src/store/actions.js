import { SET_FULL_SCREEN } from './mutations-type'
export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  }
}
