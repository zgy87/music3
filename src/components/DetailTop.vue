<template>
  <div class="detail-top">
    <div class="img-container">
      <img :src="path" alt="">
      <div class="mask" ref="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      default: '',
      // eslint-disable-next-line
      required: true
    }
  },
  methods: {
    changeMask (opacity) {
      this.$refs.mask.style.opacity = opacity
    }
  }
}
</script>

<style scoped lang="scss">
.detail-top{
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .mask{
    position: absolute;
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
