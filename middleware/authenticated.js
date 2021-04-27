export default async function (context) {
  await context.$axios({
    method: 'get',
    url: '/api/isauth',
    withCredentials: true
  }).then((r) => {
    if (r.status === 200) {
      context.store.commit('user/changeAuthentication', true)
      return context.redirect('/')
    }
  }).catch(r => r)
}
