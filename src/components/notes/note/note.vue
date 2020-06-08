<template>
  <div class="note">
    
    <div class="note__wrapper">
      
      <!-- header -->
      <div class="note__header">
        <h5> {{ note.Header || '' }} </h5>
      </div>
      
      <!-- todo-list -->
      <div class="note__todo-list">
        <todo-list :list="todos" />
      </div>
      
      <!-- actions -->
      <div class="note__actions">
        <button @click="toEdit" class="note__edit">Edit</button>
        <button @click="askForRemove" class="note__remove" type="button">Remove</button>
      </div>

    </div>

    <confirm v-if="showConfirm" 
      @confirm="confirm" 
      @cancel="showConfirm = false"
      :tabIndex="0"
      :class="['note__confirm', confirmToRight ? 'note__confirm_to-right' : 'note__confirm_to-left']"
      :width="confirmWidth">
        Вы действительно хотите удалить заметку?
    </confirm>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import todoList from '@/components/todo/list.vue'
  import confirm from '@/components/common/confirm/confirm.vue'
  
  import style from './style.scss'

  import { Note, Todo } from '@/types'

  import { isToRight } from '@/utils/common'

  import { NoteDataService } from '@/data/NoteDataService/NoteDataService'

  export default Vue.extend({
  name: 'note',
    components: {
      todoList,
      confirm
    },
    props: {
      note: Object as () => Note,
      tabIndex: Number
    },
    data() {
      return {
        style: style,
        showConfirm: false,
        confirmToRight: false,
        confirmWidth: 220,
        dataService: {} as NoteDataService
      }
    },
    mounted() {
      this.dataService = new NoteDataService(this.$store);
    },
    methods: {
      /**
       * Переход на страницу редактирования заметки
       */
      toEdit() {
        this.$router.push(`/edit/${this.note.Id}`)
      },
      /**
       * Подтверждение об удалении
       */
      askForRemove(event: MouseEvent) {
        this.showConfirm = true;
        this.confirmToRight = isToRight(event, this.confirmWidth);
      },
      /**
       * Подтверждение и удаление заметки
       */
      confirm() {
        this.dataService.DeleteNote(this.note);
        this.showConfirm = false;
      }
    },
    computed: {
      todos() {
        const todos = [...this.note.Todos] as Todo[];

        return todos.map((item) => {
          const todoItem = {...item};
          todoItem.Disabled = true;
          return todoItem;
        }).filter((item) => !item.Removed)
      }
    }
  })
</script>