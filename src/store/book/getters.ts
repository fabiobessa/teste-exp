import type { GetterTree } from "vuex/types/index.js";
import type { SubjectState } from "./state";
import type { StateInterface } from "../types";

const getters: GetterTree<SubjectState, StateInterface> = {
  contentLoad(state: SubjectState) {
    return state.contentLoad
  },

  subjectLoad(state: SubjectState) {
    return state.subjectLoad
  },

  content(state: SubjectState) {
    return state.content
  },

  subject(state: SubjectState) {
    return state.subject
  }
}

export default getters
