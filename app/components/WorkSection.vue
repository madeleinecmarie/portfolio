<script setup lang="ts">
import { workCases } from '~/data/portfolio'
</script>

<template>
  <section id="arbeid" class="section">
    <div class="container">
      <p class="eyebrow">Arbeid</p>
      <h2 class="section-title">Seebrite · Frontend-utvikler</h2>
      <p class="section-lead">
        Siden juni 2023 har jeg utviklet SaaS-plattformen som store og små retailkjeder bruker i butikkene sine, både
        appen de ansatte bruker hver dag og adminløsningen bak den.
      </p>

      <ul class="cases">
        <li v-for="item in workCases" :key="item.title" class="case">
          <h3 class="case-title">{{ item.title }}</h3>
          <p class="case-summary">{{ item.summary }}</p>
          <ul class="case-points">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
          <ul class="tags">
            <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
          </ul>
        </li>
      </ul>

      <p class="note">
        Jeg har jobbet tett med designer og produkteiere fra første skisse til ferdig funksjon. I hverdagen har jeg brukt
        Claude Code aktivt for å jobbe raskere og tryggere, med egne arbeidsflyter for kodegjennomgang og XSS-sjekk, og
        klikkbare prototyper av ny design før utvikling.
      </p>
    </div>
  </section>
</template>

<style scoped>
.cases {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin: 40px 0 0;
  padding: 0;
  list-style: none;
}

.case {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: var(--radius);
  background: var(--surface);
}

.case-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.case-summary {
  margin: 0;
  color: var(--muted);
}

.case-points {
  margin: 0;
  padding-left: 18px;
  font-size: 15px;
  display: grid;
  gap: 4px;
}

.case .tags {
  margin-top: auto;
  padding-top: 8px;
}

.note {
  margin: 32px 0 0;
  max-width: 62ch;
  color: var(--muted);
}

@media (max-width: 720px) {
  .cases {
    grid-template-columns: minmax(0, 1fr);
  }

  .case {
    padding: 22px;
  }
}
</style>
