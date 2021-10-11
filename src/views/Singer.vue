<template>
  <div class="singer">
    <ScrollView>
      <ul class="list-wrapper">
        <li class="list-group" v-for="(value, index) in list" :key="index">
          <h2 class="group-title">{{keys[index]}}</h2>
          <ul>
            <li class="group-item" v-for="obj in list[index]" :key="obj.id">
              <img v-lazy="obj.picUrl" alt="">
              <p>{{obj.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
  </div>
</template>

<script>
// import { getHotArtists } from '../api/index'
// import { getLetterArtists } from '../api/index'
import { getAllArtists } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ScrollView
  },
  created () {
    getAllArtists()
      .then((result) => {
        console.log(result)
        this.keys = result.keys
        this.list = result.list
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data () {
    return {
      keys: [],
      list: []
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.singer{
  position: fixed;
  top: 184px;
  bottom: 0;
  left: 0;
  right: 0;
  //background: #ffcc33;
  @include bg_sub_color;
  overflow: hidden;
  .list-wrapper{
    //width: 100px;
    //height: 100px;
    .list-group{
      .group-title{
        @include bg_color;
        @include font_size($font_medium);
        color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
      }
      .group-item{
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
        }
        p{
          @include font_size($font_medium);
          @include font_color;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
