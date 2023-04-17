// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================


/// подключение плавной прокрутки
var scroll = new SmoothScroll('.menu__item a[href*="#"]',{
    header: '.header'
});
var  logScrollEvent = function (event) {
    menuClose()
}
document.addEventListener('scrollStart', logScrollEvent, false);
//============ПРЕЛОАДЕР================
window.addEventListener('load', function() {
    
    setTimeout(function() {
        let preloader = document.getElementById("preloader_malc")
        if (preloader) {
            document.getElementById("preloader_malc").style.display = "none";
        }
        window.scrollBy(0, -5)

    }, 400);

});

  //  ==========================ПОДКЛЮЧЕНИЕ ЯНДЕКС КАРТ И ИХ ПОДГРУЗКА ПО КЛИКУ================
  let map_container = document.getElementById('map_container');
  if (map_container) {
    
  
  let options_map = {
      once: true,
      passive: true,
      capture: true
  };
  map_container.addEventListener('click', start_lazy_map, options_map);
  //map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
  map_container.addEventListener('touchmove', start_lazy_map, options_map);
  let mapImg = document.querySelector('.map_img');
  let map_loaded = false;
  function start_lazy_map() {
      if (!map_loaded) {
          let map_block = document.getElementById('ymap_lazy');
          mapImg.remove()
          map_loaded = true;
          map_block.setAttribute('src', map_block.getAttribute('data-src'));
          map_block.removeAttribute('data-src');
          console.log('YMAP LOADED');
      }
  }}


 

//остановка корзины над футером
var dws = document.querySelector('.dws');
var footer = document.querySelector('.footer');
if (dws && footer) {
    function checkOffset() {
        function getRectTop(el) {
            //находим координату верха элемента по y
            var rect = el.getBoundingClientRect();
            return rect.top;
        }
        // (если координата верха(от блока до верха браузера) + количество прокрученных пикселей) + высота элемента >= (координата футера + количество прокрученных пикселей)
        if ((getRectTop(dws) + document.body.scrollTop) + dws.offsetHeight >= (getRectTop(footer) + document.body.scrollTop))
        dws.style.position = 'absolute';
        if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
        dws.style.position = 'fixed'; // restore when you scroll up


    }

    document.addEventListener("scroll", function () {
        checkOffset();
    });
}

// смена вида
var viewItemClick = document.querySelector(".product-view-mode");
let productWrapper = document.querySelector(".shop-page-products-wrapper .products-wrapper");

if (viewItemClick && productWrapper) {
    

    viewItemClick.addEventListener('click', function (event) {
    let but = event.target.parentNode
    let productViewMode = document.querySelector('.product-view-mode');
    if (productViewMode.querySelector('.active')) {
        productViewMode.querySelector('.active').classList.remove('active')
    }
    but.classList.add('active')
        var viewMode = but.getAttribute('data-viewmode');
        if (productWrapper.classList.contains("grid-view")||productWrapper.classList.contains("list-view")) {
            productWrapper.classList.remove("grid-view")
            productWrapper.classList.remove("list-view")
            productWrapper.classList.add(viewMode);
        }
        productWrapper.classList.add(viewMode);
        
});
}

// прокручивать к блоку
let contactsLink = document.querySelectorAll('#contacts-link');
let contactsTitle = document.querySelector('.contacts__title');
if (!contactsTitle) {
    contactsLink.forEach(link => link.removeAttribute('data-goto'))
    contactsLink.forEach(link => link.removeAttribute('data-goto-header'))

}

window.addEventListener("DOMContentLoaded", (function() {
const productionTechnology = document.querySelectorAll(".production__technology");
if (productionTechnology) {
    productionTechnology.forEach((technology => {
                let sideBlockTagging = technology.querySelector(".technology__title");
                if ("" == sideBlockTagging.innerText) technology.remove();
            }));
}
            

const spollerQuestion = document.querySelectorAll(".spollers__questions_item");
spollerQuestion.forEach((block => {
    let sideBlockTagging = block.querySelector(".spollers__title");
    if ("" == sideBlockTagging.innerText) block.remove();
}));

let gallery = document.querySelector('.gallery');
    if (gallery) {
        let galleryImage = gallery.querySelectorAll('.gallery__image');
        galleryImage.forEach((image =>{
            if (image.dataset.video) {
                let objImageSrc = JSON.parse(image.dataset.video)
                let imageSrc = objImageSrc.source[0].src
                if (imageSrc.length <=1) {
                    image.removeAttribute('data-video')
                }
                if (imageSrc.length > 1) {
                    image.removeAttribute('href')
                }
            } 
        }))
    }
}));