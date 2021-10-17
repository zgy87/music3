<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <keep-alive include="Singer,Search">
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>
<script>
import MainHeader from './components/MainHeader'
import Tabbar from './components/Tabbar'
import Player from './views/Player'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MainHeader,
    // eslint-disable-next-line vue/no-unused-components
    Tabbar,
    // eslint-disable-next-line vue/no-unused-components
    Player
  }
}
</script>
<style scoped lang="scss">
</style>
