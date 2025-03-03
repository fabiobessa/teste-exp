interface Material {
  quantity: number;
  duration: string;
}

interface Exercise {
  quantity: number;
  duration: string;
}

interface Lesson {
  quantity: number;
  duration: string;
}

interface LessonAndQuestion {
  name: string;
  duration: string;
  url: string
}

interface TopicContent {
  name: string;
  quantity: number;
  duration: string;
  lessonsAndQuestion: LessonAndQuestion[]
}

interface SubTopic {
  name: string;
  lessons: Lesson;
  exercises: Exercise;
  materials: Material;
  contentId?: string;
  subTopics?: SubTopic[];
}

interface Topic {
  name: string;
  lessons: Lesson;
  exercises: Exercise;
  materials: Material;
  content?: TopicContent
  subTopics?: SubTopic[];
}

interface Subject {
  name: string;
  topics: Topic[];
}

const linguaPortuguesa: Subject = {
  name: "Língua Portuguesa",
  topics: [
    {
      name: "Interpretação de Textos",
      lessons: { quantity: 1193, duration: "100h 22m" },
      exercises: { quantity: 181, duration: "79h 12m" },
      materials: { quantity: 53, duration: "86h 03m" },
      subTopics: [
        {
          name: "Competência 01: Palavras, Imagem e Vida Social",
          lessons: { quantity: 523, duration: "44h 59m" },
          exercises: { quantity: 62, duration: "28h 39m" },
          materials: { quantity: 12, duration: "34h 03m" }
        },
        {
          name: "Competência 06: Texto – Contexto e Função",
          lessons: { quantity: 510, duration: "42h 24m" },
          exercises: { quantity: 90, duration: "38h 54m" },
          materials: { quantity: 29, duration: "39h 03m" }
        },
        {
          name: "Competência 07: Opiniões e Pontos de Vista",
          lessons: { quantity: 0, duration: "" },
          exercises: { quantity: 0, duration: "" },
          materials: { quantity: 0, duration: "" },
          subTopics: [
            {
              name: "1.1 Linguagem Verbal e Não Verbal",
              lessons: { quantity: 2, duration: "00h 18m" },
              exercises: { quantity: 3, duration: "00h 48m" },
              materials: { quantity: 3, duration: "01h 03m" }
            },
            {
              name: "1.2 Estratégias Empregadas na Construção do Texto",
              lessons: { quantity: 67, duration: "04h 49m" },
              exercises: { quantity: 10, duration: "04h 12m" },
              materials: { quantity: 3, duration: "04h 42m" }
            },
            {
              name: "1.3 Voz Autoral, Crítica e Perspectiva do Eu-Lírico",
              lessons: { quantity: 62, duration: "05h 34m" },
              exercises: { quantity: 10, duration: "04h 12m" },
              materials: { quantity: 3, duration: "04h 54m" }
            }
          ]
        },
        {
          name: "Competência 08: Diversidade Linguística",
          lessons: { quantity: 29, duration: "02h 15m" },
          exercises: { quantity: 6, duration: "02h 27m" },
          materials: { quantity: 3, duration: "02h 18m" }
        }
      ]
    },
    {
      name: "Gramática",
      lessons: { quantity: 86, duration: "14h 41m" },
      exercises: { quantity: 27, duration: "10h 45m" },
      materials: { quantity: 10, duration: "10h 00m" },
      subTopics: [
        {
          name: "2.1 Fonologia",
          lessons: { quantity: 7, duration: "01h 09m" },
          exercises: { quantity: 4, duration: "01h 36m" },
          materials: { quantity: 2, duration: "01h 36m" }
        },
        {
          name: "2.2 Morfologia",
          lessons: { quantity: 4, duration: "00h 55m" },
          exercises: { quantity: 6, duration: "02h 45m" },
          materials: { quantity: 1, duration: "00h 48m" },
          subTopics: [
            {
              name: "A. Estrutura e Formação das Palavras",
              lessons: { quantity: 4, duration: "00h 55m" },
              exercises: { quantity: 6, duration: "02h 45m" },
              materials: { quantity: 1, duration: "00h 48m" },
              contentId: '123test'
            }
          ]
        },
        {
          name: "B. Classes de Palavras",
          lessons: { quantity: 27, duration: "04h 41m" },
          exercises: { quantity: 1, duration: "00h 21m" },
          materials: { quantity: 1, duration: "02h 09m" }
        },
        {
          name: "2.3 Sintaxe",
          lessons: { quantity: 48, duration: "07h 54m" },
          exercises: { quantity: 16, duration: "06h 03m" },
          materials: { quantity: 6, duration: "05h 27m" }
        }
      ]
    }
  ]
};

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
