<template>
  <ul class="todo-list">
    <todo-item v-for="item in list" :item="item" :key="item.Index" />
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import style from './style.module.scss'
  import todoItem from './item.vue'

  import { Todo } from '@/types'
  
  export default Vue.extend({
  name: 'todo-list',
    components: {
      todoItem
    },
    props: {
      list: Array as () => Todo[]
    },
    data() {
      return {
      // style: style
      }
    },
  })
</script>

<style lang="scss">
  .todo-list {
    margin-top: 0;
    padding-left: 0;
  }
</style>