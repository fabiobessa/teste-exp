import type { MutationTree } from "vuex/types/index.js";
import type { SubjectState } from "./state";

const mutation: MutationTree<SubjectState> = {
  setContentLoad(state: SubjectState, payload: SubjectState['contentLoad']): void {
    state.contentLoad = {...state.contentLoad, ...payload}
  },

  setSubjectLoad(state: SubjectState, payload: SubjectState['subjectLoad']): void {
    state.subjectLoad = {...state.subjectLoad, ...payload}
  },

  setContent(state: SubjectState, payload: SubjectState['content']): void {
    state.content = payload
  },

  setSubject(state: SubjectState, payload: SubjectState['subject']): void {
    state.subject = payload
  }
}

export default mutation
