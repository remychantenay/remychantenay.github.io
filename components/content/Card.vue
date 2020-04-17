<template>
  <div class="card card-action" @click="open()">
    <div class="card-image">
      <img class="cover-img" v-bind:src="coverImageUrl()"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  methods: {
    coverImageUrl() {
      return require('../../src/assets/images/'+this.coverImagePath)
    }, 
    open() {
      this.$emit('onCardClicked', this.project);
    }
  },
  props: {
    coverImagePath: {
      type: String,
      required: true
    },
    project: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/variables.scss";

.card  {
    position: relative;
    background: $white;
    max-width: 800px;
    margin-bottom: $spacing-5;
    margin-right: $spacing-3;
    margin-left: $spacing-3;
    mix-blend-mode: normal;
    height: 200px;
    max-height: 200px;
    box-shadow: $box-shadow;
    border-radius:  $border-radius;

  h2  {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    color: $black;
  }

  @media only screen and (min-width: $small-bp) { // Desktop / Big Screen
    height: 400px;
    max-height: 400px;
    margin: 2px auto $spacing-5;
  }
}

.card-action {
  transition: $transition;
  cursor: pointer;

  &:hover {
    background: $white - 10;
    box-shadow: $box-shadow-hover;
    cursor: pointer;
    transition: $transition;
  }
}

.card-image {
  border-radius:  $border-radius;
  background: $grey;
  overflow: hidden;
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 100%;
  max-height: 100%;
  height: 100%;
  
  &:hover {
    opacity: 0.8;
    transition: $transition;
  }
  
  @media screen and (min-width: $small-bp) {
    height: 100%;
    max-height: 100%;
  }
}

.cover-img {
  bottom: -1000%;
  left: -1000%;
  margin: auto;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  right: -1000%;
  top: -1000%;
  width: 100%;
  
}

</style>
