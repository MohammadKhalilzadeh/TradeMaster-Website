<template>
  <div class="Contact-Us">
    <Top></Top>
    <Info> </Info>
    <Footer> </Footer>
  </div>
</template>

<script>
import Top from "../views/Intro-Header.vue";
import Info from "../views/Ticketing.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Top,
    Info,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
