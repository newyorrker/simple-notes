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




// const notes: Note[] = [
//   {
//     Id: 1,
//     Header: 'Запланировать поездку',
//     Todos: [
//       {
//         Id: 1,
//         Text: 'Выбрать место',
//         Checked: true
//       },
//       {
//         Id: 2,
//         Text: 'Назначить даты отпуска',
//         Checked: false
//       },
//       {
//         Id: 3,
//         Text: 'Предупредить руковдителя',
//         Checked: false
//       },
//       {
//         Id: 4,
//         Text: 'Купить билеты',
//         Checked: false
//       },
//       {
//         Id: 5,
//         Text: 'Забронировать жильё',
//         Checked: false
//       }
//     ]
//   },
//   {
//     Id: 2,
//     Header: 'Получение пособия по безработице',
//     Todos: [
//       {
//         Id: 1,
//         Text: 'Анализ информации',
//         Checked: true
//       },
//       {
//         Id: 2,
//         Text: 'Сбор документов',
//         Checked: true
//       },
//       {
//         Id: 3,
//         Text: 'Запись на портале государственных услуг заочно',
//         Checked: false
//       }
//     ]
//   },
//   {
//     Id: 3,
//     Header: 'Открытие брокерского счёта',
//     Todos: [
//       {
//         Id: 1,
//         Text: 'Анализ информации',
//         Checked: true
//       },
//       {
//         Id: 2,
//         Text: 'Принятие решения по выбору брокера',
//         Checked: true
//       },
//       {
//         Id: 3,
//         Text: 'Заявка на открытие счёта',
//         Checked: true
//       },
//       {
//         Id: 4,
//         Text: 'Совершить первое пополнение счёта',
//         Checked: true
//       },
//       {
//         Id: 5,
//         Text: 'Купить акции Северстали',
//         Checked: false
//       }
//     ]
//   },
//   {
//     Id: 4,
//     Header: 'Открытие брокерского счёта',
//     Todos: [
//       {
//         Id: 1,
//         Text: 'Анализ информации',
//         Checked: true
//       },
//       {
//         Id: 2,
//         Text: 'Принятие решения по выбору брокера',
//         Checked: true
//       },
//       {
//         Id: 3,
//         Text: 'Заявка на открытие счёта',
//         Checked: true
//       },
//       {
//         Id: 4,
//         Text: 'Совершить первое пополнение счёта',
//         Checked: true
//       },
//       {
//         Id: 5,
//         Text: 'Купить акции Северстали',
//         Checked: false
//       }
//     ]
//   },
//   {
//     Id: 4,
//     Header: 'Открытие брокерского счёта',
//     Todos: [
//       {
//         Id: 1,
//         Text: 'Анализ информации',
//         Checked: true
//       },
//       {
//         Id: 2,
//         Text: 'Принятие решения по выбору брокера',
//         Checked: true
//       },
//       {
//         Id: 3,
//         Text: 'Заявка на открытие счёта',
//         Checked: true
//       },
//       {
//         Id: 4,
//         Text: 'Совершить первое пополнение счёта',
//         Checked: true
//       },
//       {
//         Id: 5,
//         Text: 'Купить акции Северстали',
//         Checked: false
//       }
//     ]
//   }
// ]

// store.dispatch('loadNotes', notes)