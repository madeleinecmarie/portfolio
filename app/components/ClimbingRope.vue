<script setup lang="ts">
const progress = ref(0)
const step = ref(false)

let frame = 0
let lastStepAt = 0

function update() {
  frame = 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0

  if (Math.abs(window.scrollY - lastStepAt) > 60) {
    lastStepAt = window.scrollY
    step.value = !step.value
  }
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div class="rope" :style="{ '--p': progress }" aria-hidden="true">
    <span class="anchor" />
    <svg class="climber" :class="{ step }" viewBox="0 0 40 48">
      <circle cx="20" cy="9" r="4" />
      <line x1="20" y1="13" x2="20" y2="28" />
      <path class="arms-a" d="M14 4 L20 18 L26 10" />
      <path class="arms-b" d="M14 10 L20 18 L26 4" />
      <path class="legs-a" d="M14 37 L20 28 L25 34" />
      <path class="legs-b" d="M15 34 L20 28 L26 37" />
    </svg>
  </div>
</template>

<style scoped>
.rope {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 28px;
  z-index: 5;
  width: 56px;
  pointer-events: none;
}

.rope::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 27px;
  width: 2px;
  background: repeating-linear-gradient(var(--accent) 0 6px, transparent 6px 8px);
  opacity: 0.5;
}

.anchor {
  position: absolute;
  top: 72px;
  left: 22px;
  width: 12px;
  height: 12px;
  border: 2px solid var(--accent);
  border-radius: 50%;
}

.climber {
  position: absolute;
  left: 0;
  width: 56px;
  height: 67px;
  top: calc(96px + (1 - var(--p)) * (100vh - 196px));
  fill: none;
  stroke: var(--accent);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: top 0.25s ease-out;
}

.climber circle {
  fill: var(--accent);
}

.arms-b,
.legs-b,
.step .arms-a,
.step .legs-a {
  display: none;
}

.step .arms-b,
.step .legs-b {
  display: inline;
}

@media (max-width: 1239px) {
  .rope {
    display: none;
  }
}
</style>
