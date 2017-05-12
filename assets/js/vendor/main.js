
let radioSaver = elm => elm.checked ? 1 : 0;
let textSaver = elm => elm.value;

let saver = function(selector, key, savingFunction) {
	let elements = document.querySelectorAll(selector);
	let values = Array.prototype.map.call(elements, savingFunction);

	localStorage.setItem(key, JSON.stringify(values));
};

let radioLoader = elements => (val, ind) => elements[ind].checked = val === 1 ? true : false;
let textLoader = elements => (val, ind) => elements[ind].value = val;

let loader = function(selector, localKey, loadingFunction) {
	let elements = document.querySelectorAll(selector);
	let stringifiedValues = localStorage.getItem(localKey);
	try {
		let values = JSON.parse(stringifiedValues);
		values.forEach(loadingFunction(elements));
	} catch (e) {
		console.log(`No local data for ${localKey}`);
	}
};

let saveRadioValues = function() {
	saver('input[type=radio]', 'radioValues', radioSaver);
};

let saveCheckBoxValues = function() {
	saver('input[type=checkbox]', 'checkBoxValues', radioSaver);
};

let saveTextInputValues = function() {
	saver('input[type=text]', 'textInputValues', textSaver);
};

let saveDateInputValues = function() {
	saver('input[type=date]', 'dateInputValues', textSaver);
};

let loadRadioValues = function() {
	loader('input[type=radio]', 'radioValues', radioLoader);
};

let loadCheckBoxValues = function() {
	loader('input[type=checkbox]', 'checkBoxValues', radioLoader);
};

let loadTextInputValues = function() {
	loader('input[type=text]', 'textInputValues', textLoader);
};

let loadDateInputValues = function() {
	loader('input[type=date]', 'dateInputValues', textLoader);
};

let saveForm = () => {
	saveRadioValues();
	saveCheckBoxValues();
	saveTextInputValues();
	saveDateInputValues();
}

let loadForm = function() {
	loadRadioValues();
	loadCheckBoxValues();
	loadTextInputValues();
	loadDateInputValues();
};

window.onbeforeunload = (e) => {
	saveForm();
}

window.onload = (e) => {
	loadForm();
}
