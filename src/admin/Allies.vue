<template>
  <div class="allies">
    <center>
        <h3>
          مدیریت برندهای همکار
        </h3>
        
        <div class="ally-form">
          <div class="row row-cols-auto">
            <div class="col">
              <input type="text" placeholder="نام" v-model="form.name">
            </div>
            <div class="col">
              <input type="text" placeholder="تلفن" v-model="form.phone">
            </div>
            <div class="col">
              <input type="text" placeholder="آدرس" v-model="form.address">
            </div>
            <div class="col">
              <input type="text" placeholder="ایمیل" v-model="form.email">
            </div>
          </div>
          <button id="create" v-on:click="submit()" >
            ایجاد
          </button>
        </div>

        <div class="ally-form">
            <h4>
              لیست همکاران
            </h4>
            <br>
            <keep-alive>
            <table>
              <tr>
                <th>نام</th>
                <th>تلفن</th>
                <th>آدرس</th>
                <th>ایمیل</th>
                <th>عملیات</th>
              </tr>
              <tr v-for="ally in allies" :key="ally._id">
                <td> {{ ally.name }} </td>
                <td> {{ ally.phone }} </td>
                <td> {{ ally.address }} </td>
                <td> {{ ally.email }} </td>
                <td>
                  <button id="delete"  v-on:click="deleteally(ally._id)" >
                    حذف
                  </button>
                </td>
              </tr>
            </table>
            </keep-alive>
        </div>
        
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Allies",
  props: {
    msg: String,
  },
  data(){
    return {
      form:{
        name:"",
        phone:"",
        address:"",
        emial:"",
      },
      allies:[]
    }
  },
  methods:{
    submit(){
      let url = process.env.VUE_APP_API_URL + "ally"
      console.log(url);
      axios.post(url, this.form)
      .then(function(res){
        console.log(res);
        if(res.status == 201){
          window.location.reload();
          alert("Done!!!")
        }
      })
    },
    async deleteally(id) {
      let url = process.env.VUE_APP_API_URL + "ally/" + id
       await axios.delete(url)
             .then(response => {
                 console.log(response);
                 if(response.status == 200){
                   window.location.reload();
                 }
             });
    }
  },
  created(){
    let url = process.env.VUE_APP_API_URL + "ally"
    axios.get(url).then(res => {
      this.allies = res.data
      console.log(this.allies)

    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allies{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.ally-form{
  width: 70%;
  margin: 5% 10% ;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

input{
  padding: 0;
  width: 90%;
  margin: 5%;
  border-radius: 15px;
  height: 40px;
  text-align: center;
}

#create{
  width: 30%;
  background:#D51637 ;
  color: white;
  margin: 3%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #D51637;
}

#create:hover{
  background:#D51637 ;
  color: white;
   box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880; 
}

#delete {
  width: 90%;
  background:#D51637 ;
  color: white;
  margin: 3%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #D51637;
}



#delete:hover{
  background:#D51637 ;
  color: white;
   box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880; 
}

table, th, td {
  border: 2px solid #D51637;
  padding: 1%;
}

table {
  width: 98%;
  margin: 1%;
}

@media screen and (min-width: 900px) {

  .col {
    width: 25%;
    margin: 0px;
    padding: 0px;
  }
}
</style>
