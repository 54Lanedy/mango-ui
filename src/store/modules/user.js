export default {
    state: {
        perms: [],  // 用户权限标识集合
    },
    getters: {

    },
  //mutations里面装着一些改变数据方法的集合
    mutations: {
        setPerms(state, perms){  // 用户权限标识集合
            state.perms = perms;
        }
    }
}
