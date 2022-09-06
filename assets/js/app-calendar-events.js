// sample calendar events data
'use strict'
var curYear = moment().format('YYYY');
var curMonth = moment().format('MM');
// مهام صحية
var azhealthyEvents = {
	id: 1,
	backgroundColor: '#ccd2ff',
	borderColor: '#ccd2ff',
	textColor: '#000',
	events: [{
		id: '1',
		start: curYear + '-' + curMonth + '-08T08:30:00',
		end: curYear + '-' + curMonth + '-08T13:00:00',
		title: 'مهام صحية',
		description: 'الوصف هنا مهام صحية'
	}]
};
// مهام الدين
var azReligionEvents = {
	id: 2,
	backgroundColor: '#e0ffed',
	borderColor: '#e0ffed',
	textColor: '#000',
	events: [{
		id: '7',
		start: curYear + '-' + curMonth + '-20',
		end: curYear + '-' + curMonth + '-20',
		title: 'مهام الدين',
		backgroundColor: '#e0ffed',
		borderColor: '#e0ffed',
		description: 'الوصف هنا مهام الدين...'
	}]
};
// مهام لا منهجية
var aznonMethodEvents = {
	id: 3,
	backgroundColor: '#fbffcd',
	borderColor: '#fbffcd',
	textColor: '#000',
	events: [{
		id: '10',
		start: curYear + '-' + curMonth + '-28',
		end: curYear + '-' + curMonth + '-29',
		title: 'مهام لا منهجية',
		description: 'الوصف هنا مهام لا منهجية...'
	}]
};
// مهام علاجية
var aztherapeuticEvents = {
	id: 4,
	backgroundColor: '#ffccfd',
	borderColor: '#ffccfd',
	textColor: '#000',
	events: [{
		id: '13',
		start: curYear + '-' + curMonth + '-5',
		end: curYear + '-' + curMonth + '-5',
		title: 'مهام علاجية',
		description: 'الوصف هنا مهام علاجية...'
	}]
};
// مهام اجتماعية
var azsocialEvents = {
	id: 5,
	backgroundColor: '#ccf9ff',
	borderColor: '#ccf9ff',
	textColor: '#000',
	events: [{
		id: '14',
		start: curYear + '-' + curMonth + '-6',
		end: curYear + '-' + curMonth + '-6',
		title: 'مهام اجتماعية',
		description: 'الوصف هنا مهام اجتماعية...'
	}]
};
// مهام ارشادية
var azheuristicEvents = {
	id: 6,
	backgroundColor: '#ffcccc',
	borderColor: '#ffcccc',
	textColor: '#000',
	events: [{
		id: '15',
		start: curYear + '-' + curMonth + '-7',
		end: curYear + '-' + curMonth + '-7',
		title: 'مهام ارشادية',
		description: 'الوصف هنا مهام ارشادية...'
	}]
};
// مهام صيفية
var azsummerEvents = {
	id: 7,
	backgroundColor: '#ceffcd',
	borderColor: '#ceffcd',
	textColor: '#000',
	events: [{
		id: '16',
		start: curYear + '-' + curMonth + '-10',
		end: curYear + '-' + curMonth + '-10',
		title: 'مهام صيفية',
		description: 'الوصف هنا مهام صيفية...'
	}]
};
