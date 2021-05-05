export default ({ app }, inject) => {
  const nuxtApi = function () {
    app.store.dispatch('user/logOut')
    app.store.dispatch('user/showNotice', 'Success, you are log out! :)')
    app.router.push('/')
  }
  inject('logOut', nuxtApi)
}
