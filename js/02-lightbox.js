import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery")

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.

const galleryItemsString = galleryItems.map( item =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}"" alt="${item.description}" />
   </a>
</li>`
).join("");

galleryList.innerHTML += galleryItemsString;

new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: `bottom`,
    captionDelay: 250,
});