const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao sono un h1',
            src: 'https://images.mubicdn.net/images/film/188918/cache-284496-1511897314/image-w1280.jpg?size=800x',
        }
    },
    methods: {
        graySwitch: function (){
            let img = document.querySelector("img");
            img.classList.toggle("gray");
            

            let title = document.querySelector("h1");
            title.classList.toggle("rainbow")
        }
    }
}).mount('#app');