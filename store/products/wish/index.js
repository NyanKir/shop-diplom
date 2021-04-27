export const state = () => ({
  wishes: []
})
export const mutations = {
  getDataFromLocalStorage (state) {
    if (!localStorage.getItem('wishes')) {
      localStorage.setItem('wishes', JSON.stringify([]))
    }
    state.wishes = JSON.parse(localStorage.getItem('wishes'))
  },
  add (state, id, options = { count: 1 }) {
    state.wishes.push({ id, options })
    localStorage.setItem('wishes', JSON.stringify(state.wishes))
  },
  remove (state, id) {
    state.wishes = state.wishes.filter(el => el.id !== id)
    localStorage.setItem('wishes', JSON.stringify(state.wishes))
  }
}
