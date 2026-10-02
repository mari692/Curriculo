
var botaoMenu = document.querySelector('#botaoMenu'); 
var menulateral = document.querySelector('#menu-lateral-id'); 
var fundoMenu = document.querySelector('#fundo-menu-id'); 

var linksMenu = document.querySelectorAll('#menu-lateral-id a'); 

function abriFecharMenu() { 
    menulateral.classList.toggle("aberto"); 
    fundoMenu.classList.toggle("visivel"); 
}

botaoMenu.addEventListener("click", abriFecharMenu); 
fundoMenu.addEventListener("click", abriFecharMenu); 

linksMenu.forEach(function(link) { 
    link.addEventListener("click", abriFecharMenu); 
});





































    