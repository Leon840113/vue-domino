<template>
  <main class="page">
    <h1>遊戲大廳</h1>
    <p class="subtitle">選擇模式開始一局骨牌遊戲</p>

    <div class="card-grid">
      <button type="button" class="card">經典雙人</button>
      <button type="button" class="card">四人對戰</button>
      <button type="button" class="card">快速練習</button>
    </div>
  </main>
</template>

<style scoped>
.page {
  padding: 1rem 0;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 2rem;
}

.card-grid {
  display: grid;
  gap: 1rem;
}

.card {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);
  color: var(--color-heading);
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  text-align: left;
}

.card:hover {
  border-color: hsla(160, 100%, 37%, 0.6);
  background-color: hsla(160, 100%, 37%, 0.08);
}
</style>
