// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';


// слайдер для цены
export function rangeInit() {
	const priceSlider = document.querySelector('.price-range');
	if (priceSlider) {
        let amount = document.getElementById("amount");
		let minPrice = parseFloat(priceSlider.getAttribute('data-min'));
		let maxPrice = parseFloat(priceSlider.getAttribute('data-max'));
		noUiSlider.create(priceSlider, {
			start:  [minPrice,maxPrice],
			connect: true,
            step: 100,
			range: {
				'min': minPrice,
				'max': maxPrice
			},
		});
        priceSlider.noUiSlider.on("update", function(values, handle){
            amount.value =" " + Math.round(values[0]) +
            " ₽ - " + Math.round(values[1]) + " ₽"
        });
	}
}
rangeInit();
