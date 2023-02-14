<script setup lang="ts"></script>

<template>
    <div class="chart-container">
        <h1>{{ $route.name }} Test</h1>
        <div class="typing-history">Typing history will be displayed here</div>
    </div>
</template>

<style scoped>
.chart-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    font-family: sans-serif;
}
</style>
