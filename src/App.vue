<template>
  <div id="app" v-bind:dir="direction" v-bind:style="aligns">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      direction: localStorage.getItem("direction") || "rtl",
      aligns: localStorage.getItem("aligns") || "text-align: right ;",
    };
  },
};
</script>

<style lang="scss"></style>
