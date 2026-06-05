<template>
  <main class="page">
    <h1>遊戲規則</h1>

    <section class="rule-section">
      <h2>基本玩法</h2>
      <p>每位玩家起手各拿固定數量的骨牌，輪流出牌並與檯面上的牌鏈相接。</p>
    </section>

    <section class="rule-section">
      <h2>勝負判定</h2>
      <p>率先出完手中骨牌的玩家獲勝；若無法繼續出牌，則以剩餘點數最少者獲勝。</p>
    </section>

    <section class="rule-section">
      <h2>計分方式</h2>
      <p>每局結束後，落敗方剩餘骨牌點數總和將累計為對手得分。</p>
    </section>
  </main>
</template>

<style scoped>
.page {
  padding: 1rem 0;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.rule-section + .rule-section {
  margin-top: 1.5rem;
}

h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: hsla(160, 100%, 37%, 1);
}

p {
  line-height: 1.6;
  color: var(--color-text);
}
</style>
