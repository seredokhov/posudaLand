$(document).ready(function() {

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});


// Yandex Maps API

ymaps.ready(init);
var myMap;
var myPlacemark;
var width=document.body.clientWidth;

function init(){
	myMap = new ymaps.Map("map", {
		center: [55.731262, 37.666036],
		zoom: 17,
		controls: []
	});
	myMap.behaviors.disable('scrollZoom');
	if (width < 1200) {
		myMap.behaviors.disable('drag');
	}
	myPlacemark = new ymaps.Placemark([55.731262, 37.666036],{}, {
		iconLayout: 'default#image',
		iconImageHref: 'images/mark.png',
		iconImageSize: [64, 90],
		iconImageOffset: [0, -90],
	});
	myMap.geoObjects.add(myPlacemark);
	if (width > 700) {
		myMap.balloon.open(myMap.getCenter(),{
			contentBody: '<div style="width:300px;height:85px;color:#141311;font-size:16px;line-height:22px;padding:15px 5px;">Москва, 3-й Крутицкий переулок<br> Дом 11 (ст. м. Пролетарская)<br> +7 495 642 2373</div>'
		}, {
			offset: [-320, -40],
			layout: "default#imageWithContent",
			imageHref: 'images/baloon.png',
			imageSize: [327, 89],
			}
		);
	}
}