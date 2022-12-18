// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//============ПРЕЛОАДЕР================
window.onload = function() {
    
    setTimeout(function() {
        let preloader = document.getElementById("preloader_malc")
        if (preloader) {
            document.getElementById("preloader_malc").style.display = "none";
        }
        window.scrollBy(0, -5)

    }, 400);

};

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
    console.log(but)
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