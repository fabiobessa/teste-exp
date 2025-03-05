import type { Module } from 'vuex/types/index.js'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state, { type SubjectState } from './state'
import type { StateInterface } from '../types'

const bookModule: Module<SubjectState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default bookModule
