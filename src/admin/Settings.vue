<template>
  <div class="setting">
    <center>
        <h1>
            تنظیمات
        </h1>
    </center>
  </div>
</template>

<script>
export default {
  name: "Setting",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.setting{
  padding: 3%;
  background: #1D2029;
  color: #fff;
  overflow: hidden;
  font-family: 'IranNastaliq', Arial, sans-serif;
}
</style>
