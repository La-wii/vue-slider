const app = new Vue ({

    el: '#app',
    data: {
        counter: 0,
        photos: [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg'     
        ]
    },

    methods: {
        nextPhoto(){
            (this.counter == this.photos.length - 1) ? this.counter = 0 : this.counter++;
        },
        prevPhoto(){
            (this.counter == 0) ? this.counter = photos.length - 1 : this.counter--;    
        },
        changePhoto(index){
            this.counter = index;
        }
            
    }
    
});

