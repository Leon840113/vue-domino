<template>
  <main class="page">
    <h1>對局紀錄</h1>
    <p class="subtitle">最近幾場遊戲結果</p>

    <ul class="history-list">
      <li v-for="record in records" :key="record.id" class="history-item">
        <div class="history-meta">
          <span class="date">{{ record.date }}</span>
          <span :class="['result', record.won ? 'win' : 'lose']">
            {{ record.won ? '勝利' : '落敗' }}
          </span>
        </div>
        <p class="mode">{{ record.mode }}</p>
        <p class="score">得分：{{ record.score }}</p>
      </li>
    </ul>
  </main>
</template>

<script setup>
const records = [
  { id: 1, date: '2026/06/05', mode: '經典雙人', score: 42, won: true },
  { id: 2, date: '2026/06/04', mode: '四人對戰', score: 18, won: false },
  { id: 3, date: '2026/06/03', mode: '快速練習', score: 31, won: true },
]
</script>

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
  margin-bottom: 1.5rem;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.history-item {
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.history-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 0.875rem;
  opacity: 0.7;
}

.result {
  font-size: 0.875rem;
  font-weight: 600;
}

.result.win {
  color: hsla(160, 100%, 37%, 1);
}

.result.lose {
  color: hsla(0, 70%, 55%, 1);
}

.mode {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.score {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
