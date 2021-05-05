export default async function (context) {
  await context.$axios({
    method: 'get',
    url: '/api/isauth',
    withCredentials: true
  }).then((r) => {
    if (r.status === 200) {
      context.store.commit('user/changeAuthentication', true)
      context.store.commit('user/changeUserId', r.data.id)
      if (context.route.path === '/auth/signin' || context.route.path === '/auth/signup') {
        return context.redirect('/')
      }
      return true
    }
  }).catch((err) => {
    if (err.response.status) {
      if (context.route.path.includes('/user/')) {
        return context.redirect('/')
      }
    }
  })
}
