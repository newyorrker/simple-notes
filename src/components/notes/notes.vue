<template>
  <div class="notes">
    <note class="notes__item" />
    <div class="notes__actions">
      <button @click="createNewNote">Create</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import note from './note/note.vue'
  // import style from './style.module.scss'

  export default Vue.extend({
    name: 'notes',
    components: {
      note
    },
    props: {

    },
    data() {
        return {
            // style: style
        }
    },
    methods: {
      createNewNote() {
        console.log('creating new note');
      }
    }
  })
</script>