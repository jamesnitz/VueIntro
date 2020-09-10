const appVue = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        const foundVariant = this.cart.find(variant => variant.id === id)
        if (!foundVariant) {
          this.cart.push(
            {
              id: id,
              quantity: 1
            }
          )
        } else {
          foundVariant.quantity++
        }
      },
      clearCart() {
        this.cart = []
      }
    },
    computed: {
      cartTotal() {
        let totalQuantity = 0
        for (let item of this.cart) {
          totalQuantity += item.quantity
        }
        return totalQuantity
      }
  }
})
