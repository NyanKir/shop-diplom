export default async function (context) {
  await context.$axios({
    method: 'get',
    url: '/api/isauth',
    withCredentials: true
  }).then((r) => {
    if (r.status === 200) {
      context.store.commit('user/changeAuthentication', true)
      if (context.route.path === '/auth/signin' || context.route.path === '/auth/signup') {
        return context.redirect('/')
      }
      return 1
    }
  }).catch((err) => {
    if (err.response.status) {
      if (context.route.path === '/user/') {
        return context.redirect('/')
      }
    }
  })
}
