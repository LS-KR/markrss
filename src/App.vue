<template>
    <div class="main">
        <div class="left">
            <input placeholder="Title" v-model="title" class="title" v-on:change="change()" v-on:keydown="change"/>
            <textarea placeholder="Markdown Content" v-model="content" class="content" v-on:change="change()" v-on:keydown="change"/>
        </div>
        <div class="right">
            <textarea v-model="output" class="output" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import {build} from '@/logic/mark';

@Component({})
export default class App extends Vue {
    title = '' as string;
    content = '' as string;
    output = build(this.title, this.content);

    change() {
        this.output = build(this.title, this.content);
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
}

.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 50px;

    .left, .right {
        width: calc(50% - 100px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .left {
        .title {
            margin: 10px;
            width: calc(100% - 20px);
            height: auto;
        }

        .content {
            width: calc(100% - 20px);
            height: 500px;
        }
    }

    .right {
        .output {
            width: calc(100% - 20px);
            height: calc(540px + 1rem);
        }
    }
}
</style>