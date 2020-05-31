<template>
  <li class="todo-item">
    <label>
      <input type="checkbox">
      <span>some text</span>
    </label>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import style from './style.module.scss'

  export default Vue.extend({
  name: 'todo-item',
    components: {

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