// GENERATES A SINGLE RANDOM NUMBER BETWEEN 1 AND 6
function randomNumberFunction() {
    var localRandomNumber = Math.floor(Math.random() * 6 + 1);
    return localRandomNumber;
}

// ...................................................................................

var randomFiveNumbersArray = [];

// ...................................................................................
// GENERATES 5 RANDOM NUMBERS
function generateFiveRandomNumbers() {
    // $("#random-numbers").html("");
    for (var i = 0; i < 5; i++) {
        var localRandom = randomNumberFunction();
        // return random;
        // COMBINE THE 5 RANDOM NUMBERS INTO A SINGLE NUMBER
        randomFiveNumbersArray.push(localRandom);
        // return localPushRandom;
        // randomFiveNumbersArray.join("");
    }
}

// WORKING
// ...................................................................................

function joinFiveRandomNumbers() {
    var localJoinRandom = randomFiveNumbersArray.join("");
    // console.log("localJoinRandom: " + localJoinRandom);
    return localJoinRandom;
}

// WORKING
// ...................................................................................

var lookupValueArray = [];

function pushFiveNumberStringArray() {
    var localLookupValue = lookupValueArray.push(returnedLookupValueString);
    return localLookupValue;
    // console.log("lookupValueArray: " + pushFiveNumberStringArray());
}

// console.log("lookupValue: "+ lookupValue);

// ...................................................................................
function matchNumberStringToWordlist() {
    var passphrase = wordList[lookupValueArray];
    console.log("passphrase: " + passphrase);
    $("#passphrase").append(passphrase + " ");
}

// =====================================================================================
// GENERATE BUTTON ON CLICK

$("#generate-button").click(function () {
    userInputNumber = parseInt($("#user-input-number").val());

    // console.log("randomNumberFunction: " + randomNumberFunction());

    for (i=0; i < userInputNumber; i++) {

        generateFiveRandomNumbers();
        console.log("randomFiveNumbersArray: " + randomFiveNumbersArray);
        
        joinFiveRandomNumbers();
        // Why does declaring "var" not work the the following line???
        // var returnedLookupValueString = joinFiveRandomNumbers();
        returnedLookupValueString = joinFiveRandomNumbers();
        console.log("returnedLookupValueString: " + returnedLookupValueString);
        
        pushFiveNumberStringArray();
        console.log("lookupValueArray: " + lookupValueArray);
        
        matchNumberStringToWordlist();
        
        randomFiveNumbersArray = [];
        lookupValueArray = [];
    }
        
        
        // randomArray.push(generateRandomNumber());
        // console.log("randomArray: " + randomArray);
    // var userInputNumber = parseInt($("#user-input-number").val());
    // inputValidation();
    // for (i = 0; i < userInputNumber; i++) {
    // ........................................................................
    // LOOP RANDOM NUMBER FUNCTION
    // var returnedArrayVar = generateRandomNumbergenerateRandomNumber();
});

// =====================================================================================
$("#clear-button").click(function () {
    console.log("click");
        // ........................................................................
        // LOOP RANDOM NUMBER FUNCTION
        var currentPassphrase = $("#passphrase").html();
        $("#generated-passphrases").prepend(currentPassphrase + "<hr>");
        $("#passphrase").html("");
        $("#user-input-number").val("");
    });