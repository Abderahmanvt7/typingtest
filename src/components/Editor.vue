<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps(["text", "onEnter", "onTyping"]);
const editableRef = ref<HTMLElement>();
onMounted(() => {
    editableRef.value?.focus();
});
</script>

<template>
    <div class="editor">
        <div class="disabled">{{ text }}</div>
        <div
            class="editable"
            contenteditable="true"
            @input="onTyping"
            @keydown.enter="onEnter"
            ref="editableRef"
        ></div>
    </div>
</template>

<style scoped>
.editor {
    width: 100%;
    height: 87%;
    position: relative;
    overflow: hidden;
}
div {
    width: 100%;
    padding: 5px 10px;
    font-size: 25px;
    font-family: sans-serif;
}
.disabled {
    position: absolute;
    line-height: 3.5;
    color: #6e6e6e;
    z-index: 0;
}
.editable {
    position: absolute;
    outline: none;
    line-height: 3.5;
    color: #333;
    margin-top: 38px;
    background: transparent;
    z-index: 10;
    text-decoration: underline;
    text-decoration-color: #ccc;
    text-underline-offset: 8px;
}
.editable.typing-correct {
    text-decoration-color: #11fc11;
}
.editable.typing-error {
    text-decoration-color: #ff0000a1;
}
</style>
