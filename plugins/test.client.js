export default (context) => {
  context.store.commit('products/wish/getDataFromLocalStorage')
  context.store.commit('products/cart/getDataFromLocalStorage')
}
