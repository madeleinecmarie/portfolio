<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© {{ year }} Madeleine Bergvik</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 28px;
  font-size: 13px;
  color: var(--muted);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
}
</style>
