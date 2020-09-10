appVue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-details">
    <div>
      <div>Ingredients:</div>
      <ul>
        <!-- iterating the details array and also accessing the index -->
        <!-- give each dom element a unique key a la react -->
        <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
      </ul>
    </div>
    <div>
      <div>Sizes:</div>
      <ul>
        <!-- iterating the details array and also accessing the index -->
        <!-- give each dom element a unique key a la react -->
        <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
      </ul>
    </div>
  </div>`
})