<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="$router.back()">后退</button>
    <!-- 麻烦方式 查看 ID 参数 -->
    <!-- <h4 class="text-center">用户详情 --- {{ this.$route.params.id }}</h4> -->
    <h4 class="text-center">用户详情 --- {{ id }}</h4>

  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id']
}
</script>

<style lang="less" scoped></style>
