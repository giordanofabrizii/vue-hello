const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'CALIMERO DANCE',
            src: 'https://images.mubicdn.net/images/film/188918/cache-284496-1511897314/image-w1280.jpg?size=800x',
            imgClasses: '',
            titleClasses: '',
        }
    },
    methods: {
        graySwitch: function (){
            this.imgClasses = this.imgClasses == 'gray' ? '' : 'gray';

            this.titleClasses = this.titleClasses == 'rainbow' ? '' : 'rainbow';
        }
    }
}).mount('#app');