import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesList = document.querySelector(".gallery");

const imagesCreate = galleryItems.map(({ preview, original, description }) =>
      `<li class='gallery__item'>
      <a class="gallery__link href="${original}">
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

  imagesList.insertAdjacentHTML("beforeend", imagesCreate);

  const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img 
    src="${imageSrc}" 
    width="800" 
    height="600"
    >`
    );
  instance.show();
});
