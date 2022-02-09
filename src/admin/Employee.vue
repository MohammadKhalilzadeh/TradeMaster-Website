<template>
  <div class="employee">
    <center>
      <h1>
        مدیریت کارکنان
      </h1>

      <div class="emp-form">
          <div class="row row-cols-2">
            <div class="col">
              <input class="field" type="text" placeholder="نام" v-model="form.firstname">
            </div>
            <div class="col">
              <input class="field"  type="text" placeholder="نام خانوادگی" v-model="form.lastname">
            </div>
            <div class="col">
              <input class="field"  type="text" placeholder="نام کاربری" v-model="form.username">
            </div>
            <div class="col">
              <input class="field"  type="text" placeholder="پسورد" v-model="form.password">
            </div>
            <div class="col">
              <input class="field"  type="text" placeholder="نام کاربری" v-model="form.idnumber">
            </div>
            <div class="col">
              <input class="field"  type="text" placeholder="پسورد" v-model="form.repassword">
            </div>
          </div>
          <div class="row row-cols-5">

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.educations" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  آموزش
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.bills" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  صورتحساب ها
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.advertise" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  تبلیغات
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.product" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  محصولات
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.requests" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  درخواست ها
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.tickets" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  تیکت ها
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.orders" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  سفارشات
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.identifying" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  احراز هویت
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.allies" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  همکاران
                </label>
              </div>
            </div>

            <div class="col" style="width:20%">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="form.settings" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  تنظیمات
                </label>
              </div>
            </div>

          </div>
          <button id="create" v-on:click="submit()" >
            ایجاد
          </button>
      </div>

      <div class="emp-form">
            <table>
              <tr>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>آپدیت</th>
                <th>حذف</th>
              </tr>
              <tr v-for="ally in allies" :key="ally._id">
                <td> {{ ally.name }} </td>
                <td> {{ ally.phone }} </td>
                <td>
                  <button id="delete"  v-on:click="submit()" >
                    آپدیت
                  </button>
                </td>
                <td>
                  <button id="delete"  v-on:click="submit()" >
                    حذف
                  </button>
                </td>
              </tr>
            </table>
      </div>

    </center>
  </div>
</template>

<script>
export default {
  name: "Employee",
  props: {
    msg: String,
  },
  data(){
    return {
      form:{
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        idnumber:"",
        repassword:"",
        educations:false,
        bills:false,
        advertise:false,
        product:false,
        requests:false,
        tickets:false,
        orders:false,
        identifying:false,
        allies:false,
        settings:false,
      },
      allies:[]
    }
  },
  methods:{
    submit(){
      // let url = process.env.VUE_APP_API_URL + "ally"
      console.log(this.form);
      // axios.post(url, this.form)
      // .then(function(res){
      //   console.log(res);
      //   if(res.status == 201){
      //     window.location.reload();
      //     alert("Done!!!")
      //   }
      // })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.employee {
  padding: 3%;
  background: #1D2029;
  color: #fff;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.emp-form{
  width: 70%;
  margin: 5% 10% ;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

.field{
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

table, th, td {
  border: 2px solid #D51637;
  padding: 1%;
}

table {
  width: 98%;
  margin: 1%;
}
</style>
