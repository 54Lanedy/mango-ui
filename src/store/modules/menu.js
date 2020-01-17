export default {
  state:{
      navTree: [] //导航菜单树
  },
  getters:{

  },
  //mutations里面装着一些改变数据方法的集合
  mutations:{
    //设置导航树目录
    setNavTree(state, navTree) {
      state.navTree = navTree;
    }
  }
}
