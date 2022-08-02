import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallary = document.querySelector(".gallery");
const  imagesMarkup = creatGallary(galleryItems);
imagesGallary.insertAdjacentHTML('beforeend', imagesMarkup);

function creatGallary(galleryItems) {
    return  galleryItems.map(({preview, original, description}) => {
        return ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
           
            alt="${description}"
            title="${description}"
          />
        </a>
      </div> 
      `;
    })
    .join('');

};

   let gallery = new SimpleLightbox('.gallery a', {
   captionData: 'alt',
   captionType: 'attr',
	 captionDelay: 250,
});
    gallery.on('show.simplelightbox');