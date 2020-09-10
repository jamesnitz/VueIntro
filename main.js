const appVue = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',  
            inventory: 10,
            onSale: true,
            cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['Small', 'Shmedium', 'Sizeable']
        }
    },
    methods: {
      addToCart() {
        this.cart++
        this.inventory--
      },
      clearCart(cartCount) {
        this.cart= 0
        this.inventory += cartCount
      },
      updateImage(variantImage) {
        this.image = variantImage
      }
    }
})
