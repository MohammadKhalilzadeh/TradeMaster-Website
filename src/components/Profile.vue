<template>
  <div class="profile">
    <ToolBar></ToolBar>

    <div class="row row-cols-auto">
      <div class="col col1">
        <UserInfo :info="this.personinfo"></UserInfo>
      </div>
      <div class="col col2">
        <UserDoc :userid="this.personinfo._id"></UserDoc>
      </div>
    </div>
  </div>
</template>

<script>
import ToolBar from "../views/profile/Profile-Toolbar.vue";
import UserInfo from "../views/profile/User-Info.vue";
import UserDoc from "../views/profile/User-Doc.vue";
import axios from "axios";

export default {
  props: {
    person: Object,
  },
  components: {
    ToolBar,
    UserInfo,
    UserDoc,
  },
  data() {
    return {
      personinfo: null,
      url: "",
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    this.url = urlParams.get("id");
    let newurl = "http://127.0.0.1:3000/users/" + this.url;

    axios.get(newurl).then((response) => {
      if (response.status == 200) {
        this.personinfo = response.data;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  width: 100%;
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  overflow: hidden;
}

row {
  width: 100%;
}

@media screen and (min-width: 320px) {
}

@media screen and (min-width: 500px) {
}

@media screen and (min-width: 900px) {
  .col1 {
    width: 25%;
  }
  .col2 {
    width: 75%;
  }
}
</style>
