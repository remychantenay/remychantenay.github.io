<template>
  <header class="header">
    <router-link to="/">
      <label class="no-select">Home</label>
    </router-link>
    <router-link to="/contact">
      <label class="no-select">Contact</label>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "@/global-styles/variables.scss";

.header {
  background-color: $white;
  border-bottom: 1px solid $grey;
  position: sticky;
  top: 0;
  width: 100%;
  height: 56px;
  z-index: 3;

  label {
    cursor: pointer;
    float: left;
    height: 24px;
    width: fit-content;
    font-weight: 700;
    margin: $spacing-4 $spacing-4 $spacing-3;
  }

  &+ div {
    clear: both;
  }
}
</style>
