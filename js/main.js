// ШАПКА С ПРОКРУЧЕННОЙ СТРАНИЦЕЙ
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if(height > 1){
		$('.catalog-filter').removeClass('show');
		$('.header-bottom').removeClass('active');
		$('.header').addClass('active');
		$('.page-body').css('padding','197px 0 0 0');
		$('.modal-catalog').css('margin','0');
		$('.show-desctope__filter').addClass('active');
		$('.show-desctope__filter_text').addClass('active');
		if (window.innerWidth < 1025) {
			$('.page-body').css('padding','134px 0 0 0');
		}
	} else{
		$('.catalog-filter').addClass('show');
		$('.header-bottom').addClass('active');
		$('.header').removeClass('active');
		$('.page-body').css('padding','0');
		$('.modal-catalog').css('margin','20px 0 0 0');
		$('.show-desctope__filter').removeClass('active');
		$('.show-desctope__filter_text').removeClass('active');
		$('.catalog-filter').removeClass('fixed');
		$('.show-desctope__filter_text').text('Открыть фильтры');
	}
});
// ПРОКРУТКА СТРАНИЦЫ ВВЕРХ ПРИ ОБНОВЛЕНИИ 
$(document).ready(function(){
	$(this).scrollTop(0);
});
// ОТКРЫТЬ ФИЛЬТР НА ДЕСКТОПЕ 
$('.show-desctope__filter_text').click(function(){
	$('.catalog-filter').toggleClass('fixed');
	if ($('.catalog-filter').hasClass('fixed')) {
		$('.show-desctope__filter_text').text('Закрыть фильтры');
		$('.show-desctope__filter_text').css('margin', '0 0 0 4px')
	} else {
		$('.show-desctope__filter_text').text('Открыть фильтры');
		$('.show-desctope__filter_text').css('margin', '0 0 0 3px')
	}
})

// СЛАЙДЕР ДИАПАЗОНА ЗНАЧЕНИЙ
const rangeSliderPrice = document.getElementById('range-slider');
if (rangeSliderPrice){
	noUiSlider.create(rangeSliderPrice, {
		start: [500, 50000],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [50000]
		}
	});
	const inputprice0 = document.getElementById('input-price--1');
	const inputPrice1 = document.getElementById('input-price--2');
	const inputsPrice = [inputprice0, inputPrice1];
	rangeSliderPrice.noUiSlider.on('update', function(values, handle){
		inputsPrice[handle].value = Math.round(values[handle]);
	});
	let setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSliderPrice.noUiSlider.set(arr);
	};
	inputsPrice.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// ЧЕКБОКСЫ ЦВЕТА
$('.color-checkbox').click(function(){
	if ($(this).is(':checked')) {
		$('.color-checkbox').not(this).prop('checked', false);
	}
});

// ВЫБОР ЦВЕТА 
$('#color-setting').click(function(){
	$(this).find('.dropdown').toggleClass('rotated');
	$('.color-choose__block').toggleClass('active');
})
$('.color__item-box').on('click',function(){
	$('.color-input').attr('style', $(this).children('.color__item').attr('style'));
})

// ВЫБОР СТРУКТУРЫ

$('.structure-form__inner').click(function(){
	$('.structure-form').find('.dropdown').toggleClass('rotated');
	$('.structure__block').toggleClass('active');
})
$('.structure__item').on('click',function(){
	$('.select-structure').text($(this).text());
	$('.structure__block').removeClass('active');
	$('.structure-form').find('.dropdown').removeClass('rotated');
})

// ВЫБОР МАТЕРИАЛА

$('.material-form__inner').click(function(){
	$('.material-form').find('.dropdown').toggleClass('rotated');
	$('.material__block').toggleClass('active');
})
$('.material__item').on('click',function(){
	$('.select-material').text($(this).text());
	$('.material__block').removeClass('active');
	$('.material-form').find('.dropdown').removeClass('rotated');
})

// ВЫБОР РАЗМЕРА
$('.size-form__inner').click(function(){
	$('.size-form').find('.dropdown').toggleClass('rotated');
	$('.size-block').toggleClass('active');
})
$('.size__item').on('click',function(){
	$('.size-input').val($(this).text());
	$('.size-block').removeClass('active');
	$('.size-form').find('.dropdown').removeClass('rotated');
})

// ВЫБОР БРЕНДА

$('.brand-form__inner').click(function(){
	$('.brand-form').find('.dropdown').toggleClass('rotated');
	$('.brand-block').toggleClass('active');
})
$('.brand__item').on('click',function(){
	$('.brand-select').text($(this).text());
	$('.brand-block').removeClass('active');
	$('.brand-form__inner').find('.dropdown').removeClass('rotated');
})
// СОРТИРОВКА 
$('.sorting-block').click(function(){
	$('.sorting-choose__block').toggleClass('active');
})
$('.sorting__item').on('click',function(){
	$('.sorting-block').text($(this).text());
	$('.sorting-choose__block').removeClass('active');
})
// СКРЫТЬ ВЫПАДАЮЩИЕ СПИСКИ ПРИ КЛИКЕ НА СВОБОДНОЕ ПРОСТРАНСТВО
$(document).mouseup(function(e) {
	var $target = $(e.target);
	if ($target.closest(".color-choose__block").length == 0 && 
		$target.closest(".structure__block").length == 0 
		&& $target.closest(".material__block").length == 0 
		&& $target.closest(".size-block").length == 0
		&& $target.closest(".brand-block").length == 0
		&& $target.closest(".sorting-choose__block").length == 0) {
		$(".color-choose__block").removeClass("active");
	$(".structure__block").removeClass("active");
	$(".material__block").removeClass("active");
	$(".size-block").removeClass("active");
	$(".brand-block").removeClass("active");
	$(".sorting-choose__block").removeClass("active");
	$('.dropdown').removeClass('rotated');
}
});

