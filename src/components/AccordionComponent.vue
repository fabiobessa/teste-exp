<template>
  <div class="accordion" :id="`accordionPanelsStayOpen-${sanitizedTitle}`">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`panelsStayOpen-heading-${sanitizedTitle}`">
        <button class="accordion-button collapsed" @click="handleAccordionClick" type="button" data-bs-toggle="collapse"
          :data-bs-target="`#panelsStayOpen-${sanitizedTitle}`" aria-expanded="false"
          :aria-controls="`panelsStayOpen-${sanitizedTitle}`">
          <div>
            <p class="mb-1" :class="{ 'fw-bold': isFirst }">
              {{ title }}
            </p>

            <div v-if="!isOpen || isFirst" class="d-md-flex gap-3 fs-7">
              <p class="mb-1">
                Aulas <strong>{{ lessons.quantity }} | {{ lessons.duration }}</strong>
              </p>

              <p class="mb-1">
                Exercícios <strong>{{ exercises.quantity }} | {{ exercises.duration }}</strong>
              </p>

              <p class="mb-1">
                Materiais <strong>{{ materials.quantity }} | {{ materials.duration }}</strong>
              </p>
            </div>
          </div>
        </button>
        <div class="w-100 px-3 active-selector">
          <div v-if="isOpen && !isFirst && typeof content === 'string'" class="d-flex pt-4 fs-7 gap-4">
            <button class="btn fs-7 p-0 m-0">
              <p class="mb-1" @click="handleIsActive('1')" :class="{ 'is-active': isActive === '1' }">
                Aulas <strong>{{ lessons.quantity }} | {{ lessons.duration }}</strong>
              </p>
            </button>

            <button class="btn fs-7 p-0 m-0">
              <p class="mb-1" @click="handleIsActive('2')" :class="{ 'is-active': isActive === '2' }">
                Exercícios <strong>{{ exercises.quantity }} | {{ exercises.duration }}</strong>
              </p>
            </button>

            <button class="btn fs-7 p-0 m-0">
              <p class="mb-1" @click="handleIsActive('3')" :class="{ 'is-active': isActive === '3' }">
                Materiais <strong>{{ materials.quantity }} | {{ materials.duration }}</strong>
              </p>
            </button>
          </div>
        </div>


      </h2>
      <div :id="`panelsStayOpen-${sanitizedTitle}`" class="accordion-collapse collapse"
        :aria-labelledby="`panelsStayOpen-heading-${sanitizedTitle}`"
        :data-bs-parent="`#accordionPanelsStayOpen-${sanitizedTitle}`">
        <div v-if="(typeof content != 'string')" class="accordion-body" :class="{ 'p-3': isFirst }">

          <AccordionComponent v-for="subTopic in content" :key="subTopic.name" :title="subTopic.name"
            :content="subTopic.contentId ? subTopic.contentId : subTopic.subTopics" :lessons="subTopic.lessons"
            :exercises="subTopic.exercises" :materials="subTopic.materials" :is-first="false" />

          <div class="content-body" v-if="!content?.length">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Est consectetur congue aliquam posuere congue himenaeos
            rutrum. Ligula vel sagittis congue nulla neque. Amet nostra id praesent; volutpat inceptos aptent integer.
            Aliquet eget magna congue convallis quam. Elementum himenaeos vivamus est nam sagittis. Tortor bibendum
            senectus cursus sapien malesuada. Elementum rutrum habitant proin cubilia condimentum. Per odio a tincidunt
            at proin sociosqu.
          </div>
        </div>

        <div v-else class="accordion-body content-body">
          <div v-if="contentLoad.loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <span v-if="contentLoad.errors">{{ contentLoad.errors }}</span>

          <div v-if="!contentLoad.loading && !contentLoad.errors && contentData">
            <div class="d-flex">
              <p class="mb-1">{{ contentData.name.toLocaleUpperCase() }}</p>

              <span class="ms-auto">
                {{ `${contentData.quantity} Aulas | ${contentData.duration}` }}
              </span>
            </div>

            <ContentItemComponent v-for="(content, index) in contentData.lessonsAndQuestion"
              :key="`${content.name}-${index}`" :title="content.name" :duration="content.duration" :url="content.url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentItemComponent from './ContentItemComponent.vue'
import type { Exercise, Lesson, Material, Topic } from '@/interface/caderno.interface';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import type { SubjectState } from '@/store/book/state';

const props = defineProps<{
  title: string
  content?: string | Topic[]
  lessons: Lesson
  exercises: Exercise
  materials: Material
  isFirst: boolean
}>()

const isOpen = ref<boolean>(false)
const isActive = ref<string>('1')
const store = useStore()

const contentData = computed<SubjectState['content']>(() => {
  return store.getters['book/content']
})

const contentLoad = computed<SubjectState['contentLoad']>(() => {
  return store.getters['book/contentLoad']
})

const sanitizedTitle = computed(() => {
  return props.title.replace(/[^a-zA-Z0-9-_]/g, '')
})

const getContent = (id: string) => store.dispatch('book/getContent', id)

async function handleAccordionClick() {
  isOpen.value = !isOpen.value

  if (typeof props.content != 'string' || contentData.value) return

  await getContent(props.content)
}

function handleIsActive(id: string) {
  isActive.value = id
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: rgba(236, 202, 252, 255);
  color: rgba(45, 52, 68, 255);
  border-bottom-color: rgba(236, 202, 252, 255);
}

.accordion-button:focus {
  border: none;
  box-shadow: none;
}

.accordion-button {
  border: none;
  box-shadow: none;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-body {
  padding: 0;
}

.content-body {
  padding: 1rem 1.25rem;
}

.fs-7 {
  font-size: 0.8rem;
}

.is-active {
  border-bottom: 3px solid #A505F0;
  padding-bottom: 2px;
}

.active-selector {
  background-color: rgba(236, 202, 252, 255);
}
</style>
