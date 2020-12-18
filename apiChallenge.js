let baseUrl = "https://picsum.photos/200/300";
const randomImage = document.querySelector('.random-image');

function fetchResults(e){
fetch(baseUrl)
.then(function(result){
    console.log(result);
    displayResults(result);

})
}
function displayResults(result){
    let img = document.querySelector('img');
    img.src = result.url;
}