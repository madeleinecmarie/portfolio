<script setup lang="ts">
import { education, jobs, skillGroups } from '~/data/portfolio'
</script>

<template>
  <section id="om-meg" class="section">
    <div class="container about">
      <div class="story">
        <p class="eyebrow">Om meg</p>
        <div class="title-row">
          <h2 class="section-title">Fra butikkgulvet til koden</h2>
          <BalletDancer />
        </div>
        <p>
          Før jeg begynte å kode, jobbet jeg i butikk og kafé i mange år, blant annet som avdelingsleder på
          Stockfleths. Jeg tok høyere fagskoleutdanning i frontend-utvikling på Noroff og har jobbet som utvikler siden 2023.
        </p>
        <p>Jeg er oppvokst i Sverige og bor i Moss. På fritiden seiler jeg, klatrer og danser ballett.</p>

        <h3 class="sub">Erfaring</h3>
        <ul class="jobs">
          <li v-for="job in jobs" :key="job.place">
            <div>
              <strong>{{ job.place }}</strong>
              <span>{{ job.role }}</span>
            </div>
            <span class="period">{{ job.period }}</span>
          </li>
        </ul>

        <h3 class="sub">Utdanning</h3>
        <ul class="jobs">
          <li v-for="item in education" :key="item.place">
            <div>
              <strong>{{ item.place }}</strong>
              <span>{{ item.role }}</span>
            </div>
            <span class="period">{{ item.period }}</span>
          </li>
        </ul>
      </div>

      <div class="skills">
        <h3 class="sub sub-first">Ferdigheter</h3>
        <div v-for="group in skillGroups" :key="group.label" class="skill-group">
          <p class="skill-label">{{ group.label }}</p>
          <ul class="tags">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 64px;
}

.story p:not(.eyebrow) {
  margin: 0 0 16px;
  max-width: 60ch;
  color: var(--muted);
}

.sub {
  margin: 40px 0 16px;
  font-size: 18px;
  font-weight: 600;
}

.sub-first {
  margin-top: 0;
}

.jobs {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.jobs li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.jobs li > div {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.jobs span {
  font-size: 14px;
  color: var(--muted);
}

.jobs .period {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.skills {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 8px;
}

.skill-label {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 800px) {
  .about {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
}
</style>
