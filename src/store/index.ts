import Vue from 'vue'
import Vuex from 'vuex'

import { Note, RootStateNotes } from '@/types'

import { setIndex } from './utils'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [] as Note[]
  },
  actions: {
    loadNotes({commit}, notes: Note[]) {
      setIndex(notes);
      commit('setNotes', notes);
    },
    addNote({ commit, state }, emptyNote: Note) {
      commit('setNotes', [...state.notes, ...[emptyNote]]);
    },
    //todo: изменить фильтрацию на флаг
    deleteNote({ commit, state }, noteId: number) {
      commit('setNotes', state.notes.filter((item) => item.Id != noteId))
    },
    updateNote({ commit, state }, note: Note) {
      const notes = state.notes.map((item) => item.Id === note.Id ? note : item)
      commit('setNotes', notes)
    },
    clearNotes({ commit, state }) {
      commit('setNotes', state.notes.filter((item) => item.Id >= 0))
    },
    setOriginNote({ commit, state }, note: Note) {
      const notes = state.notes.map((item) => item.Id === note.Id ? note : item)
      commit('setOriginNote', notes)
    }
  },
  mutations: {
    setOriginNote(state: RootStateNotes, notes: Note[]) {
      state.notes = notes
    },
    setNotes(state: RootStateNotes, notes: Note[]) {
      state.notes = notes
    }
  },
  getters: {
    note: (state: RootStateNotes) => (id: number) => {
      return state.notes.find(note => note.Id === id);
    },
    notesForDisplay(state: RootStateNotes): Note[] {
      return state.notes.filter((item) => item.Id >= 0 && !item.Removed);
    }
  }
})
