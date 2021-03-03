<template>
<div class="mold-group" :disabled="disabled">
    <el-row class="block-col-1">
        <el-col :span="24">
            <el-dropdown trigger="click" :hide-on-click="true" class="dropdown-toggle mold-icons menu-btn" @command="handleCommand" :class="class_default_mold">
                <span class="el-dropdown-link ">
                    <i class="el-icon-caret-bottom el-icon--right"></i>
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
import {
    mapGetters
} from 'vuex'
import {moleProps} from "../../props";
export default {
    name: 'mold',
    props: {
      ...moleProps
    },
    computed: {
        ...mapGetters({
            'minder': 'getMinder'
        }),
        class_default_mold() {
            return 'mold-' + this.default_mold
        },
        disabled() {
            return this.minder.queryCommandState && this.minder.queryCommandState('template') === -1
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
            this.default_mold = ~~command + 1;
            this.minder.execCommand('template', Object.keys(this.templateList)[command]);
        }
    }
}
</script>

<style scoped>
  .el-dropdown-menu .el-dropdown-menu__item {
    padding: 0px !important;
    height: 40px !important;
    margin: 5px !important;
  }
</style>
