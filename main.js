const appVue = Vue.createApp({
    data() {
        return {
            cart: [],
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 4 },
            ],
            sizes: ['Small', 'Shmedium', 'Sizeable']
        }
    },
    methods: {
      addToCart(addedItemColor) {
        const foundProduct = this.cart.find(item => item.color === addedItemColor)
        if (!foundProduct) {
          this.cart.push({
            color: addedItemColor,
            quantity: 1
          })
        } else {
          foundProduct.quantity++
        }
        this.variants[this.selectedVariant].quantity--
      },
      clearCart() {
        for (let item of this.cart) {
          const foundVarient = this.variants.find(varient => varient.color === item.color)
          foundVarient.quantity += item.quantity
        }
        this.cart = []
      },
      updateVariant(index) {
        this.selectedVariant = index
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      },
      cartTotal() {
        let totalQuantity = 0
        for (let item of this.cart) {
          totalQuantity += item.quantity
        }
        return totalQuantity
      }
    }
})
