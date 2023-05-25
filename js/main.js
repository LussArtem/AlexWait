// Определяем действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');
const title = document.querySelector('.title');

const daysText = document.querySelector('#days-text');
const hoursText = document.querySelector('#hours-text');
const minutesText = document.querySelector('#minutes-text');
const secondsText = document.querySelector('#seconds-text');

// Делаем расчеты
const currentYear = new Date().getFullYear(); // 2023
const nextYear = new Date(`May 30 ${currentYear} 00:00:00`);

// Устанавливаем год на страницу
// year.innerText = currentYear + 1;

function updateCounter() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;

	// Перевод в дни
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	// Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем 8 часов
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	// Минут всего, далее остаток от преобразования в часы, минут осталось
	const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
	// Секундк всего, далее остаток от преобразования в минуты, секунд осталось
	const secondsLeft = Math.floor(diff / 1000) % 60;

	// console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

	days.innerText = daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

	// склонение числительных
	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	daysText.textContent = declOfNum(daysLeft, ['день', 'дня', 'дней']);
	hoursText.textContent = declOfNum(hoursLeft, ['час', 'часа', 'часов']);
	minutesText.textContent = declOfNum(minutesLeft, ['минута', 'минуты', 'минут']);
	secondsText.textContent = declOfNum(secondsLeft, ['секунда', 'секунды', 'секунд']);

	// console.log(title)
}

// Запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000);

setTimeout(function () {
    preloader.remove();
    countdown.style.opacity = '1';
	title.style.opacity = '1';
}, 4000);
