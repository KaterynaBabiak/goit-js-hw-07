import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector(".gallery");

const imagesCreate = galleryItems.map(({ preview, original, description }) =>
      `<li class='gallery__item'>
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
      width="300" 
      height="200"
      >
      </a>
      </li>`
  ).join("");

imagesList.insertAdjacentHTML("afterbegin", imagesCreate);

const gallery = new SimpleLightbox(".gallery a", {
    sourceAttr: 'href',
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  });

console.log(galleryItems);
