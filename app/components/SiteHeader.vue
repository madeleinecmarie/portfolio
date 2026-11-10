<script setup lang="ts">
const links = [
  { href: '#arbeid', label: 'Arbeid' },
  { href: '#prosjekter', label: 'Prosjekter' },
  { href: '#om-meg', label: 'Om meg' },
  { href: '#kontakt', label: 'Kontakt' },
]

const isDark = ref(false)

onMounted(() => {
  const saved = document.documentElement.dataset.theme
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
  }
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo" aria-label="Til toppen">MB.</a>
      <nav aria-label="Hovedmeny">
        <ul class="nav">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
        <button
          type="button"
          class="theme-toggle"
          :aria-label="isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'"
          @click="toggleTheme"
        >
          <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 64px;
}

.logo {
  font-family: 'Ultra', Georgia, serif;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--text);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav a {
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
  color: var(--muted);
}

.nav a:hover {
  color: var(--text);
  background: var(--surface);
}

@media (max-width: 560px) {
  .nav li:not(:last-child) {
    display: none;
  }
}

nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-toggle {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s;
}

.theme-toggle:hover {
  background: var(--accent-soft);
}

.theme-toggle svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
