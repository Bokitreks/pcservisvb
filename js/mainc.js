$(function() {
  $("table tr:nth-child(even)").addClass("striped");
});

$('.triggerSideNav').click(function(){
  $('.sideNav').toggleClass('sideNav1');
})


var nav=[['Pocetna','index.html'],['O nama','onama.html'],['Kontakt','kontakt.html'],['Cenovnik','cenovnik.html']];

var navigacija="<ul>";

for(var i=0;i<nav.length;i++) {
    navigacija+=`<li> <a href='${nav[i][1]}'>${nav[i][0]}</a></li>`;
}

navigacija+="</ul>";

var navovi=document.getElementsByClassName("nav");

for(var i=0;i<navovi.length;i++) {
  navovi[i].innerHTML+=navigacija;
  console.log(navovi[i]);
}

var navslika="<img src='images/logo.png' alt='logo' />";


 var navovi2=document.getElementsByClassName("nav2");

 for(var i=0;i<navovi2.length;i++) {
  navovi2[i].innerHTML+=navslika;
}



var xNiz=[['Popravka racunara','Mogucnost dolaska na adresu,brzo i efikasno otklanjanje kvara na racunaru'],['Popravka lap-topa','Mogucnost dolaska na adresu,brzo i efikasno otklanjanje kvara na lap-topu'],['Popravka monitora','Vrsi se u nasem servisu,vi donosite monitor ili ga mzoete poslati brzom postom na nasu asdresu.'],['Instaliranje sistema','Dolazak na asresu,instaliranje operativnog sistema,mogucnost i dodatnog instaliranja programa i MS offica'],['Ciscenje komponenti','Vrsimo islkljucivo u nasem servisu,rok trajanja proces ja najmanje 2 a najvise 3 dana.']]
var x="";
for(var i=0;i<xNiz.length;i++) {
  x+="<div 'class='container-fluid' id='cedevita'>" + xNiz[i][0] + "</div>" + "<div 'class='container-fluid' id='cedevitac'>" + xNiz[i][1] + "</div>"
  
}

document.getElementById("cdiv").innerHTML=x;



