<template>
  <div class="me">
    <div v-if="userInfo.id">
      主面板
    </div>
    <select-login v-else></select-login>
  </div>
</template>

<script>
import SelectLogin from './../Login/SelectLogin'
import {mapState} from 'vuex'
export default {
  name:'Home',
  components:{
    SelectLogin
  },computed: {
    ...mapState(['userInfo'])
  },
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .me 
    width 100%
    height 100%
    background #f5f5f5
</style>