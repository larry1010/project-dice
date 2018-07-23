// =====================================================================================
// ON LOAD
// $("#passphrase-generator-container").show();
$("#resources-container").hide();
$("#concept-container").hide();

// =====================================================================================
// NAVIGATION
function hideResourcesContainer() {
    $("#resources-container").show();
    $("#passphrase-generator-container").hide();
    $("#concept-container").hide();
    $("#generated-passphrases").hide();
}

function hidePassphraseContainer() {
    $("#passphrase-generator-container").show();
    $("#generated-passphrases").show();
    $("#resources-container").hide();
    $("#concept-container").hide();
}

function hideConceptContainer() {
    $("#concept-container").show();
    $("#resources-container").hide();
    $("#passphrase-generator-container").hide();
    $("#generated-passphrases").hide();
}

$("#resources-link").click(function () {
    hideResourcesContainer();
});

$("#feature-link").click(function () {
    hidePassphraseContainer();
});

$("#concept-link").click(function () {
    hideConceptContainer();
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
    for (var i = 0; i < 5; i++) {
        randomNumberFunction();
    }
    checkRandomNumbersDiv();
});

// =====================================================================================
// SAVE AND CLEAR BUTTON ON CLICK
$("#clear-button").click(function () {
    var blankCheck = $("#random-numbers").html();
    if (blankCheck == "") {
    } else {
        // ........................................................................
        // LOOP RANDOM NUMBER FUNCTION
        var currentPassphrase = $("#passphrase").html();
        $("#generated-passphrases").append(currentPassphrase + "<hr>");
        $("#random-numbers").html("");
        $("#passphrase").html("");
    }
});

// =====================================================================================
// CONVERT 6 RANDOM NUMBERS INTO A SINGLE NUMBER
// var lookUpValue = the random 6 numbers generated above;
function checkRandomNumbersDiv() {
    var lookUpValue = $("#random-numbers").html()
    // ...........................................................................
    // Append word from lookUpValue
    var passphrase = wordList[lookUpValue];
    $("#passphrase").append(passphrase);
}

// =====================================================================================
// randomNumberFunction();

//Generate a random bit
// $("#random-bit-generator").click(function () {
// alert('test 2');
// $("#random-bit-generator output").first().attr('value', 20);
// document.getElementById('bit_output').value = 'test';
// });

// =====================================================================================
// CONVERT 6 RANDOM NUMBERS INTO A SINGLE NUMBER
// Use lookUpValue to find the corresponding word in the data set.
// Any suggestions on how to look up the data? Is the best way simply to put all the data into an array?

// =====================================================================================
// Password requirements generator.

// https://www.w3schools.com/js/js_strings.asp

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// string to array, --> Object --> object name is the key --> Lookup
// .replace /t with a space
// console.log(i)
// var res = str.replace("\t", " ");
// console.log(i.replace("\t", " "));
// .split(" ")

// https://www.w3schools.com/jsref/jsref_replace.asp
// https://www.w3schools.com/jsref/jsref_split.asp

// https://www.w3schools.com/js/js_objects.asp

// https://repl.it/repls/PleasingTrickyBrowser
// https://repl.it/repls/UnlinedCrazyRam

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// =====================================================================================
// Git Resources
// https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting

// =====================================================================================
// Convert list to JSON
// Used Excel to convert list to CSV.
// Used CSV to JSON online converter to convert CSV to JSON had to use transpose to get object in key:value pair.
// https://www.csvjson.com/csv2json