export default function (context) {
  context.$axios({
    method: 'get',
    url: 'api/isauth',
    withCredentials: true
  }).catch((e) => {
    if (e.response.status === 403) {
      return context.redirect('/')
    }
  })
}
