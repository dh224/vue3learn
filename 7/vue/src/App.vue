<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import ClassList from './components/ClassList.vue'

export default{
  components:{
    HelloWorld,
    ClassList
  },
  data(){
    return{
      title:'tit'
    }
  },
}
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <class-list/>
  <div class = "viewdiv"></div>
</template>

<style lang="scss">

</style>
