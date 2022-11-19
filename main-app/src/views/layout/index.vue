<template>
  <el-container class="container">
    <el-header class="flex_Level_VerticalCenter">
      <div class="logo_img flex_LevelVertical_center">智慧云办公系统</div>
      <div class="tabs_box flex_LevelVertical_center">
        <div class="tab_item flex_LevelVertical_center" v-for="(item, index) in tabList" :key="index">{{ item }}</div>
      </div>
      <div class="panel_entry">数字驾驶舱</div>
      <div class="news_icon iconfont icon-xiaoxi"><span></span></div>
      <el-dropdown>
        <div class="add_icon iconfont icon-jiahao flex_Level_VerticalCenter"></div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>新建任务</el-dropdown-item>
            <el-dropdown-item>新建任务</el-dropdown-item>
            <el-dropdown-item>新建任务</el-dropdown-item>
            <el-dropdown-item>新建任务</el-dropdown-item>
            <el-dropdown-item>新建任务</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown @command="handleCommand">
        <span class="flex_Level_VerticalCenter">欢迎您，admin<el-icon><arrow-down /></el-icon></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人资料</el-dropdown-item>
            <el-dropdown-item command="setting">偏好设置</el-dropdown-item>
            <el-dropdown-item command="exit" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-scrollbar>
        <el-aside>
          <el-menu :default-active="'/adminManage/a'" router>
            <el-menu-item :index="'/adminManage/a'">
              <template #title>adminManage</template>
            </el-menu-item>
            <el-menu-item :index="'/adminManage/b'">
              <template #title>adminManage</template>
            </el-menu-item>
            <el-menu-item :index="'/marketOperation/a'">
              <template #title>marketOperation</template>
            </el-menu-item>
            <el-menu-item :index="'/marketOperation/b'">
              <template #title>marketOperation</template>
            </el-menu-item>
            <el-menu-item :index="'/panelScreen/a'">
              <template #title>panelScreen</template>
            </el-menu-item>
            <el-menu-item :index="'/panelScreen/b'">
              <template #title>panelScreen</template>
            </el-menu-item>
            <el-menu-item :index="'/productDevelop/a'">
              <template #title>productDevelop</template>
            </el-menu-item>
            <el-menu-item :index="'/productDevelop/b'">
              <template #title>productDevelop</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-scrollbar>
        <el-main>
          <router-view></router-view>
          <div id="iframe"></div>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { startQinakun } from '@/micro'
import { ArrowDown } from '@element-plus/icons-vue'

onMounted(() => startQinakun())

const tabList = [ '应用中心', '任务大厅', '工云空间', '规章制度', '系统配置' ]

// 下拉菜单
const handleCommand = (command: string) => {
  if (command == 'exit') {
    ElMessageBox.confirm('确定退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      window.sessionStorage.clear()
      window.location.replace(`${window.location.origin}/login`)
      ElMessage({ type: 'success', message: '退出登录成功' })
    }).catch(() => {
      ElMessage({ type: 'info', message: '已取消退出登录' })
    })
  }
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
