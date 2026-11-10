<script setup lang="ts">
import type { StudyProject } from '~/types/portfolio'

defineProps<{ project: StudyProject }>()
</script>

<template>
  <article class="card">
    <a class="thumb" :href="project.liveUrl" target="_blank" rel="noopener">
      <img :src="project.image" :alt="`Skjermbilde av ${project.title}`" width="1280" height="800" loading="lazy">
    </a>
    <div class="body">
      <p class="kind">{{ project.kind }}</p>
      <h3 class="title">{{ project.title }}</h3>
      <p class="description">{{ project.description }}</p>
      <ul v-if="project.tags.length" class="tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="links">
        <a :href="project.liveUrl" target="_blank" rel="noopener">Se siden</a>
        <a :href="project.repoUrl" target="_blank" rel="noopener">Kode på GitHub</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.thumb {
  display: block;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  aspect-ratio: 16 / 10;
  background: var(--surface);
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}

.thumb:hover img {
  transform: scale(1.03);
}

.body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.kind {
  margin: 0;
  font-size: 13px;
  color: var(--muted);
}

.title {
  margin: 0;
  font-size: 19px;
  font-weight: 600;
}

.description {
  margin: 0;
  font-size: 15px;
  color: var(--muted);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  margin-top: auto;
  padding-top: 4px;
  font-size: 14px;
  font-weight: 500;
}

.links a {
  color: var(--accent);
  text-underline-offset: 3px;
}
</style>
