<template>
  <div class="container">
    <TopBar />
    <div class="px-4">
      <BreadCrumbComponent
        :history="[{ name: 'Cadernos', path: '/cadernos' }, { name: 'Língua Portuguesa', path: '/lingua-portuguesa' }]" />
      <section>
        <div v-if="!subjectLoad.loading && !subjectLoad.errors && subject">
          <AccordionComponent class="mb-3" v-for="(topic, index) in subject.topics" :key="topic.name"
            :title="`${(index + 1).toString()}. ${topic.name}`"
            :content="topic.contentId ? topic.contentId : topic.subTopics" :lessons="topic.lessons"
            :exercises="topic.exercises" :materials="topic.materials" :is-first="true" />
        </div>
        <div v-if="subjectLoad.loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <span v-if="subjectLoad.errors">{{ subjectLoad.errors }}</span>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionComponent from './AccordionComponent.vue';
import BreadCrumbComponent from './BreadCrumbComponent.vue';
import TopBar from './TopBar.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import type { SubjectState } from '@/store/book/state';

const store = useStore()

const subject = computed<SubjectState['subject']>(() => {
  return store.getters['book/subject']
})

const subjectLoad = computed<SubjectState['subjectLoad']>(() => {
  return store.getters['book/subjectLoad']
})

onMounted(async () => {
  await getSubject('123')
})

const getSubject = (id: string) => store.dispatch('book/getSubject', id)
</script>

<style scoped></style>
