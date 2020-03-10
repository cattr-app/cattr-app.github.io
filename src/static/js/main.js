document.addEventListener('DOMContentLoaded', () => {
	let monthName = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let date = new Date();

	while (date.getDay() != 5) {
		date.setDate(date.getDate() + 1);
	}

	document.getElementById('release-date').innerHTML = `${monthName[date.getMonth()]} ${date.getDate()}`;
});