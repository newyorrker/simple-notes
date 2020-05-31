<template>
  <div class="edit">
    <h1>Note edit page</h1>
    <note-detail />
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';

  import noteDetail from '@/components/note-detail/note-detail.vue'

  export default Vue.extend({
    name: 'Edit',
    components: {
      noteDetail
    }
  })
</script>