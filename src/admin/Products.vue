<template>
  <div class="product">
    <center>
        <h2>
          محصولات
        </h2>

        <div class="product-maker">
          <div class="row row-cols-auto" style="width: 100%;">
            <div class="col">
              <input type="text" placeholder="نام" v-model="form.name">
            </div>
            <div class="col">
              <select
                class="custom-select"
                v-model="form.unit"
                @change="handleChange1($event)"
              >
                <option value="number">تعدادی</option>
                <option value="weigh">وزنی</option>
              </select>
            </div>
            <div class="col">
              <input type="text" placeholder="قیمت" v-model="form.price">
            </div>
            <div class="col">
              <select
                class="custom-select"
                v-model="form.available"
                @change="handleChange2($event)"
              >
                <option :value="true">موجود</option>
                <option :value="false">ناموجود</option>
              </select>
            </div>
            <div class="col">
              <select
                class="custom-select"
                v-model="form.owner"
                @change="handleChange3($event)"
              >
                <option value="trademaster">TradeMaster</option>
                <option value="arm"> آریا رادمان مهر </option>
                <option value="farshkhatam">فرش خاتم</option>
              </select>
            </div>
            <div class="col1">
              <textarea name="message" rows="5" cols="30"  placeholder="توضیحات" v-model="form.description"></textarea>
            </div>
          </div>
          <button id="create" v-on:click="submit()" >
            ایجاد
          </button>
        </div>

        <div class="product-maker">
          <h3>
            لیست محصولات
          </h3>

          <br>

          <table>
              <tr>
                <th>نام</th>
                <th>موجودی</th>
                <th>عکس</th>
                <th>عملیات</th>
              </tr>
              <tr v-for="product in products" :key="product._id">
                <td> {{ product.name }} </td>
                <td> 
                  <select
                    class="custom-select"
                    v-model="product.available"
                    @change="updateavaiablity($event, product._id)"
                  >
                    <option :value="true">موجود</option>
                    <option :value="false">ناموجود</option>
                  </select>
                </td>
                <td style="width:20%"> 
                  <input type="file" @change="handleFileUpload($event)" >
                  <button id="delete" v-on:click="submitFile(product._id)">آپلود</button>
                </td>
                <td>
                  <button id="delete"  v-on:click="deletep(product._id)" >
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
  name: "Product",
  props: {
    msg: String,
  },
  data: function (){
    return {
      form:{
        name:"",
        unit:"number",
        price:null,
        available:true,
        owner:"trademaster",
        description:"",
      },
      update:true,
      file:'',
      products:[]
    }
  },
  methods:{
    submit(){
      console.log(this.form);
      let url = process.env.VUE_APP_API_URL + "products"
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
    handleChange1(event) {
        this.form.unit = event.target.value
    },
    handleChange2(event) {
        this.form.available = event.target.value
    },
    handleChange3(event) {
        this.form.owner = event.target.value
    },
    updateavaiablity(event,id) {
      console.log(id);
      console.log(event.target.value);
        axios.put(process.env.VUE_APP_API_URL + "products/" + id, 
          { 
            available: event.target.value,
          },
        ).then(response => {
          console.log(response);
          if(response.status == 200){
            alert("Done")
            window.location.reload();
          }
        })
    },
    deletep(id) {
      let url = process.env.VUE_APP_API_URL + "products/" + id
       axios.delete(url)
             .then(response => {
                 console.log(response);
                 if(response.status == 200){
                   window.location.reload();
                 }
             });
    },
    handleFileUpload(event){
      this.file = event.target.files[0]
    },
    submitFile(id){
      // let formData = new FormData();
      // formData.append('image', this.file);
      console.log(id);
      axios.post( process.env.VUE_APP_API_URL + "products/image/" + id,
                // formData,
                {
                  "image":this.file,
                },
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              },
              {
              progress(e) {
                if (e.lengthComputable) {
                  console.log(e.loaded / e.total * 100);
                }
              },}
            ).then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        });

    },
  },
  created(){
    let url = process.env.VUE_APP_API_URL + "products"
    axios.get(url).then(res => {
      this.products = res.data
      console.log(this.products)

    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.product-maker{
  padding: 2%;
  width: 79%;
  margin: 5% 10% ;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

input,select,option {
  color: #000;
  padding: 0;
  width: 90%;
  margin: 5%;
  border-radius: 15px;
  height: 40px;
  text-align: center;
}

.col1{
  width: 100%;
}

textarea{
  width: 99%;
  margin: 1%;
  border-radius: 7px; 
}

#create{
  width: 30%;
  background:#D51637 ;
  color: #fff;
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
@media screen and (min-width: 900px) {

  .col {
    width: 20%;
    margin: 0px;
    padding: 0px;
  }
}

</style>
