<template>
  <div class="ticket">
    <center>
      <div class="row row-cols-auto">
        <div class="col col1">
          <center>
            <h4>{{ $t("Contact_us") }}</h4>
            <div class="tik-form">
              <div class="row row-cols-auto tikf">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-bind:placeholder="$t('GetStart_field1')"
                     v-model="form.firstname"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-bind:placeholder="$t('GetStart_field2')"
                     v-model="form.lastname"
                  />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                v-bind:placeholder="$t('GetStart_field3')"
                     v-model="form.email"
              />
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-bind:placeholder="$t('Contact_Comment')"
                     v-model="form.desc"
              >
              </textarea>
              <br />
              <button  v-on:click="submit()" >{{ $t("Contactus_btn") }}</button>
            </div>
          </center>
        </div>
        <div class="col col2">
          <center>
            <h6>We're always with you</h6>
            <br />
            <img src="../assets/redsign.jpg" alt="logo" />
          </center>
        </div>
      </div>
    </center>
  </div>
</template>

<script>

import axios from "axios";

export default {
  props: {
    msg: String,
  },
  data(){
    return {
      form:{
        firstname:"",
        lastname:"",
        emial:"",
        desc:"",
        seen:false,
      },
    }
  },
  methods:{
    submit(){
      let url = process.env.VUE_APP_API_URL + "tickets"
      console.log(url);
      axios.post(url, this.form)
      .then(function(res){
        console.log(res.data);
        if(res.status == 200){
          window.location.reload();
          alert("Done!!!")
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket {
  background: linear-gradient(138deg, rgba(12,88,112,1) 19%, rgba(25,153,171,1) 89%);
  padding: 5%;
  color: white;
}

img {
  width: 90%;
  border-radius: 20px;
}

span {
  color: #fd7d00;
}

input {
  margin: 1%;
}

textarea {
  margin: 1%;
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

@media screen and (min-width: 320px) {
  .col {
    width: 100%;
  }
}

@media screen and (min-width: 500px) {
  .col1 {
    width: 70%;
    padding: 2%;
  }

  .col2 {
    width: 30%;
    padding: 2%;
  }

  .tikf .col {
    width: 50%;
  }
}
</style>
