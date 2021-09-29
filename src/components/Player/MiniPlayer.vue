<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave">
  <div class="mini-player" v-show="this.isShowMiniPlayer">
    <div class="player-warpper">
      <div class="play-left" @click="showNormalPlayer">
        <img src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/8d5494eef01f3a2997b12e219725bc315d607ce0.jpg" alt="">
        <div class="player-title">
          <h3>晴天</h3>
          <p>周杰伦</p>
        </div>
      </div>
      <div class="play-right">
        <div class="play" @click="play" ref="play"></div>
        <div class="list" @click.stop="showList"></div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      'setMiniPlayer',
      'setIsPlaying'
    ]),
    showList () {
      this.$emit('showList')
    },
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, function () {
        done()
      })
    },
    play () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.mini-player{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  .player-warpper{
    width: 100%;
    height: 100%;
    @include bg_color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .play-left{
      display: flex;
      padding-left: 30px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .player-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
          @include font_size($font_medium);
          @include font_color;
        }
        p{
          @include font_size($font_medium_s);
          @include font_color;
        }
      }
    }
    .play-right{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/pause');
        &.active{
          @include bg_img('../../assets/images/play')
        }
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list');
      }
    }
  }
}
</style>
