<template>
  <div class="me">
    <select-login></select-login>
  </div>
</template>

<script>
import SelectLogin from './../Login/SelectLogin'
export default {
  name:'Home',
  components:{
    SelectLogin
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .me 
    width 100%
    height 100%
    background #f5f5f5
</style>