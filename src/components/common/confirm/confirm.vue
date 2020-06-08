<template>
  <div @blur="$emit('cancel')" class="confirm" :style="`max-width: ${width}px;`">
    <div class="confirm__header">
      <h6>
        <slot></slot>
      </h6>
    </div>
    <div class="confirm__actions">
      <button-blue @click="confirm">Да</button-blue>
      <button-transparent @click="$emit('cancel')">Отмена</button-transparent>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import style from './style.scss'

  import buttonBlue from '@/components/common/button/button-blue.vue'
  import buttonTransparent from '@/components/common/button/button-transparent.vue'

  export default Vue.extend({
  name: 'confirm',
    components: {
      buttonBlue,
      buttonTransparent
    },
    props: {
      text: String,
      width: Number
    },
    mounted() {
      document.addEventListener('mouseup', this.clickHandle);
    },
    data() {
      return {
        style: style
      }
    },
    methods: {
      confirm() {
        this.$emit('confirm');
      },
      clickHandle(event: MouseEvent) {
        const target = event.target as Element;
        const targetContains = this.$el.contains(target);

        if(!targetContains) {
          this.$emit('cancel')
        }
      }
    }
  })
</script>