<script setup lang="ts">
import { studyProjects } from '~/data/portfolio'
</script>

<template>
  <section id="prosjekter" class="section">
    <div class="container">
      <p class="eyebrow">Prosjekter</p>
      <h2 class="section-title">Fra studietiden på Noroff</h2>
      <p class="section-lead">
        Et utvalg av det jeg laget på Noroff, fra de første nettsidene til en bookingside for overnatting. Du kan åpne
        hvert prosjekt og se koden på GitHub.
      </p>

      <ul class="grid">
        <li
          v-for="(project, index) in studyProjects"
          :key="project.slug"
          :class="{ first: index === 0, last: index === studyProjects.length - 1 }"
        >
          <ProjectCard :project="project" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px 24px;
  margin: 40px 0 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .first {
    grid-column: span 2;
  }

  .first :deep(.thumb) {
    aspect-ratio: 16 / 7;
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .last {
    grid-column: span 2;
  }

  .last :deep(.thumb) {
    aspect-ratio: 16 / 7;
  }
}
</style>
