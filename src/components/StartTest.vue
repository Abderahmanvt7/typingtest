<script setup lang="ts">
import {
    RouteLocationNormalizedLoaded,
    RouterLink,
    RouterView,
} from "vue-router";

import Card from "./Card.vue";

defineProps(["onTestStarted", "onTimerChosed"]);

const onFocus = (e: Event) => {
    (e.target as HTMLAnchorElement).click();
};
const onEnter = (e: Event) => {
    (e.target as HTMLElement).querySelector("button")?.click();
    e.preventDefault();
};
</script>

<template>
    <div class="container">
        <aside class="sidebar">
            <Card>
                <RouterLink
                    to="/"
                    class="sidebar-item"
                    tabindex="1"
                    @focus="onFocus"
                    @keydown.enter="onEnter"
                >
                    <span> 1 munites</span
                    ><button @click="() => onTestStarted(1)">start</button>
                </RouterLink>
                <RouterLink
                    to="/3"
                    class="sidebar-item"
                    tabindex="2"
                    @focus="onFocus"
                    @keydown.enter="onEnter"
                >
                    <span> 3 munites</span
                    ><button @click="() => onTestStarted(3)">start</button>
                </RouterLink>
                <RouterLink
                    to="/5"
                    class="sidebar-item"
                    tabindex="3"
                    @focus="onFocus"
                    @keydown.enter="onEnter"
                >
                    <span> 5 munites</span
                    ><button @click="() => onTestStarted(5)">start</button>
                </RouterLink>
                <RouterLink
                    to="/10"
                    class="sidebar-item"
                    tabindex="4"
                    @focus="onFocus"
                    @keydown.enter="onEnter"
                >
                    <span> 10 munites</span
                    ><button @click="() => onTestStarted(10)">start</button>
                </RouterLink>
            </Card>
        </aside>
        <main>
            <Card>
                <RouterView />
            </Card>
        </main>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 30% 1fr;
    padding: 21px;
    color: #333;
}
.sidebar {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    margin-top: 40px;
}
.sidebar .sidebar-item {
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #cccccca1;
}
.sidebar-item:hover {
    background-color: #1e90ff1f;
}
.sidebar-item:focus {
    scale: 1.02;
    box-shadow: 1px 1px 11px -2px dodgerblue;
    outline: 2px solid #fff;
}
.sidebar-item:first-child:hover {
    border-top-left-radius: inherit;
}
.sidebar-item:last-child:hover {
    border-bottom-left-radius: inherit;
}
.sidebar-item.router-link-active {
    background-color: #1e90ff;
    color: #fff;
    margin-left: -13px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
}
aside div button {
    border: none;
    outline: none;
    padding: 4px 10px;
    background-color: orange;
    color: #fff;
    font-size: inherit;
    border-radius: 5px;
    cursor: pointer;
}
main {
    background-color: #1e90ff;
    margin-top: 8px;
    margin-bottom: -60px;
    border-radius: 5px;
    padding: 15px;
    z-index: 2;
}
</style>
