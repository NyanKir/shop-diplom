export const state = () => ({
  isAuth: false
})
export const mutations = {
  changeAuthentication (state, bool = false) {
    state.isAuth = bool
  }
}
