<template>
  <main class="page">
    <h1>設定</h1>

    <form class="settings-form" @submit.prevent>
      <label class="field">
        <span>玩家暱稱</span>
        <input v-model="nickname" type="text" placeholder="輸入暱稱" />
      </label>

      <label class="field">
        <span>音效</span>
        <input v-model="soundEnabled" type="checkbox" />
      </label>

      <label class="field">
        <span>動畫效果</span>
        <input v-model="animationsEnabled" type="checkbox" />
      </label>

      <label class="field">
        <span>主題</span>
        <select v-model="theme">
          <option value="light">淺色</option>
          <option value="dark">深色</option>
          <option value="auto">跟隨系統</option>
        </select>
      </label>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const nickname = ref('玩家一號')
const soundEnabled = ref(true)
const animationsEnabled = ref(true)
const theme = ref('auto')
</script>

<style scoped>
.page {
  padding: 1rem 0;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.settings-form {
  display: grid;
  gap: 1.25rem;
}

.field {
  display: grid;
  gap: 0.5rem;
}

.field span {
  font-weight: 500;
}

input[type='text'],
select {
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
}

input[type='checkbox'] {
  width: 1.1rem;
  height: 1.1rem;
  accent-color: hsla(160, 100%, 37%, 1);
}
</style>
