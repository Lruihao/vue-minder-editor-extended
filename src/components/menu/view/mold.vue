<template>
<div class="mold-group" :disabled="disabled">
    <el-row class="block-col-1">
        <el-col :span="24">
            <el-dropdown trigger="click" :hide-on-click="true" class="dropdown-toggle mold-icons menu-btn" @command="handleCommand" :class="'mold-' + (mold_index + 1)">
                <span class="el-dropdown-link ">
                    <i class="el-icon-caret-bottom el-icon--right"/>
                </span>
                <el-dropdown-menu slot="dropdown" class="mold-dropdown-list">
                    <el-dropdown-item v-for="(item, index) in 6" :key="item" class="dropdown-item mold-icons" :class="'mold-' + item" :command="index"/>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {moleProps} from "../../props";
export default {
    name: 'mold',
    props: {
      ...moleProps
    },
    data() {
      return {
        mold_index: 0
      }
    },
    computed: {
        disabled() {
          try {
            if (!minder) return false;
          } catch (e) {
            // 如果window的还没挂载minder，先捕捉undefined异常
            return false
          }
          return minder && minder.queryCommandState && minder.queryCommandState('template') === -1
        },
        templateList() {
            return kityminder.Minder.getTemplateList();
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.handleCommand(this.default_mold);
      })
    },
    methods: {
        handleCommand(command) {
          this.mold_index = command;
          minder.execCommand('template', Object.keys(this.templateList)[command]);
        }
    }
}
</script>

<style scoped>

</style>
