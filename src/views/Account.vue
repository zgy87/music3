<template>
  <transition appear>
    <div class="account"></div>
  </transition>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style scoped lang="scss">
.account{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffcc33;
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
