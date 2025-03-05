<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(item, index) in history" :key="`${item.name}-${index}}`" class="breadcrumb-item"
        :class="{ 'active': index === history.length - 1 }">
        <a v-if="index != history.length - 1" :href="item.path" class="text-decoration-none text-body">{{ item.name
        }}</a>
        <span class="active-page" v-else>{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface HistoryItem {
  name: string
  path: string
}

defineProps<{ history: HistoryItem[] }>()
</script>

<style scoped>
.active-page {
  border-bottom: 3px solid #A505F0;
  padding-bottom: 2px;
}
</style>
