<template>
  <div class="shopping">
    <Top></Top>
    <Intro> </Intro>
    <Services> </Services>
    <Platform> </Platform>
    <Footer> </Footer>
  </div>
</template>

<script>
import Top from "../views/Intro-Header.vue";
import Intro from "../views/Shop/GoShop-Intro.vue";
import Services from "../views/Shop/GoShop-Services.vue";
import Platform from "../views/Shop/GoShop-Platforms.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Top,
    Intro,
    Services,
    Platform,
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
