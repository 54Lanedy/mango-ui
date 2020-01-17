<!--权限操作按钮组件，在组件中根据外部传入的权限标识进行权限判断-->
<template>
  <el-button :size="size" :type="type" :icon="icon"
             :loading="loading" :disabled="!hasPerms(perms)" @click="handleClick">
    {{label}}
  </el-button>
</template>

<script>
  import { hasPermission} from "@/permission/index.js";
  export default {
    name: 'KtButton',
    props:{
      //按钮显示文本
      label:{
        type: String,
        default: "Button"
      },
      //按钮显示图标
      icon:{
        type: String,
        default: ''
      },
      //按钮尺寸
      size:{
        type:String,
        default:'mini'
      },
      //按钮类型
      type:{
        type:String,
        default:null
      },
      //按钮加载标识
      loading: {
        type: Boolean,
        default: false
      },
      //按钮是否禁用
      disable:{
        type:Boolean,
        default:false
      },
      //按钮权限标识，外部使用者传入
      perms:{
        type:String,
        default:null
      }
    },
    data(){
      return{
      }
    },
    methods:{
      handleClick:function () {
        //按钮操作处理函数
        this.$emit('click', {});
      },
      hasPerms: function (perms) {
        //根据权限标识和外部指示状态进行权限判断
        return hasPermission(perms) & !this.disable
      }
    }
  }
</script>
