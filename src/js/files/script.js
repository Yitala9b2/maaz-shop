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
  }