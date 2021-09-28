<template>
  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
      <div class="cd-warpper">
        <img src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/8d5494eef01f3a2997b12e219725bc315d607ce0.jpg" alt="">
      </div>
      <p>故事的小黄花</p>
    </swiper-slide>
    <swiper-slide class="lyric">
      <ScrollView>
        <ul>
          <li>第1个li</li>
          <li>第2个li</li>
          <li>第3个li</li>
          <li>第4个li</li>
          <li>第5个li</li>
          <li>第6个li</li>
          <li>第7个li</li>
          <li>第8个li</li>
          <li>第9个li</li>
          <li>第10个li</li>
          <li>第11个li</li>
          <li>第12个li</li>
          <li>第13个li</li>
          <li>第14个li</li>
          <li>第15个li</li>
          <li>第16个li</li>
          <li>第17个li</li>
          <li>第18个li</li>
          <li>第19个li</li>
          <li>第20个li</li>
          <li>第21个li</li>
          <li>第22个li</li>
          <li>第23个li</li>
          <li>第24个li</li>
          <li>第25个li</li>
          <li>第26个li</li>
          <li>第27个li</li>
          <li>第28个li</li>
          <li>第29个li</li>
          <li>第30个li</li>
          <li>第31个li</li>
          <li>第32个li</li>
          <li>第33个li</li>
          <li>第34个li</li>
          <li>第35个li</li>
          <li>第36个li</li>
          <li>第37个li</li>
          <li>第38个li</li>
          <li>第39个li</li>
          <li>第40个li</li>
          <li>第41个li</li>
          <li>第42个li</li>
          <li>第43个li</li>
          <li>第44个li</li>
          <li>第45个li</li>
          <li>第46个li</li>
          <li>第47个li</li>
          <li>第48个li</li>
          <li>第49个li</li>
          <li>第50个li</li>
          <li>第51个li</li>
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
      }
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
        padding-bottom: 100px;
      }
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
