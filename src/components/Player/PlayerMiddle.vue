<template>
  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
      <div class="cd-warpper" ref="cdWarpper">
        <img :src="currentSong.picUrl" alt="">
      </div>
      <p>{{ getFirstLyric() }}</p>
    </swiper-slide>
    <swiper-slide class="lyric" ref="lyric">
      <ScrollView ref="scrollView">
        <ul>
          <li v-for="(value, key) in currentLyric" :key="key" :class="{'active' : currentLineNum === key}">{{ value }}</li>
        </ul>
      </ScrollView>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ScrollView from '@/components/ScrollView'
import { mapGetters } from 'vuex'

export default {
  name: 'PlayerMiddle',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    swiper,
    // eslint-disable-next-line vue/no-unused-components
    swiperSlide,
    // eslint-disable-next-line vue/no-unused-components
    ScrollView
  },
  data () {
    return {
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet', // 需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active'
        },
        // 异步
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      },
      currentLineNum: '0'
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong',
      'currentLyric'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.cdWarpper.classList.add('active')
      } else {
        this.$refs.cdWarpper.classList.remove('active')
      }
    },
    currentTime (newValue, oldValue) {
      /* // 0.歌词同步高亮
      const lineNum = Math.floor(newValue) + ''
      const result = this.currentLyric[lineNum]
      if (result !== undefined) {
        this.currentLineNum = lineNum
        // 1.滚动的歌词同步
        const currentLyricTop = document.querySelector('li.active').offsetTop
        const lyricHeight = this.$refs.lyric.$el.offsetHeight
        // console.log(lyricHeight)
        if (currentLyricTop > lyricHeight / 2) {
          console.log('要开始滚动')
          this.$refs.scrollView.scrollTo(0, lyricHeight / 2 - currentLyricTop, 100)
        }
      } */
      // 0.歌词同步高亮
      // this.currentLineNum = Math.floor(newValue) + ''
      const lineNum = Math.floor(newValue)
      this.currentLineNum = this.getActiveLineNum(lineNum)
      // 1.滚动的歌词同步
      const currentLyricTop = document.querySelector('li.active').offsetTop
      // if (currentLyricTop === null) return
      const lyricHeight = this.$refs.lyric.$el.offsetHeight
      // console.log(lyricHeight)
      if (currentLyricTop > lyricHeight / 2) {
        console.log('要开始滚动')
        this.$refs.scrollView.scrollTo(0, lyricHeight / 2 - currentLyricTop, 100)
      } else {
        this.$refs.scrollView.scrollTo(0, 0, 100)
      }
    },
    currentLyric (newValue, oldValue) {
      for (const key in newValue) {
        this.currentLineNum = key
        return
      }
    }
  },
  methods: {
    getFirstLyric () {
      for (const key in this.currentLyric) {
        return this.currentLyric[key]
      }
    },
    getActiveLineNum (lineNum) {
      if (lineNum < 0) {
        return this.currentLineNum
      }
      const result = this.currentLyric[lineNum + '']
      if (result === undefined) {
        lineNum--
        return this.getActiveLineNum(lineNum)
      } else {
        return lineNum + ''
      }
    }
  },
  props: {
    currentTime: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.banner{
  position: fixed;
  top: 150px;
  bottom: 250px;
  left: 0;
  right: 0;
  .cd{
    .cd-warpper{
      margin: 0 auto;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      border: 30px solid #fff;
      overflow: hidden;
      animation: sport 20s linear infinite;
      animation-play-state: paused;
      &.active{
        animation-play-state: running;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    p{
      text-align: center;
      @include font_size($font_medium);
      @include font_color;
      margin-top: 50px;
    }
  }
  .lyric{
    li{
      text-align: center;
      @include font_size($font_medium);
      @include font_color;
      margin: 10px 0;
      &:last-of-type{
        padding-bottom: 40%;
      }
      &.active{
        color: #fff;
      }
    }
  }
  @keyframes sport {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
}
</style>
<style lang="scss">
@import "../../assets/css/mixin";
.my-bullet{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  margin: 0 20px;
}
.my-bullet-active{
  width: 60px;
  @include bg_color;
}
</style>
