<template>
  <div id="lottie-animation-404"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "404",
  mounted() {
    this.animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-404'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/error-404.json'
    });
  },
  beforeDestroy() {
    this.anim.stop();
    this.anim.destroy();
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/variables.scss";

#lottie-animation-404 {
    width: 300px;
    height: 300px;
    margin: auto;

  @media only screen and (min-width: $small-bp) { // Desktop / Big Screen

    #lottie-animation-404 {
      width: 600px;
      height: 600px;
    }
  }
}
</style>
