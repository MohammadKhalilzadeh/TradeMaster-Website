<template>
  <div class="export-import">
    <Top></Top>
    <Intro> </Intro>
    <World> </World>
    <Spec> </Spec>
    <Footer> </Footer>
  </div>
</template>

<script>
import Top from "../views/Intro-Header.vue";
import Intro from "../views/EI/EI-Intro.vue";
import World from "../views/EI/EI-World.vue";
import Spec from "../views/EI/EI-Desc.vue";
import Footer from "../views/Footer.vue";

export default {
  components: {
    Top,
    Intro,
    World,
    Spec,
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
