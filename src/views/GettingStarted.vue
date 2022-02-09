<template>
  <div class="getstart">
    <center>
      <h2>
        {{ $t("GetStart_title") }}
      </h2>

      <div class="row row-cols-auto">
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field1')"
            v-model="firstname"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field2')"
            v-model="lastname"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field3')"
            v-model="email"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field4')"
            v-model="phone"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field5')"
            v-model="password"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            v-bind:placeholder="$t('GetStart_field6')"
            v-model="repassword"
          />
        </div>
      </div>
      <button v-on:click="regisrter">
        {{ $t("GetStart_Btn") }}
      </button>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    regisrter: function () {
      if (this.password == this.repassword) {
        axios
          .post("http://127.0.0.1:3000/users", {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            phone: this.phone,
          })
          .then((response) => {
            console.log(response);
            if (response.status == 201) {
              this.$router.push({
                name: "Profile",
                params: { id: response.data._id },
              });
              this.firstname = "";
              this.lastname = "";
              this.email = "";
              this.password = "";
              this.phone = "";
            }
          });
      } else {
        alert("Passwords not equal");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.getstart {
  padding: 5%;
  color: #0C5870;
  font-weight: 900;
}

h2 {
  padding: 2%;
}

.row {
  width: 90%;
  margin: 2%;
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
  border: 3px solid #0C5870;
  color: #0C5870;
}

input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 90%;
  border-radius: 8px;
}

@media screen and (min-width: 320px) {
  .col {
    width: 100%;
    padding: 2%;
  }
}

@media screen and (min-width: 500px) {
  .col {
    width: 50%;
    padding: 1%;
  }
}
</style>
