<template>
  <div class="note">
    <div class="note__header">
      <h5> {{ header }} </h5>
    </div>
    <div class="note__todo-list">
      <todo-list />
    </div>
    <div class="note__actions">
      <button>Edit</button>
      <button>Remove</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import todoList from '@/components/todo/list.vue'
  // import style from './style.module.scss'

  export default Vue.extend({
  name: 'note',
    components: {
      todoList
    },
    props: {

    },
    data() {
      return {
        header: 'Some header'
      // style: style
      }
    },
  })
</script>