<template>
  <div id="app">
    <editor/>
  </div>
</template>

<script>

import Vue from 'vue'
import msMinderEditor from "./components/ms-minder-editor";
Vue.use(msMinderEditor)

export default {
  name: 'app'
}
</script>

<style>
  @import "./style/normalize.css";
</style>
