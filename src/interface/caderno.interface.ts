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
