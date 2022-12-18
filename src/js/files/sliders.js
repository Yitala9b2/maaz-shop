/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs, Zoom, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-swiper__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-swiper__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
		});
	};
     // Указываем скласс нужного слайдера
		// Создаем слайдер
		let swiperSingle = new Swiper('.vertical-tab-nav', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
            modules: [Thumbs,Zoom,Navigation],
			slidesPerView: 3,
			spaceBetween: 10,
			speed: 1500,
            freeMode: true,
            watchSlidesProgress: true,
            direction: "vertical",
		});
        
	 // Указываем скласс нужного слайдера
		// Создаем слайдер
		let productThumbCarousel = new Swiper('.product-thumb-carousel', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
            modules: [Thumbs,Zoom],
            zoom:true,
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 800,
            
            thumbs: {
                swiper: swiperSingle,
                },
		});
        
	

}

//let images = document.querySelectorAll('.vertical-tab .swiper-zoom-container');
//        console.log(images)
//        images.forEach(image =>{
//            let imageSlide = image.querySelector("img")
//            let magnfying_area = imageSlide.parentNode
//            console.log(magnfying_area)
            
//            magnfying_area.addEventListener("mousemove", function(event) {

//                let clientX = event.clientX - magnfying_area.offsetLeft
//                let clientY = event.clientY - magnfying_area.offsetTop

//                let mWidth = magnfying_area.offsetWidth
//                let mHeight = magnfying_area.offsetHeight
                
//                clientX = clientX / mWidth *100
//                clientY = clientY / mHeight *100
//                console.log(clientY)
//                console.log(clientX)
//                imageSlide.style.transform = 'translate(-'+clientX + '%,-'+clientY+'%) scale(2)'
                
//                })
//                magnfying_area.addEventListener("mouseleave", function() {
//                    imageSlide.style.transform = 'translate(-50%,-50%) scale(1)'
//                  })
//        })
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	
	initSliders();
    
    
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});