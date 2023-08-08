import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery")

// Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.

const galleryItemsString = galleryItems.map( item =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
).join("");

galleryList.innerHTML += galleryItemsString;

// Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryList.addEventListener("click", selectImg);

function selectImg(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    };

    const originalImg = event.target.dataset.source;

// Відкриття модального вікна по кліку на елементі галереї.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

   const instance = basicLightbox.create(`
		<img src="${originalImg}">
	`);
    instance.show();

    // Додай закриття модального вікна після натискання клавіші Escape
    
    const closeModalByKey = (event) => {
        if (event.code === "Escape") {
            instance.close();
            // убираем слушатель при закрытии
            document.removeEventListener("keydown", closeModalByKey);
        };
    };

 document.addEventListener("keydown", closeModalByKey);
    
};
    




