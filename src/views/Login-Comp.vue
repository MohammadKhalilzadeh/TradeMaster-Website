<template>
  <div class="login-comp">
    <center>
      <h3>
        {{ $t("Login_title") }}
      </h3>
      <br />
      <div class="login-fields">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          v-bind:placeholder="$t('GetStart_field7')"
          v-model="input"
        />
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          v-bind:placeholder="$t('GetStart_field5')"
          v-model="password"
        />
      </div>
      <button @click="UserProfile">
        {{ $t("Login_Btn") }}
      </button>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      input: "",
      password: "",
    };
  },
  methods: {
    UserProfile: function () {
      let url = "http://127.0.0.1:3000/users/single/" + this.input;
      axios
        .post(url, {
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 202) {
            this.$router.push({
              name: "Profile",
              params: { id: res.data._id },
            });
            this.input = "";
            this.password = "";
          } else {
            alert("Unable to get Data");
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-comp {
  overflow: hidden;
  width: 100%;
  padding: 5%;
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 700;
}

input {
  margin: 5% 0 5% 0;
  border-radius: 10px;
  background: white;
  box-shadow: 2px 2px 2px 2px rgba(58, 58, 58, 0.2),
    2px 2px 2px 0 rgba(141, 141, 141, 0.19);
  color: #0C5870;

}

.login-fields {
  width: 50%;
}

button {
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  border: none;
  color: white;
  padding: 10px 40px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button:hover {
  background: white;
  border: 1px solid #0C5870;
  color: #0C5870;
}
</style>
