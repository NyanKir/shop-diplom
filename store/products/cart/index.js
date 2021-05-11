export const state = () => ({
  cart: []
})
export const getters = {
  getCartId: (state) => {
    return keyword => keyword
  }
}
export const mutations = {
  getDataFromLocalStorage (state) {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    state.cart = JSON.parse(localStorage.getItem('cart'))
  },
  add (state, { id, options, count = 1 }) {
    state.cart.push({ id, options, count })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  remove (state, id) {
    state.cart = state.cart.filter(el => el.id !== id)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  update (state, { id, options, count = 1 }) {
    state.cart = state.cart.map(el => (el.id === id) ? { ...el, options, count } : el)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  clear (state) {
    state.cart = []
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
