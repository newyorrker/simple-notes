import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Note } from '@/types'
import { NoteDataService } from '@/data/NoteDataService/NoteDataService'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const dataService = new NoteDataService(store);
dataService.GetNotes();