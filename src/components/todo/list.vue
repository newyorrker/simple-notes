<template>
  <ul class="todo-list">
    <todo-item />
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import style from './style.module.scss'

  import todoItem from './item.vue'

  export default Vue.extend({
  name: 'todo-list',
    components: {
      todoItem
    },
    props: {

    },
    data() {
      return {
      // style: style
      }
    },
  })
</script>