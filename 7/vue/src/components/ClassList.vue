<script>
import lessons from '../data/lessons.js'
export default{
    data(){
        return{
            lessons:lessons,
        }
    },
    methods:{
        de(){
          
        }
    }
}

</script>

<template>
  <div v-for="(lesson,index) in lessons" :key="index" >
      <span :class="{isDelete:!lesson.status}" >{{lesson.title}}</span>
      <button @click="lesson.status = !lesson.status">{{lesson.status?'删除':'恢复'}}</button>
  </div>
</template>

<style lang="scss" scoped>
span{
    &.isDelete{
        text-decoration: line-through;
    }
}
</style>
