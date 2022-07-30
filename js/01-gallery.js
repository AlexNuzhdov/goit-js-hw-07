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
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div> 
      `;
    })
    .join('')

}

    imagesGallary.addEventListener('click', event => {  
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return
        }

        const original = event.target.dataset.source;
        console.log (original);

        const instance = basicLightbox.create (`
            <img src="${original}" width="1280" height="600">
        `)
        instance.show()

        imagesGallary.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                instance.close()
            }
        })


    });

      
       

       
 
  






