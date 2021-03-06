appVue.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- class binding with ternary operators -->
            <img v-bind:src="image"
              :class="[!inStock ? 'out-of-stock-img': '']">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <!-- attribute binding and practicing conditionals -->
            <div><a :href="cheatUrl" target="_blank">Cheat Sheet</a></div>
            <p v-if="inStock">In Stock: {{variants[selectedVariant].quantity}} left</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">10% off while supplies last!</p>
            <p>Shipping: {{shipping}}</p>
            <product-details :sizes="sizes" :details="details"></product-details>
            <div>Available colors:</div>
            <ul>
              <li
                v-for="(variant, index) in variants" 
                :key="variant.id" 
                class="color-circle"
                @mouseover="updateVariant(index)"
                :style="{backgroundColor: variant.color}">
              </li>
            </ul>
            <button
              class="button"
              :class="{ disabledButton: !inStock}"
              :disabled="!inStock"
              @click="addToCart()">
              {{inStock ? 'Add to Cart': 'We empty'}}
            </button>
             <button 
               class="clearButton" 
               @click="clearCart()">
               Clear cart
             </button>
          </div>
        </div>
      
        <review-list :reviews="reviews"></review-list>
        <review-form :reviews="reviews" @review-submitted="addReview"></review-form>
      </div>`,
        data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [],
            sizes: [],
            reviews: []
        }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        this.variants[this.selectedVariant].quantity--
      },
      getReviews() {
        return fetch('http://localhost:3000/reviews')
          .then(res => res.json())
          .then(parsedReviews => {
        this.reviews = parsedReviews
        })
      },
      getSocks() {
        return fetch('http://localhost:3000/socks')
          .then(res => res.json())
          .then(parsedSocks => {
        this.variants = parsedSocks
        console.log(this.variants)
        debugger
        })
      },
      getSizes() {
        return fetch('http://localhost:3000/sizes')
          .then(res => res.json())
          .then(parsedSizes => {
        this.sizes = parsedSizes
        })
      },
      clearCart() {
        for (let item of this.cart) {
          const foundVarient = this.variants.find(varient => varient.id === item.id)
          foundVarient.quantity += item.quantity
        }
        this.$emit('clear-from-cart')
      },
       updateVariant(index) {
         this.selectedVariant = index
      },
      addReview(review) {
        return fetch('http://localhost:3000/reviews', {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify(review)
        })
        .then(this.getReviews)
      }
    },
    beforeMount(){
      this.getSocks()
      this.getReviews()
      this.getSizes()
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
       },
       image() {

         if (this.variants.length === 0) {
           return "./assets/images/loading.gif"
         }
         return this.variants[this.selectedVariant].image
       },
      inStock() {
        if (this.variants.length === 0) {
          return null
        }
         return this.variants[this.selectedVariant].quantity
       },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return '2.99'
      }
    }

})