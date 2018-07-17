console.log("hello world");
document.querySelectorAll("div");

function hideResourcesContainer () {
    $("#resources-container").toggle();
}

$("#resources-link").click(function(){
    hideResourcesContainer();
});