const appVue = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',  
            inventory: 100,
            onSale: true,
            cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green'},
              { id: 2235, color: 'blue'}
            ],
            sizes: ['Small', 'Shmedium', 'Sizeable']
        }
    }
})
