/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Subject, TopicContent } from "@/interface/caderno.interface";

export interface SubjectState {
  subjectLoad: {
    loading: boolean
    errors: any //Faria tipagem para erros padronizados da API
  }
  contentLoad: {
    loading: boolean
    errors: any
  }
  subject: Subject | null
  content: TopicContent | null
}

function state(): SubjectState {
  return {
    subjectLoad: {
      loading: false,
      errors: null
    },
    contentLoad: {
      loading: false,
      errors: null
    },
    content: null,
    subject: null
  }
}

export default state


