export const state = () => ({
  userId: undefined,
  isAuth: false,
  isAdmin: false,
  showNotice: false,
  titleNotice: ''
})
export const getters = {
  getAuth: (state) => {
    return state.isAuth
  },
  getAdmin: (state) => {
    return state.isAdmin
  }
}
export const mutations = {
  changeAuthentication (state, bool = false) {
    state.isAuth = bool
  },
  changeUserId (state, id = undefined) {
    state.userId = id
  },
  changeAdmin (state, bool = false) {
    state.isAdmin = bool
  },
  changeNotice (state, { show, title = '' }) {
    state.showNotice = show
    state.titleNotice = title
  }
}
export const actions = {
  showNotice (context, title) {
    context.commit('changeNotice', { show: true, title })

    setTimeout(() => {
      context.commit('changeNotice', { show: false })
    }, 3000)
  },
  logOut (context) {
    this.$axios({
      method: 'post',
      url: '/api/logout',
      withCredentials: true
    })
    context.commit('changeAuthentication')
    context.commit('changeUserId')
  }
}
