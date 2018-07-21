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
    $("#random-numbers").append(localRandomNumber);
}

// =====================================================================================
// GENERATE BUTTON ON CLICK
$("#generate-button").click(function () {
    // ........................................................................
    // LOOP RANDOM NUMBER FUNCTION
    $("#random-numbers").html("");
    for (var i = 0; i < 6; i++) {
        randomNumberFunction();
    }
    checkRandomNumbersDiv();
});
// =====================================================================================
// CONVERT 6 RANDOM NUMBERS INTO A SINGLE NUMBER
// var lookUpValue = the random 6 numbers generated above;
function checkRandomNumbersDiv () {
    var lookUpValue = $("#random-numbers").html()
    console.log(lookUpValue);
}


// =====================================================================================
// CONVERT 6 RANDOM NUMBERS INTO A SINGLE NUMBER
// Use lookUpValue to find the corresponding word in the data set.
// Any suggestions on how to look up the data? Is the best way simply to put all the data into an array?

// =====================================================================================
// Password requirements generator.

// string to array, --> Object --> object name is the key --> Lookup
// .replace /t with a space
// console.log(i)
// var res = str.replace("\t", " ");
// console.log(i.replace("\t", " "));
// .split(" ")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// https://www.w3schools.com/jsref/jsref_replace.asp
// https://www.w3schools.com/jsref/jsref_split.asp
// https://www.w3schools.com/js/js_objects.asp
// https://repl.it/repls/PleasingTrickyBrowser
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys