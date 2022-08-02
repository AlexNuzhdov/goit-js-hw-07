import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesGallary = document.querySelector(".gallery");
const  imagesMarkup = creatGallary(galleryItems);
imagesGallary.insertAdjacentHTML('beforeend', imagesMarkup);
imagesGallary.addEventListener('click', onImgClick);


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
    .join('');

};
  
    function onImgClick(event) {  
    event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return
        };
        const original = event.target.dataset.source;

        const onEscapePress = event => { 
            if (event.code === 'Escape') {
              instance.close();
            }
          };
        
          const instance = basicLightbox.create(`
          <img src="${original}" width="1280" height="600">`,
          {
            onShow: (instance) => 
            document.addEventListener('keydown',onEscapePress),
            onClose: (instance) => 
            document.removeEventListener('keydown', onEscapePress),
          });
          
          instance.show();
        
       };
        
      


        
            

       
        

        


   


    
    