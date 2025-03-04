<template>
  <div class="accordion" :id="`accordionPanelsStayOpen-${sanitizedTitle}`">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`panelsStayOpen-heading-${sanitizedTitle}`">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          :data-bs-target="`#panelsStayOpen-${sanitizedTitle}`" aria-expanded="false"
          :aria-controls="`panelsStayOpen-${sanitizedTitle}`">
          <div>
            <span>
              {{ title }}
            </span>
            <div class="d-flex gap-3">
              <p>
                Aulas <strong>{{ lessons.quantity }} | {{ lessons.duration }}</strong>
              </p>
              <p>
                Exercícios <strong>{{ exercises.quantity }} | {{ exercises.duration }}</strong>
              </p>
              <p>
                Materiais <strong>{{ materials.quantity }} | {{ materials.duration }}</strong>
              </p>
            </div>
          </div>
        </button>

      </h2>
      <div :id="`panelsStayOpen-${sanitizedTitle}`" class="accordion-collapse collapse"
        :aria-labelledby="`panelsStayOpen-heading-${sanitizedTitle}`"
        :data-bs-parent="`#accordionPanelsStayOpen-${sanitizedTitle}`">
        <div v-if="typeof content === 'string'" class="accordion-body">
          {{ content }}
        </div>
        <div v-else class="accordion-body">
          <AccordionComponent v-for="subTopic in content" :key="subTopic.name" :title="subTopic.name"
            :content="subTopic.contentId ? subTopic.contentId : subTopic.subTopics" :lessons="subTopic.lessons"
            :exercises="subTopic.exercises" :materials="subTopic.materials" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Exercise, Lesson, Material, Topic } from '@/interface/caderno.interface';
import { computed } from 'vue';


const props = defineProps<{
  title: string
  content?: string | Topic[]
  lessons: Lesson
  exercises: Exercise
  materials: Material
}>()

const sanitizedTitle = computed(() => {
  return props.title.replace(/[^a-zA-Z0-9-_]/g, '')
})

</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: rgba(236, 202, 252, 255);
  color: rgba(45, 52, 68, 255);
}

.accordion-button:focus {
  border: none;
  box-shadow: none;
}
</style>
