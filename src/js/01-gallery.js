// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')
//     < div class="gallery" >
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </ >
const markup = galleryItems.map(({ preview, original, description }) =>
    `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  
`
)

gallery.insertAdjacentHTML('beforeend', markup.join(''))
gallery.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault()
}

const lightbox = new SimpleLightbox('.gallery__item')
