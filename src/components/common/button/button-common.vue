<template>
  <button :class="style.buttonDefault" @click="$emit('click')" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'
  import style from './style.module.scss'

  export default Vue.extend({
  name: 'button-common',
    components: {

    },
    props: {
      type: {
        type: String,
        required: false,
        default: 'button'
      }
    },
    data() {
      return {
      style: style
      }
    },
  })
</script>