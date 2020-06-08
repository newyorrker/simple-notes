<template>
  <div class="edit">
    <h1> {{ $route.params.note_id ? 'Редактирование' : 'Создание' }} заметки</h1>
    <note-detail :id="$route.params.note_id" />
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';

  import noteDetail from '@/components/note-detail/note-detail.vue'

  export default Vue.extend({
    name: 'EditOrCreate',
    components: {
      noteDetail
    }
  })
</script>