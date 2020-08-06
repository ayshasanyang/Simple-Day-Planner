

const storeNine = document.getElementById('9am');
const storeTen = document.getElementById('10am');
const storeEleven = document.getElementById('11am');
const storeTwelve = document.getElementById('12pm');
const storeOne = document.getElementById('13pm');
const storeTwo = document.getElementById('14pm');
const storeThree = document.getElementById('15pm');
const storeFour = document.getElementById('16pm');
const storeFive = document.getElementById('17pm');

const saveBtn = document.querySelector("#save");
const today = document.querySelector("#currentDay");
const momentTime = moment().hours(Number);

today.innerHTML = (momentTime);

$(document).ready(function () {
	$(".save").click(function () {

        
    });



//background color changes with moment js
let currentTime = moment().hour();
if(currentTime > 9) {
	$(storeNine).css("backgroundColor", "lightgray")
}
else if (currentTime === 9) {
	$(storeNine).css("backgroundColor", "red")
}
else if (currentTime < 9) {
	$(storeNine).css("backgroundColor", "lightgreen")
}
	
//Background color for 10 AM
if(currentTime > 10) {
	$(storeTen).css("backgroundColor", "lightgray")
}
else if (currentTime === 10) {
	$(storeTen).css("backgroundColor", "red")
}
else if (currentTime < 10) {
	$(storeTen).css("backgroundColor", "lightgreen")
}

//Background color for 11 AM
if(currentTime >  11 ) {
	$(storeEleven).css("backgroundColor", "lightgray")
}
else if (currentTime === 11 ) {
	$(storeEleven).css("backgroundColor", "red")
}
else if (currentTime < 11 ) {
	$(storeEleven).css("backgroundColor", "lightgreen")
}

//Background color for 12 AM
if(currentTime > 12  ) {
	$(storeTwelve).css("backgroundColor", "lightgray")
}
else if (currentTime === 12 ) {
	$(storeTwelve).css("backgroundColor", "red")
}
else if (currentTime < 12 ) {
	$(storeTwelve).css("backgroundColor", "lightgreen")
}

//Background color for 1 PM
if(currentTime > 13) {
	$(storeOne).css("backgroundColor", "lightgray")
}
else if (currentTime === 13) {
	$(storeOne).css("backgroundColor", "red")
}
else if (currentTime < 13) {
	$(storeOne).css("backgroundColor", "lightgreen")
}

//Background color for 2 PM
if(currentTime > 14) {
	$(storeTwo).css("backgroundColor", "lightgray")
}
else if (currentTime === 14) {
	$(storeTwo).css("backgroundColor", "red")
}
else if (currentTime < 14) {
	$(storeTwo).css("backgroundColor", "lightgreen")
}

//Background color for 3 PM
if(currentTime > 15) {
	$(storeThree).css("backgroundColor", "lightgray")
}
else if (currentTime === 15) {
	$(storeThree).css("backgroundColor", "red")
}
else if (currentTime < 15) {
	$(storeThree).css("backgroundColor", "lightgreen")
}

//Background color for 4 PM
if(currentTime > 16) {
	$(storeFour).css("backgroundColor", "lightgray")
}
else if (currentTime === 16) {
	$(storeFour).css("backgroundColor", "red")
}
else if (currentTime < 16) {
	$(storeFour).css("backgroundColor", "lightgreen")
}

//Background color for 5 PM
if(currentTime > 17) {
	$(storeFive).css("backgroundColor", "lightgray")
}
else if (currentTime === 17) {
	$(storeFive).css("backgroundColor", "red")
}
else if (currentTime < 17) {
	$(storeFive).css("backgroundColor", "lightgreen")
}


});

//Store and retrive data from local storage
storeNine.value = localStorage.getItem('storeNine');
storeNine.oninput = () => {
	localStorage.setItem('storeNine', storeNine.value)
};

storeTen.value = localStorage.getItem('storeTen');
storeTen.oninput = () => {
	localStorage.setItem('storeTen', storeTen.value)
};

storeEleven.value = localStorage.getItem('storeEleven');
storeEleven.oninput = () => {
	localStorage.setItem('storeEleven', storeEleven.value)
};

storeTwelve.value = localStorage.getItem('storeTwelve');
storeTwelve.oninput = () => {
	localStorage.setItem('storeTwelve', storeTwelve.value)
};

storeOne.value = localStorage.getItem('storeOne');
storeOne.oninput = () => {
	localStorage.setItem('storeOne', storeOne.value)
};

storeTwo.value = localStorage.getItem('storeTwo');
storeTwo.oninput = () => {
	localStorage.setItem('storeTwo', storeTwo.value)
};

storeThree.value = localStorage.getItem('storeThree');
storeThree.oninput = () => {
	localStorage.setItem('storeThree', storeThree.value)
};

storeFour.value = localStorage.getItem('storeFour');
storeFour.oninput = () => {
	localStorage.setItem('storeFour', storeFour.value)
};

storeFive.value = localStorage.getItem('storeFive');
storeFive.oninput = () => {
	localStorage.setItem('storeFive', storeFive.value)
};

//Changes website background color   
// find elements
var anotherColor = $("body")
var button = $(".button1")

// handle click and add class
button.on("click", function () {
	anotherColor.toggleClass("another-color")
})




