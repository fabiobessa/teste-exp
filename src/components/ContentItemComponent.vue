<template>
  <div class="form-check d-flex">
    <input class="form-check-input" type="checkbox" value="" :id="`flexCheckDefault-${sanitizedTitle}`">
    <label class="form-check-label ms-2" :for="`flexCheckDefault-${sanitizedTitle}`">
      {{ title }}
    </label>
    <span class="ms-auto">
      {{ duration }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string
  duration: string
  url: string //Usaria para levar o aluno para a página do conteúdo
}>()

const sanitizedTitle = computed(() => {
  return props.title.replace(/[^a-zA-Z0-9-_]/g, '')
})
</script>
