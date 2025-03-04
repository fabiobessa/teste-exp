export interface Material {
  quantity: number;
  duration: string;
}

export interface Exercise {
  quantity: number;
  duration: string;
}

export interface Lesson {
  quantity: number;
  duration: string;
}

export interface LessonAndQuestion {
  name: string;
  duration: string;
  url: string
}

export interface TopicContent {
  name: string;
  quantity: number;
  duration: string;
  lessonsAndQuestion: LessonAndQuestion[]
}

export interface Topic {
  name: string;
  lessons: Lesson;
  exercises: Exercise;
  materials: Material;
  contentId?: string
  subTopics?: Topic[];
}

export interface Subject {
  name: string;
  topics: Topic[];
}

const classContent: TopicContent = {
  name: "TEORIA + QUESTÕES ORIENTADAS",
  quantity: 4,
  duration: "00:55:29",
  lessonsAndQuestion: [
  {
    name: 'Estrutura e Formação da Palavra I', duration: '00:11:49', url: ''
  },
  {
    name: 'Estrutura e Formação da Palavra II', duration: '00:14:00', url: ''
  },
  {
    name: 'Estrutura e Formação da Palavra III', duration: '00:15:14', url: ''
  }
  ,
  {
    name: 'Estrutura e Formação das Palavras IV: Um Passeio na Cozinha', duration: '00:11:56', url: ''
  }
]
}
