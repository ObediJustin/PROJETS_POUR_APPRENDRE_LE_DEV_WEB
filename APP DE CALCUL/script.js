let query = document.querySelector(".query");
let searchBtn = document.querySelector("button");
let response = document.querySelector(".response"); 

searchBtn.onclick = function(){
    if(query.value.length > 0){
        response.value = "resultat: " + eval (query.value);
        response.style.display = "block";
    } else {
        alert("champ vide");
        response.style.display = "none";
    }
}