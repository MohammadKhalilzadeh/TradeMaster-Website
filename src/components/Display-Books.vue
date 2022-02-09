<template>
  <div class="display-books">
    <center>
      <div class="top-menu">
        <div class="row row-cols-auto">
          <div class="col">
            <button @click="UserProfile()">Profile</button>
          </div>
          <div class="col">
            <h5>Muhammad</h5>
          </div>
          <div class="col">
            <button>Quit</button>
          </div>
        </div>
      </div>
    </center>
    <Searchbar></Searchbar>
  </div>
</template>

<script>
import Searchbar from "../views/Books/Book-Searchbar.vue";

export default {
  name: "ListofBooks",
  props: {
    msg: String,
  },
  components: {
    Searchbar,
  },
  methods: {
    UserProfile() {
      this.$router.push({ name: "Profile", params: { id: "[paramdata]" } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display-books {
  width: 100%;
  background-color: #015351;
  padding: 2%;
}

.top-menu {
  width: 70%;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
}

button {
  width: 80%;
  padding: 2%;
  background-color: #113d3c;
  border: none;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover {
  background-color: #015351;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
  .col {
    width: 33%;
  }
}
</style>
