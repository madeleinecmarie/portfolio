<script setup lang="ts">
import type { ShowcaseSlide } from '~/types/portfolio'

const props = withDefaults(defineProps<{ slides: ShowcaseSlide[]; name: string; fit?: 'cover' | 'contain' }>(), {
  fit: 'cover',
})
const slides = props.slides

const DURATION = 6000
const active = ref(0)
const paused = ref(false)
const cycle = ref(0)
let timer: ReturnType<typeof setTimeout> | undefined
let autoplay = false

function schedule() {
  clearTimeout(timer)
  cycle.value++
  if (autoplay && !paused.value) timer = setTimeout(() => go((active.value + 1) % slides.length), DURATION)
}

function go(index: number) {
  active.value = index
  schedule()
}

function pause(value: boolean) {
  paused.value = value
  if (value) clearTimeout(timer)
  else schedule()
}

onMounted(() => {
  autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  schedule()
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <figure class="showcase" @mouseenter="pause(true)" @mouseleave="pause(false)">
    <div class="frame">
      <div class="bar" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div class="screen" :class="fit">
        <template v-for="(slide, index) in slides" :key="slide.title">
        <img
          v-if="slide.src"
          :src="slide.src"
          :alt="`${name}: ${slide.title}`"
          :class="{ active: index === active, still: slide.overlay }"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :width="slide.width"
          :height="slide.height"
        >
        </template>
        <iframe
          v-if="slides[active]?.overlay"
          :key="active"
          class="overlay"
          :src="slides[active]?.overlay"
          title="Animasjon"
          tabindex="-1"
          aria-hidden="true"
        />
      </div>
    </div>

    <figcaption class="steps">
      <button
        v-for="(slide, index) in slides"
        :key="slide.title"
        type="button"
        class="step"
        :class="{ active: index === active, paused }"
        :aria-current="index === active ? 'step' : undefined"
        @click="go(index)"
      >
        <span class="progress" aria-hidden="true"><span :key="index === active ? cycle : -1" /></span>
        <strong>{{ slide.title }}</strong>
        <span class="text">{{ slide.text }}</span>
      </button>
    </figcaption>
  </figure>
</template>

<style scoped>
.showcase {
  margin: 0;
}

.frame {
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--surface);
  box-shadow: 0 20px 50px rgb(0 0 0 / 0.08);
}

.bar {
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--line);
}

.bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--line);
}

.screen {
  position: relative;
  aspect-ratio: 1918 / 982;
  overflow: hidden;
  background: #f5f7fa;
}

.screen img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  opacity: 0;
  transform: scale(1);
  transform-origin: 30% 30%;
  transition: opacity 0.8s ease;
}

.contain img {
  object-fit: contain;
  object-position: center;
  padding: 24px;
  box-sizing: border-box;
  transform-origin: 50% 50%;
  filter: drop-shadow(0 12px 30px rgb(0 0 0 / 0.12));
}

.overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  color-scheme: normal;
  pointer-events: none;
}

.screen img.active.still {
  animation: none;
}

.screen img.active {
  opacity: 1;
  animation: zoom 6s ease-out both;
}

@keyframes zoom {
  to {
    transform: scale(1.06);
  }
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--muted);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.step strong {
  font-size: 15px;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.2s;
}

.step.active strong,
.step:hover strong {
  color: var(--text);
}

.text {
  font-size: 13px;
  line-height: 1.5;
}

.progress {
  display: block;
  height: 3px;
  margin-bottom: 8px;
  border-radius: 2px;
  background: var(--line);
  overflow: hidden;
}

.progress span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--accent);
}

.step.active .progress span {
  animation: fill 6s linear both;
}

.step.active.paused .progress span,
.showcase:hover .screen img.active {
  animation-play-state: paused;
}

@keyframes fill {
  to {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .step.active .progress span {
    width: 100%;
  }
}

@media (max-width: 720px) {
  .steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
