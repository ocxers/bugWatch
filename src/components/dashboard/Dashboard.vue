<template>
  <div>
    <el-tabs v-model="activeName" >
      <el-tab-pane label="bug时间比较图" name="first"></el-tab-pane>
      <el-tab-pane label="bug页面排行榜" name="second"></el-tab-pane>
      <el-tab-pane label="bugTop排行榜" name="third"></el-tab-pane>
    </el-tabs>

    <bug-compare v-show="activeName === 'first'"></bug-compare>
    
    <div id="top-wrap" >
      <page-bug v-show="activeName === 'second'"></page-bug>
      <top-bug v-show="activeName === 'third'"></top-bug>
    </div>
  </div>
</template>
<script>
import BugCompare from './bugCompare.vue'; // bug昨天和今天的比较组件
import pageBug from './pageBug.vue'; // page top error 5.
import topBug from './topBug.vue';
export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    BugCompare,
    pageBug,
    topBug,
  },
};
</script>
<style>
</style>