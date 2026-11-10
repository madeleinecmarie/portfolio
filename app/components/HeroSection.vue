<script setup lang="ts">
import { cvUrl } from '~/data/portfolio'

const wavePath = (() => {
  const points: string[] = []
  for (let i = 0; i <= 360; i++) {
    const angle = (i / 360) * Math.PI * 2
    const radius = 128 + 4 * Math.sin(angle * 22)
    points.push(`${(150 + radius * Math.cos(angle)).toFixed(2)},${(150 + radius * Math.sin(angle)).toFixed(2)}`)
  }
  return `M${points.join(' L')} Z`
})()
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="eyebrow">Frontend-utvikler · Moss</p>
        <h1 class="title">Hei, jeg er Madeleine.</h1>
        <p class="lead">
          Jeg har over tre års erfaring med Vue, Nuxt og TypeScript, og trives best når jeg får gjøre en skisse om til
          noe som fungerer godt for den som bruker det. Jeg er opptatt av at det jeg lager er sikkert, gjennomtenkt og
          godt å bruke.
        </p>
        <div class="actions">
          <a class="button button-primary" href="#prosjekter">Se prosjektene</a>
          <a class="button button-ghost" :href="cvUrl" download>Last ned CV</a>
        </div>
      </div>
      <div class="portrait">
        <svg class="waves" viewBox="0 0 300 300" aria-hidden="true"><path :d="wavePath" /></svg>
        <div class="photo">
          <img src="/me.jpg" alt="Madeleine Bergvik" width="2000" height="1333">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: 72px 24px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  align-items: center;
  gap: 48px;
}

.title {
  margin: 0 0 20px;
  font-size: clamp(40px, 7vw, 68px);
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-wrap: balance;
}

.lead {
  margin: 0 0 32px;
  max-width: 52ch;
  font-size: 18px;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.portrait {
  position: relative;
  width: min(100%, 360px);
  aspect-ratio: 1;
  justify-self: center;
}

.waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.waves path {
  fill: none;
  stroke: var(--accent);
  stroke-width: 1.6;
  stroke-linejoin: round;
  opacity: 0.35;
}

.photo {
  position: absolute;
  inset: 13%;
  width: 74%;
  height: 74%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--surface);
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 20%;
  transform: translateY(7%) scale(1.9);
  transform-origin: 50% 24%;
}

@media (max-width: 800px) {
  .hero {
    padding-block: 40px 16px;
  }

  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .portrait {
    order: -1;
    width: min(100%, 260px);
  }
}
</style>
