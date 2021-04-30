export const state = () => ({
  isAuth: false,
  showNotice: false,
  titleNotice: ''
})
export const mutations = {
  changeAuthentication (state, bool = false) {
    state.isAuth = bool
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
  }
}
