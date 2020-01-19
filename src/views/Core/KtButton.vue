<!--权限操作按钮组件，在组件中根据外部传入的权限标识进行权限判断-->
<template>
  <el-button :size="size" :type="type" :icon="icon"
             :loading="loading" :disabled="!hasPerms(perms)" @click="handleClick">
    {{label}}
  </el-button>
</template>

<script>
  //命名导出,模块index.js中有如下命名导出为hasPermission的export name的代码;模块的默认导出通常是用在你期望该从模块中获取到任何想要的内容.
  import { hasPermission } from "@/permission/index.js";
  export default {
    name: 'KtButton',
    //父组件通过 props 向下传递数据给子组件；子组件通过 events 给父组件发送消息。
    props: {
      //按钮显示文本
      label: {
        type: String,
        default: "Button"
      },
      //按钮显示图标
      icon: {
        type: String,
        default: ''
      },
      //按钮尺寸
      size: {
        type: String,
        default: 'mini'
      },
      //按钮类型
      type: {
        type: String,
        default: null
      },
      //按钮加载标识
      loading: {
        type: Boolean,
        default: false
      },
      //按钮是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      //按钮权限标识，外部使用者传入
      perms: {
        type: String,
        default: null
      }
    },
    data(){
      return{
      }
    },
    methods:{
      handleClick:function () {
        //按钮操作处理函数,$emit触发父组件的自定义事件
        this.$emit('click', {});
      },
      hasPerms: function (perms) {
        //根据权限标识和外部指示状态进行权限判断
        return hasPermission(perms) && !this.disabled;
      }
    }
  }
</script>
