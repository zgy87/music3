<template>
  <div class="normal-player" v-show="this.isFullScreen">
    <div class="player-warpper">
      <PlayerHeader></PlayerHeader>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom></PlayerBottom>
      <div class="player-bg">
        <img src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/8d5494eef01f3a2997b12e219725bc315d607ce0.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'
import { mapGetters } from 'vuex'
export default {
  name: 'NormalPlayer',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PlayerHeader,
    // eslint-disable-next-line vue/no-unused-components
    PlayerMiddle,
    // eslint-disable-next-line vue/no-unused-components
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
      // ...
    ])
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.normal-player{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /*background: hotpink;*/
  @include bg_sub_color;
  .player-warpper{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1000;
  }
  .player-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img{
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      filter: blur(10px);
    }
  }
}
</style>
