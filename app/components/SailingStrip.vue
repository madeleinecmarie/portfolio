<template>
  <div class="sailing" aria-hidden="true">
    <div class="voyage">
      <svg class="boat" viewBox="0 0 64 56">
        <line x1="30" y1="4" x2="30" y2="40" />
        <path class="fill" d="M28 6 L28 37 L11 37 Z" />
        <path d="M32 12 L32 37 L47 37 Z" />
        <path class="fill" d="M8 40 H56 L47 50 H15 Z" />
      </svg>
    </div>
    <div class="waves" />
  </div>
</template>

<style scoped>
.sailing {
  position: relative;
  height: 76px;
  overflow: hidden;
}

.waves {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  height: 12px;
  background: var(--accent);
  opacity: 0.45;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 12'%3E%3Cpath d='M0 6 q8 -6 16 0 t16 0' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    repeat-x 0 0 / 32px 12px;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 12'%3E%3Cpath d='M0 6 q8 -6 16 0 t16 0' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    repeat-x 0 0 / 32px 12px;
  animation: roll 2.2s linear infinite;
}

.voyage {
  position: absolute;
  bottom: 12px;
  left: -80px;
  animation: voyage 26s linear infinite;
}

.boat {
  display: block;
  width: 64px;
  height: 56px;
  fill: none;
  stroke: var(--accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50% 90%;
  animation: rock 3s ease-in-out infinite;
}

.fill {
  fill: var(--accent-soft);
}

@keyframes voyage {
  to {
    left: calc(100% + 16px);
  }
}

@keyframes rock {
  0%,
  100% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(4deg) translateY(2px);
  }
}

@keyframes roll {
  to {
    -webkit-mask-position: -32px 0;
    mask-position: -32px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .voyage {
    left: calc(50% - 32px);
  }
}
</style>
