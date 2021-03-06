appVue.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
    <div>
      <h3>Reviews:</h3>
      <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{review.name}} gave this {{review.rating}} stars
        <br/>
        "{{review.review}}"
        <br/>
        Would you recommend this: {{review.recommend}}
        <br/>
        <br/>
      </li>
      </ul>
    </div>
  `
})