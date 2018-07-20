<template>
  <div id="app">

  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .el-input--suffix .el-input__inner{
    margin-top: 0px;
  }
  .el-date-editor.el-input{
    width: 162px;
 }
</style>
