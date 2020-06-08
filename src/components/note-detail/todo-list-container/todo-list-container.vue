<template>
  <div class="todo-list-container">
    <todo-list class="todo-list-container__list" :list="list && list.filter((item) => !item.Removed)" />
      <!-- добавить -->
      <div class="todo-list-container__add">
        <button  @click="$emit('add')" type="button">+</button>
      </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import todoList from '@/components/todo/list.vue'

  import { Todo } from '@/types'
  import style from './style.scss'

  export default Vue.extend({
  name: 'todo-list-container',
    components: {
      todoList
    },
    props: {
      list: Array as () => Todo[]
    },
    data() {
      return {
        style: style
      }
    },
  })
</script>