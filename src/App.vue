<script setup lang="ts">
import Card from "./components/Card.vue";
import Editor from "./components/Editor.vue";
import useQuotes from "./assets/quotes";
import EditorHeader from "./components/EditorHeader.vue";
import StartTest from "./components/StartTest.vue";
import { reactive, ref } from "vue";
import TestComplete from "./components/TestComplete.vue";

const state = reactive({
    quotes: "",
    testStarted: false,
    testFinished: false,
    timer: {
        munites: 0,
        seconds: 0,
    },
    timerType: 1,
    textTyped: "",
    originalText: "",
    typingSpeed: 0,
    typingOccuracy: 0,
    errorsCounter: 0,
});

const timerInterval = ref();

const onTyping = (e: Event) => {
    let textElement = e.target as HTMLElement;
    state.textTyped = textElement.textContent || "";
    state.originalText = state.quotes.slice(0, state.textTyped.length);

    let textTypedArray = state.textTyped.split(" ");
    let originalTextArray = state.originalText.split(" ");

    for (let i = 0; i < textTypedArray.length; i++)
        if (textTypedArray[i].trimEnd() === originalTextArray[i]) {
            textElement.classList.remove("typing-error");
            textElement.classList.add("typing-correct");
        } else {
            textElement.classList.remove("typing-correct");
            textElement.classList.add("typing-error");
            state.errorsCounter++;
            break;
        }
    scrollEditor(textElement.parentElement);
};
const scrollEditor = (element: HTMLElement | null) => {
    if (element !== null) element.scrollTop = state.textTyped.length - 80;
};
const onTestStarted = (timerType: number) => {
    state.quotes = useQuotes();
    state.timerType = timerType;
    state.testStarted = true;
    state.testFinished = false;
    timerChangeHandler();
    timerInterval.value = setInterval(() => {
        timerCountHandler();
    }, 1000);
};
const timerCountHandler = () => {
    if (state.timer.munites === 0 && state.timer.seconds == 0) {
        onTimeFinished();
        return;
    }
    if (state.timer.seconds === 0) {
        state.timer.seconds = 59;
        state.timer.munites--;
    } else {
        state.timer.seconds--;
    }
};
const onTestClosed = () => {
    state.testStarted = state.testFinished = false;
    clearInterval(timerInterval.value);
    timerChangeHandler();
};
const onTimeFinished = () => {
    clearInterval(timerInterval.value);
    state.testFinished = true;
    calculateResult();
};
const timerChangeHandler = () => {
    state.timer.munites = state.timerType;
    state.timer.seconds = 0;
};
const onEnter = (e: Event) => {
    e.preventDefault();
};
const calculateResult = () => {
    if (state.textTyped.length === 0) {
        state.typingSpeed = 0;
        state.typingOccuracy = 0;
        return;
    }
    const wordsTypedCount = state.textTyped.split(" ").length;
    const errorsOccuracy = (state.errorsCounter * 100) / state.textTyped.length;

    state.typingSpeed = Math.floor(wordsTypedCount / state.timerType);
    state.typingOccuracy = Math.floor(100 - errorsOccuracy);
};

const cardStyle = {
    width: "900px",
    height: "450px",
};
</script>
<template>
    <Card v-if="!state.testStarted && !state.testFinished" :style="cardStyle">
        <StartTest :on-test-started="onTestStarted" />
    </Card>
    <Card v-if="state.testStarted && !state.testFinished" :style="cardStyle">
        <EditorHeader :timer="state.timer" :on-test-closed="onTestClosed" />
        <Editor
            :text="state.quotes"
            :on-enter="onEnter"
            :on-typing="onTyping"
        />
    </Card>
    <Card v-if="state.testFinished" :style="cardStyle">
        <TestComplete
            :timer-type="state.timerType"
            :typing-speed="state.typingSpeed"
            :typing-occuracy="state.typingOccuracy"
            :on-back="onTestClosed"
            :on-retake="() => onTestStarted(state.timerType)"
        />
    </Card>
</template>

<style scoped></style>
