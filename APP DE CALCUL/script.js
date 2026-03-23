let query = document.querySelector(".query");
let searchBtn = document.querySelector("button");
let result = document.querySelector(".response"); 

searchBtn.onclick = function(){
    if(query.value.length > 0){
        result.value = "resultat: " + eval (query.value);
        result.style.display = "block";
    } else {
        alert("champ vide");
        response.style.display = "none";
    }
}