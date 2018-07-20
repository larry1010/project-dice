// =====================================================================================
// ON LOAD
$("#passphrase-generator-container").hide();
$("#resources-container").hide();

// =====================================================================================
// NAVIGATION
function hideResourcesContainer() {
    $("#resources-container").show();
    $("#passphrase-generator-container").hide();
}

function hidePassphraseContainer() {
    $("#passphrase-generator-container").show();
    $("#resources-container").hide();
}

$("#resources-link").click(function () {
    hideResourcesContainer();
});

$("#feature-link").click(function () {
    hidePassphraseContainer();
});

// =====================================================================================
// RANDOM NUMBER GENERATOR
function randomNumberFunction() {
    var localRandomNumber = Math.floor((Math.random() * 6) + 1);
    console.log("Random Number: " + localRandomNumber);
    $("#random-numbers").append(localRandomNumber);
}

// =====================================================================================
// GENERATE BUTTON ON CLICK
$("#generate-button").click(function () {
    randomNumberFunction();
});

//Generate a random bit
$("#random-bit-generator").click(function(){
	alert('test 2');
   $("#random-bit-generator output").first().attr('value', 20);
   document.getElementById('bit_output').value = 'test';
});
