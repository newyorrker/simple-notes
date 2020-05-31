<template>
  <div class="note-detail">
    <!-- редактирование текста заметки -->
    <div class="note-detail__text">
      <p>Текст для редактирования</p>
    </div>
    
    <!-- тудушки -->
    <div class="note-detail__todos">
      <!-- добавить -->
      <!-- удалить -->
      <!-- отредактировать текст -->
      <!-- отметить -->
    </div>

    <!-- действия -->
    <div class="note-detail__actions">
        <!-- сохранить -->
        <!-- отменить -->
        <!-- удалить -->
        <!-- отменить внесенное изменение -->
        <!-- повторить внесенное изменение -->
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  // import style from './style.module.scss'

  export default Vue.extend({
  name: 'note-detail',
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