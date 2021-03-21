// let symbols = [
//     {class: '-zero', value: '0'},
//     {class: '-one', value: '1'},
//     {class: '-two', value: '2'},
//     {class: '-three', value: '3'},
//     {class: '-four', value: '4'},
//     {class: '-five', value: '5'},
//     {class: '-six', value: '6'},
//     {class: '-seven', value: '7'},
//     {class: '-eight', value: '8'},
//     {class: '-nine', value: '9'},
//     {class: '-dot', value: '.'},
//     {class: '-divide', value: '/'},
//     {class: '-multiply', value: '*'},
//     {class: '-subtractiv', value: '-'},
//     {class: '-add', value: '+'},
//     {class: '-reset', value: ''},
//     {class: '-delete', value: ''},
//     {class: '-equally', value: '='},
// ]

function calcInsrtuction(symbol) {
	$('.-display').val($('.-display').val() + symbol);
}

function calcEqually() {
	$('.-display').val(eval($('.-display').val()));
}

function calcClear() {
	$('.-display').val('');
}

function calcDelete() {
	value = $('.-display').val();
	$('.-display').val(value.substring(0, value.length - 1));
}