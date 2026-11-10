<script setup lang="ts">
import { contactLinks, cvUrl } from '~/data/portfolio'

const isExternal = (href: string) => href.startsWith('http')
</script>

<template>
  <section id="kontakt" class="section contact">
    <div class="container">
      <p class="eyebrow">Kontakt</p>
      <div class="title-row">
        <h2 class="section-title">La oss ta en prat</h2>
        <CoffeeCup />
      </div>
      <p class="section-lead">
        Jeg ser etter en ny jobb som frontend-utvikler. Ta gjerne kontakt, eller last ned CV-en min.
      </p>

      <ul class="links">
        <li v-for="link in contactLinks" :key="link.label">
          <span class="label">{{ link.label }}</span>
          <a
            :href="link.href"
            :target="isExternal(link.href) ? '_blank' : undefined"
            :rel="isExternal(link.href) ? 'noopener' : undefined"
          >{{ link.value }}</a>
        </li>
      </ul>

      <a class="button button-primary" :href="cvUrl" download>Last ned CV</a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--surface);
}

.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 20px 24px;
  margin: 36px 0;
  padding: 0;
  list-style: none;
}

.links li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.label {
  font-size: 13px;
  color: var(--muted);
}

.links a {
  font-weight: 500;
  overflow-wrap: anywhere;
  text-decoration-color: var(--line);
  text-underline-offset: 4px;
}

.links a:hover {
  color: var(--accent);
  text-decoration-color: var(--accent);
}
</style>
