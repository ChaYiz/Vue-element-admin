<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头衔</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.position }}</td>
          <td>
            <!-- 将用户的 ID 当作参数传给方法，加个小括号可以传参 -->
            <a href="#" @click.prevent="gotoDerail(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userlist: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ]
    }
  },
  methods: {
    // 接收用户传过来的 ID
    gotoDerail(id){
      console.log('ok');
      //   /home/userinfo/1
      //   /home/userinfo/2
      //   /home/userinfo/3
      // 这里不能出现冒号 :
      this.$router.push('/home/userinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped></style>
