<template>
  <div class="tickets">
    <center>
        <h1>
            تیکت‌ها
        </h1>

        <div class="ticket-paper"  v-for="ticket in tickets" :key="ticket._id">
          <table>
            <tr>
              <th>{{ ticket.firstname }}</th>
              <th>{{ ticket.lastname }}</th>
            </tr>
            <tr>
              <th>{{ ticket.email }}</th>
              <th>{{ ticket.seen }}</th>
            </tr>
          </table> 
           <table>
            <tr>
              <td>{{ ticket.desc }}</td>
            </tr>
          </table>

          <button>
            بررسی شد
          </button>
        </div>

    </center>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Tickets",
  props: {
    msg: String,
  },
  data(){
    return {
      tickets:[]
    }
  },
  created(){
    let url = process.env.VUE_APP_API_URL + "tickets"
    axios.get(url).then(res => {
      this.tickets = res.data
      console.log(this.tickets)

    })
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tickets{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}

.ticket-paper{
  width: 70%;
  margin: 5% 10% ;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880;
}

table{
  border: 2px solid #D51637;
  padding: 1%;
}

th{
  width: 50%;
  border: 2px solid #D51637;
  padding: 1%;
}

td {
  width: 100%;
  padding: 1%;
}

table {
  width: 98%;
  margin: 1%;
}

button{
  width: 30%;
  background:#D51637 ;
  color: white;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid #D51637;
}

button:hover{
  background:#D51637 ;
  color: white;
   box-shadow: 0 4px 8px 0 #df1a3a8c, 0 6px 20px 0 #ce1b3880; 
}
</style>