// ПЕРЕКЛЮЧЕНИЕ ИКОНОК ФИЛЬТРА 
$('.grid__item_1').on('click',function(){
	$(this).addClass('active');
	$('.grid__item_2').removeClass('active');
	$('.card-item').addClass('flexed')
})
$('.grid__item_2').on('click',function(){
	$(this).addClass('active');
	$('.grid__item_1').removeClass('active');
	$('.card-item').removeClass('flexed');
})
window.onresize = function(event) {
	if(window.innerWidth < 1210) {
		$('.catalog-filter').removeClass('fixed');
	}
	if(window.innerWidth < 980) {
		$('.card-item').removeClass('flexed');
		$('.grid__item_2').addClass('active');
		$('.grid__item_1').removeClass('active');
	}
};
// СЧЁТЧИК В КАРТОЧКЕ 
// Убавляем кол-во по клику
$('.card-tools .minus').click(function() {
	let $input = $(this).closest('.card-tools').find('.counter-input');
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
});
// Прибавляем кол-во по клику
$('.card-tools .plus').click(function() {
	let $input = $(this).closest('.card-tools').find('.counter-input');
	let count = parseInt($input.val()) + 1;
	count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
	$input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$('.card-counter .counter-input').bind("change keyup input click", function() {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}
	if (this.value == "") {
		this.value = 1;
	}
	if (this.value > parseInt($(this).data('max-count'))) {
		this.value = parseInt($(this).data('max-count'));
	}
});
// ОТКРЫТЬ ФИЛЬТР НА МОБИЛКЕ
$('.adaptive__filter').click(function(){
	$('.catalog-filter').addClass('active');
	$('html').css('overflow', 'hidden');
})
// ЗАКРЫТЬ ФИЛЬТР НА МОБИЛКЕ 
$('.close__filter').click(function(){
	$('.catalog-filter').removeClass('active');
	$('html').css('overflow', 'hidden auto');
})
// ТАБЫ ДЛЯ КАТАЛОГА
$('ul.tabs__caption').on('mouseover', 'li:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	if (window.innerWidth < 981) {
		$(this)
		.addClass('active show').siblings().removeClass('active show')
		.closest('div.tabs').find('div.tabs__content').removeClass('active show').eq($(this).index()).addClass('active show');
		$('.catalog-tabs__caption').css('display', 'none');
		$('.catalog__adaptive-title').css('display','none');
	}
});
// ТАБЫ В БОЛЬШОЙ КАРТОЧКЕ
$('ul.big-card--tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('div.big-card__tabs').find('div.big-card--tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
// УБРАТЬ ИЗНАЧАЛЬНЫЙ КЛАСС У ТАБОВ НА МОБИЛКЕ
$(document).ready(function(){
	if (window.innerWidth < 981) {
		$('.catalog-tabs__content').removeClass('active');
		$('.catalog-tabs__caption li').removeClass('active');
	}
})
// ОТКРЫТЬ КАТАЛОГ В ШАПКЕ
$('.input__burger').click(function(){
	$(this).toggleClass('active')
	$('.modal-catalog').toggleClass('active');
	$('.show-desctope__filter_text').toggleClass('hidden');
	$('.show-desctope__filter').toggleClass('hidden');
	var height = $(window).scrollTop();
	if (window.innerWidth < 981) {
		$('html').css('overflow', 'hidden');
	}
})
// ЗАКРЫТЬ КАТАЛОГ НА МОБИЛКЕ
$('.close-catalog').click(function(){
	$('.modal-catalog').removeClass('active');
	$('.input__burger').removeClass('active');
	$('.catalog-tabs__content').removeClass('active show');
	$('.catalog-tabs__caption').css('display','block');
	$('.catalog__adaptive-title').css('display','block');
	$('html').css('overflow', 'hidden auto');
})
// ВЕРНУТЬСЯ К КАТАЛОГУ НА МОБИЛКЕ
$('.return-catalog').click(function(){
	$('.catalog-tabs__content').removeClass('active show');
	$('.catalog-tabs__caption li').removeClass('active show');
	$('.catalog-tabs__caption').css('display','block');
	$('.catalog__adaptive-title').css('display','block');
})

// СЛАЙДЕР В БОЛЬШОЙ КАРТОЧКЕ

var swiperGallery = new Swiper(".gallery-card", {
	spaceBetween: 19,
	direction: "vertical",
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		980: {
			direction: "vertical",
			slidesPerView: 4,
			spaceBetween: 19,
		},
		450: {
			direction: "horizontal",
			slidesPerView: 3,
			spaceBetween: 10,
		},
		320: {
			direction: "horizontal",
			slidesPerView: 3,
		},
	},	
});
var swiperBigCard = new Swiper(".big-card-wrapper", {
	slidesPerView: 1,
	spaceBetween: 0,
	thumbs: {
		swiper: swiperGallery,
	},
});

// СЛАЙДЕРЫ РЕКОМЕНДАЦИЙ

const recommendationSliders = document.querySelectorAll('.recommendation__slider');
recommendationSliders.forEach(function(el) {
	const swiper = new Swiper(el, {
		loop: false,
		slidesPerGroup: 1,
		spaceBetween: 44,
		speed: 800,
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			550: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 2,
			},
			981: {
				slidesPerView: 3,
			},
		},	
	});
});