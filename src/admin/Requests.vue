<template>
  <div class="requests">
    <center>
        <h1>
            درخواست‌ها
        </h1>
    </center>
  </div>
</template>

<script>
export default {
  name: "Requests",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.requests{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}
</style>
