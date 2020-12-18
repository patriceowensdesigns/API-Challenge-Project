let baseUrl = "https://picsum.photos/200/300";
let randomImage = document.querySelector('.random-image');

fetch('baseUrl')
.then(function(result){
    return result.json();
})
.then(function(json){
    displayResults(json);
})

