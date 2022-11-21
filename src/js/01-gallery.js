import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "/node_modules/simplelightbox";
import '/node_modules/simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const galleryCardSet = galleryItems.map(createGalleryCard).join('');
galleryRef.insertAdjacentHTML('afterbegin', galleryCardSet);

function createGalleryCard({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>`;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
