<template>
  <div id="app">
    <Button />
    <div class="btn" v-data-action-click="div">
      Div
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'app',
  components: {
    Button
  }
}
</script>
<style scoped>
#app {
  display: inline-flex;
}
.btn {
  color: #fff;
  background-color: #0ce2ba;
  height: 60px;
  width: 180px;
  font-size: 25px;
  margin: 5px;
  border: 0px;
  border-radius: 3px;
  text-align: center;
  line-height: 60px;
}
</style>
