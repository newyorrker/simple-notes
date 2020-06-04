<template>
  <button-common @click="$emit('click')" :class="style.buttonRed" :type="type" >
    <slot></slot>
  </button-common>
</template>

<script lang="ts">
  import Vue from 'vue'

  import buttonCommon from './button-common.vue'
  
  import style from './style.module.scss'

  export default Vue.extend({
  name: 'button-red',
    components: {
      buttonCommon
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