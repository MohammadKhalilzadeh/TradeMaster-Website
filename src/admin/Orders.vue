<template>
  <div class="orders">
    <center>
        <h1>
            مدیریت سفارشات
        </h1>
    </center>
  </div>
</template>

<script>
export default {
  name: "Orders",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.orders{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}


</style>
