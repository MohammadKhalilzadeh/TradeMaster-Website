<template>
  <div class="advertise">
    <center>
        <h1>
            مدیریت تبلیغات
        </h1>
    </center>
  </div>
</template>

<script>
export default {
  name: "Advertise",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.advertise{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}
</style>
