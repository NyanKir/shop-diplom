export default async function (context) {
  await context.$axios({
    method: 'get',
    url: '/api/isauth',
    withCredentials: true
  })
    .then((r) => {
      console.log(r.status)
      if (r.status === 200) {
        return context.redirect('/')
      }
    }).catch(r => r)
}
