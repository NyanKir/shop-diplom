export const state = () => ({
  cart: []
})
export const getters = {
  getCartId: (state) => {
    return state.cart
  }
}
export const mutations = {
  getDataFromLocalStorage (state) {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    state.cart = JSON.parse(localStorage.getItem('cart'))
  },
  add (state, { id, options }) {
    state.cart.push({ id, options })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  remove (state, id) {
    state.cart = state.cart.filter(el => el.id !== id)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  update (state, { id, options }) {
    state.cart = state.cart.map(el => (el.id === id) ? { ...el, options } : el)
  }
}
