<template>
  <div class="progress-group">
    <ul>
      <ul :disabled="commandDisabled">
        <li v-for="(item, index) in items" class="menu-btn" :class="classArray(index)" @click="execCommand(index)" :title="title(index)"></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import {isDisableNode} from "../../../script/tool/utils";
export default {
  name: 'progressBox',
  data() {
    return {
      minder: {},
      items: [
        { text: '0' },
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
        { text: '5' },
        { text: '6' },
        { text: '7' },
        { text: '8' },
        { text: '9' }
      ]
    }
  },
  computed: {
    commandDisabled() {
      let minder = this.minder;
      if (!minder) return true;
      minder.on && minder.on('interactchange', function () {
        this.commandValue = minder.queryCommandValue('progress');
      });
      if (isDisableNode(minder)) {
        return true;
      }
      return minder.queryCommandState && minder.queryCommandState('progress') === -1;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.minder = minder;
    })
  },
  methods: {
    execCommand(index) {
      this.commandDisabled || minder.execCommand('progress', index)
    },
    classArray(index) {
      let minder = this.minder;
      var isActive = minder && minder.queryCommandValue && minder.queryCommandValue('progress') == index;
      var sequence = 'progress-' + index;

      // 用数组返回多个class
      var arr = [{
        'active': isActive
      }, sequence]
      return arr
    },
    title(index) {
      switch (index) {
        case 0:
          return '移除进度';
        case 1:
          return '未开始';
        case 9:
          return '全部完成';
        default:
          return '完成' + (index - 1) + '/8';
      }
    }
  },
  created() {}
}
</script>

<style scoped>
.progress-group li {
  background-image: url("../../../assets/minder/iconprogress.png");
}
</style>
