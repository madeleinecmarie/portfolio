<template>
  <svg class="dancer" viewBox="0 0 64 72" aria-hidden="true">
    <ellipse class="floor" cx="32" cy="68" rx="12" ry="2" />
    <g class="body">
      <circle class="head" cx="32" cy="13" r="4.5" />
      <path d="M25 24 C10 0 54 0 39 24" />
      <line x1="32" y1="18" x2="32" y2="36" />
      <ellipse class="fill" cx="32" cy="37" rx="14" ry="4" />
      <line x1="32" y1="40" x2="32" y2="66" />
      <path d="M32 42 L42 50 L32 55" />
    </g>
  </svg>
</template>

<style scoped>
.dancer {
  width: 72px;
  height: 81px;
  fill: none;
  stroke: var(--accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  overflow: visible;
}

.fill,
.floor {
  fill: var(--accent-soft);
}

.floor {
  stroke: none;
}

.head {
  fill: var(--accent);
}

.body {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: pirouette 4s ease-in-out infinite;
}

@keyframes pirouette {
  0%,
  30% {
    transform: translateY(0) scaleX(1);
  }

  40% {
    transform: translateY(-3px) scaleX(1);
  }

  50% {
    transform: translateY(-3px) scaleX(-1);
  }

  60% {
    transform: translateY(-3px) scaleX(1);
  }

  70%,
  100% {
    transform: translateY(0) scaleX(1);
  }
}
</style>
