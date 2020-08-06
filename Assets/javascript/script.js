
const saveBtn = document.querySelector("#save");
const today = document.querySelector("#currentDay");
const momentTime = moment().hours(Number);

today.innerHTML = (momentTime);

$(document).ready(function () {
	$(".save").click(function () {

        
    });

    
//background color changes with moment js
if (moment().format("HH") > parseInt($(storeNine).attr("data-time"))) {
    $(storeNine).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeNine).attr("data-time"))) {
    $(storeNine).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeNine).attr("data-time"))) {
	$(storeNine).css("backgroundColor", "mediumseagreen");
}

//Background color for 10 AM
if (moment().format("HH") > parseInt($(storeTen).attr("data-time"))) {
    $(storeTen).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeTen).attr("data-time"))) {
    $(storeTen).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeTen).attr("data-time"))) {
	$(storeTen).css("backgroundColor", "mediumseagreen");
}

//Background color for 11 AM
if (moment().format("HH") > parseInt($(storeEleven).attr("data-time"))) {
    $(storeEleven).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeEleven).attr("data-time"))) {
    $(storeEleven).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeEleven).attr("data-time"))) {
	$(storeEleven).css("backgroundColor", "mediumseagreen");
}

//Background color for 12 PM
if (moment().format("HH") > parseInt($(storeTwelve).attr("data-time"))) {
    $(storeTwelve).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeTwelve).attr("data-time"))) {
    $(storeTwelve).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeTwelve).attr("data-time"))) {
	$(storeTwelve).css("backgroundColor", "mediumseagreen");
}

//Background color for 1 PM
if (moment().format("HH") > parseInt($(storeOne).attr("data-time"))) {
    $(storeOne).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeOne).attr("data-time"))) {
    $(storeOne).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeOne).attr("data-time"))) {
	$(storeOne).css("backgroundColor", "mediumseagreen");
}

//Background color for 2 PM
if (moment().format("HH") > parseInt($(storeTwo).attr("data-time"))) {
    $(storeTwo).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeTwo).attr("data-time"))) {
    $(storeTwo).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeTwo).attr("data-time"))) {
	$(storeTwo).css("backgroundColor", "mediumseagreen");
}

//Background color for 3 PM
if (moment().format("HH") > parseInt($(storeThree).attr("data-time"))) {
    $(storeThree).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeThree).attr("data-time"))) {
    $(storeThree).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeThree).attr("data-time"))) {
	$(storeThree).css("backgroundColor", "mediumseagreen");
}

//Background color for 4 PM
if (moment().format("HH") > parseInt($(storeFour).attr("data-time"))) {
    $(storeFour).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeFour).attr("data-time"))) {
    $(storeFour).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeFour).attr("data-time"))) {
	$(storeFour).css("backgroundColor", "mediumseagreen");
}

//Background color for 5 PM
if (moment().format("HH") > parseInt($(storeFive).attr("data-time"))) {
    $(storeFive).css("backgroundColor", "lightgray");
}
else if (moment().format("HH") === parseInt($(storeFive).attr("data-time"))) {
    $(storeFive).css("backgroundColor", "red");
}
else if (moment().format("HH") < parseInt($(storeFive).attr("data-time"))) {
	$(storeFive).css("backgroundColor", "mediumseagreen");
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


