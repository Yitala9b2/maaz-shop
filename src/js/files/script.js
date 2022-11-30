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


  //=========================ПОДКЛЮЧЕНИЕ ISOTOPE.JS========================

    let elem = document.querySelector('.grid');
    if (elem) {
        var iso = new Isotope(elem, {
            // options
            itemSelector: '.isotope-cart',
            layoutMode: 'masonry',
            //  masonry:{
            //    columnWidth: '.grid-sizer'
            //  }
             sortAscending: {
                desс:false,
                asc:false,
                
                  },
            getSortData:{


                  desc: function( itemElem ) {
                  let desc = itemElem.querySelector('.desc').textContent;
                  return parseFloat( desc.replace( /[\(\)]/g, '') );
                },

                asc: function( itemElem ) {
                    let asc = itemElem.querySelector('.asc').textContent;
                    return parseFloat( asc.replace( /[\(\)]/g, '') );
                  },
                
                
            },
           
        });

//================СОРТИРОВКА======================

        var sortByGroup = document.querySelector('.sort-by-button-group');
        sortByGroup.addEventListener( 'click', function( event ) {
          // only button clicks
          if ( !matchesSelector( event.target, '.btn-sort' ) ) {
            return;
          }
          var sortValue = event.target.getAttribute('data-sort-value');
          iso.arrange({ sortBy: sortValue });
          
        });
            let btnSort = sortByGroup.querySelectorAll('.btn-sort')
            btnSort.forEach(Sort=>{Sort.addEventListener('click', function(){
                if (Sort.classList.contains('is-checked')) {
                    iso.updateSortData()
                }
                Sort.classList.toggle('is-checked')})
            })
//====================ФИЛЬТРА===========================

        let filters = {};

        var filtersElem = document.querySelector('.isotope__filters');
filtersElem.addEventListener( 'click', function( event ) {
  // check for only button clicks
  var isButton = event.target.classList.contains('iso__title');
  if ( !isButton ) {
    return;
  }
  var buttonGroup = fizzyUIUtils.getParent( event.target, '.button-group' );
  var filterGroup = buttonGroup.getAttribute('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = event.target.getAttribute('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  iso.arrange({ filter: filterValue });
});

//================ДОБАВЛЕНИЕ КЛАССА КНОПКАМ ФИЛЬТРАЦИИ======================

var buttonGroups = document.querySelectorAll('.button-group');
for (var i = 0; i < buttonGroups.length; i++) {
    var buttonGroup = buttonGroups[i];
    var onButtonGroupClick = getOnButtonGroupClick( buttonGroup );
    buttonGroup.addEventListener( 'click', onButtonGroupClick );
}

function getOnButtonGroupClick( buttonGroup ) {
    return function( event ) {
      // check for only button clicks
      var isButton = event.target.classList.contains('iso__title');
      if ( !isButton ) {
        return;
      }
      
      var checkedButton = buttonGroup.querySelector('.is-checked');
      checkedButton.classList.remove('is-checked')
      event.target.classList.add('is-checked');
    }
  }

  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
  
}


