const user = {
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
      user: {
        username: ''
      }
    },

    getters: {
      getUser(state) {
        return state.user.username;
      }
    },

// 同步的setter
    mutations: {
      updateUser(state, username) {
        state.user.username = username;
      }
    },

// 异步的
    actions: {
      asyncUpdateUser(context, username) {
        context.commit('updateUser', username);
      }
    },
  }
;

export default user;
