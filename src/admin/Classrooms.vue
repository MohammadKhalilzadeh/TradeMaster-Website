<template>
  <div class="classroom">
    <center>
        <h1>
          مدیریت کلاس‌ها
        </h1>

        <div class="course-form">
          <div class="row row-cols-auto" style="width: 100%;">

            <div class="col" style="width:50%">
              <input type="text" placeholder="عنوان" v-model="form.title">
            </div>
            <div class="col" style="width:50%">
              <input type="text" placeholder="مدرس" v-model="form.teacher">
            </div>

            <div class="col" style="width:33%">
              <input type="text" placeholder="ظرفیت" v-model="form.capacity">
            </div>
            <div class="col" style="width:33%">
              <input type="text" placeholder="زمان" v-model="form.time">
            </div>
            <div class="col" style="width:34%">
              <input type="text" placeholder="شهریه" v-model="form.tuition">
            </div>

            <div class="col" style="width:100%">
              <button id="create"  v-on:click="submit()" >
                ایجاد
              </button>
            </div>

          </div>
        </div>

        <div class="course-form">
          <h3>
            لیست کلاس‌ها
          </h3>

          <br>

          <table>
            <tr>
              <th>عنوان</th>
              <th>مدرس</th>
              <th>زمان</th>
              <th>ظرفیت</th>
              <th>عملیات</th>
            </tr>

            <tr v-for="course in courses" :key="course._id">
              <td style="width:20%">
                {{ course.title }}
              </td>
              <td style="width:20%">
                {{ course.teacher }}
              </td>
              <td style="width:30%">
                {{ course.time }}
              </td>
              <td style="width:10%">
                {{ course.capacity }}
              </td>
              <td style="width:20%">
                <button id="create"  v-on:click="deleteit(course._id)" >
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

import axios from "axios";

export default {
  name: "Classroom",
  props: {
    msg: String,
  },
  data: function (){
    return {
      form:{
        title:"",
        teacher:"",
        capacity:null,
        time:"",
        tuition:null,
      },
      courses:[],
    }
  },
  methods:{
    submit(){
      console.log(this.form);
      let url = process.env.VUE_APP_API_URL + "courses"
      console.log(url);
      axios.post(url, this.form)
      .then(function(res){
        console.log(res);
        if(res.status == 200){
          window.location.reload();
          alert("Done!!!")
        }
      })
    },
    deleteit(id) {
      let url = process.env.VUE_APP_API_URL + "courses/" + id
       axios.delete(url)
             .then(response => {
                 console.log(response);
                 if(response.status == 200){
                   window.location.reload();
                 }
             },
          );
    },
  },
  created(){
    let url = process.env.VUE_APP_API_URL + "courses"
    axios.get(url).then(res => {
      this.courses = res.data
      console.log(this.courses)

    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classroom{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.course-form{
  padding: 2%;
  width: 79%;
  margin: 5% 10% ;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

input{
  color: #000;
  padding: 2%;
  width: 96%;
  margin: 2%;
  border-radius: 15px;
  height: 40px;
  text-align: right;
}

#create{
  width: 98%;
  background:#D51637 ;
  color: #fff;
  margin: 1%;
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
  width: 100%;
}

</style>
