<template>
  <div class="recommend">
    <div class="recommend-warpper">
      <ScrollView>
        <div>
          <Banner :banners="banners"></Banner>
          <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
          <Personalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'albums'"></Personalized>
          <SongList :songs="songs"></SongList>
        </div>
      </ScrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '../api/index'
import Banner from '../components/Recommend/Banner'
import Personalized from '../components/Recommend/Personalized'
import SongList from '../components/Recommend/SongList'
import ScrollView from '../components/ScrollView'
import MetaInfo from '../../vue-meta-info'
// import router from '@vue/cli-plugin-router'
export default {
  name: 'Recommend',
  metaInfo: MetaInfo.recommend,
  components: {
    // eslint-disable-next-line
    Banner,
    // eslint-disable-next-line
    Personalized,
    // eslint-disable-next-line vue/no-unused-components
    SongList,
    // eslint-disable-next-line vue/no-unused-components
    ScrollView
  },
  methods: {
    fatherSelectItem (id, type) {
      // console.log(type)
      this.$router.push({
        path: `recommend/detail/${id}/${type}`
      })
      // router.push({
      //   path: `recommend/detail/${id}/${type}`
      // })
    }
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  created () {
    getBanner().then((data) => {
      // console.log(data)
      this.banners = data.banners
    })
      .catch(function (err) {
        console.log(err)
      })
    getPersonalized().then((data) => {
      // console.log(data)
      this.personalized = data.result
    })
      .catch(function (err) {
        console.log(err)
      })
    getNewAlbum().then((data) => {
      // console.log(data.albums.splice(0, 6))
      // this.personalized = data.result
      this.albums = data.albums.splice(0, 6)
    })
      .catch(function (err) {
        console.log(err)
      })
    getNewSong().then((data) => {
      console.log(data.result)
      const list = []
      data.result.forEach((value) => {
        const obj = {}
        obj.id = value.id
        obj.name = value.name
        obj.picUrl = value.song.album.picUrl
        let singer = ''
        for (let i = 0; i < value.song.artists.length; i++) {
          if (i === 0) {
            singer = value.song.artists[i].name
          } else {
            singer += '-' + value.song.artists[i].name
          }
        }
        obj.singer = singer
        list.push(obj)
      })
      this.songs = list
      // this.albums = data.albums.splice(0, 6)
    })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
.recommend{
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  //overflow: hidden;
  .recommend-warpper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
  transition: all 1s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: all 1s;
}
</style>
