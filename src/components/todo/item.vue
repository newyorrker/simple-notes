<template>
  <li class="todo-item">
    <input v-model="item.Checked" :disabled="item.Disabled" type="checkbox">
    
    <span v-show="!edit" 
      @click="clickHandler" :class="['todo-item__text', !item.Text ? 'todo-item__text_empty' : '']"> {{ item.Text }} </span>
    
    <input class="todo-item__text-input" v-show="edit"
      v-model="item.Text"
      @blur="edit = false"
      @keyup.enter="edit = false" 
      ref="textInput" 
      type="text">

    <button class="todo-item__delete" v-if="!item.Disabled" @click="deleteTodo">Удалить</button>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  import style from './style.scss'

  import { Todo } from '@/types'

  export default Vue.extend({
  name: 'todo-item',
    components: {

    },
    props: {
      item: Object as () => Todo
    },
    data() {
      return {
        style: style,
        edit: false
      }
    },
    methods: {
      /**
       * Удаление todo
       */
      deleteTodo() {
        this.item.Removed = true;
      },
      /**
       * Обработка клика на текст todo
       */
      clickHandler() {
        if(this.item.Disabled) return;

        const textElement = this.$refs.textInput as HTMLElement;
        this.edit = true;

        this.$nextTick(() => textElement.focus())
      }
    }
  })
</script>

<style lang="scss">
  .todo-item {
    list-style: none;
  }
  .todo-item + .todo-item {
    margin-top: 4px;
  }
</style>