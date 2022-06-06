import '../styles/app.css';
import '../images/cat-g4.jpg'



console.log('Interesting!')


class Image {
    constructor(src) {
        this.src = src;
    }
    render() {
        const images=document.createElement('img');
        images.src=this.src;
        images.alt='cat'
        const app = document.querySelector('#root')
    app.append(images);
    }
}
    const srcImage='https://i.picsum.photos/id/974/200/300.jpg?hmac=QEuRqsjG8spkqu72dWfkl4m-kSl5p-CEfHgx9dnnZLo'
    
const img1 = new Image('./assets/images/cat-g4.jpg');
img1.render();
  

  
  