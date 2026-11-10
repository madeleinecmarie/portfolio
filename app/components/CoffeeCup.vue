<template>
  <svg class="cup" viewBox="0 0 64 64" aria-hidden="true">
    <g class="steam">
      <path d="M24 22 c-3 -4 3 -6 0 -10 s3 -6 0 -9" />
      <path d="M32 22 c-3 -4 3 -6 0 -10 s3 -6 0 -9" />
      <path d="M40 22 c-3 -4 3 -6 0 -10 s3 -6 0 -9" />
    </g>
    <path class="fill" d="M15 28 H49 V40 a12 12 0 0 1 -12 12 H27 a12 12 0 0 1 -12 -12 Z" />
    <path d="M49 31 h3 a5 5 0 0 1 0 10 h-4" />
    <line x1="11" y1="57" x2="53" y2="57" />
  </svg>
</template>

<style scoped>
.cup {
  width: 72px;
  height: 72px;
  fill: none;
  stroke: var(--accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fill {
  fill: var(--bg);
}

.steam path {
  opacity: 0;
  animation: steam 3s ease-out infinite;
}

.steam path:nth-child(2) {
  animation-delay: 1s;
}

.steam path:nth-child(3) {
  animation-delay: 2s;
}

@keyframes steam {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }

  35% {
    opacity: 0.9;
  }

  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .steam path {
    opacity: 0.6;
  }
}
</style>
