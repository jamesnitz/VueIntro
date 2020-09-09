const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 100,
            onSale: true,
            cheatUrl: 'https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf'
        }
    }
})
