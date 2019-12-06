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



var uslugeNiz=['Ugradnja operativnog sistema -- Brz i ekifasan izlazak na teren','Ugradnja komponenti -- Amd,Intel','Diagnostika -- Benchmark,CPU ','Otklanjanje kvarova -- Zamena komponenti,popravka postojecih','Ciscenje komponenti -- Izlazak na teren'];


for(var j=0;j<uslugeNiz.length;j++) {

document.getElementById('sredinad').innerHTML += "<div class='uslugeDiv'> <a href='#'> " + uslugeNiz[j] + "</a> </div>";

}





document.getElementById("dugme").addEventListener('click',function(){

  var regExpIme=/^[A-Z\Ć\Č\Š\Đ\Ž][a-z\ć\č\ž\š\đ]{2,10}$/;
  var regExpPrezime=/^[A-Z\Ć\Č\Š\Đ\Ž][a-z\ć\č\ž\š\đ]{2,20}$/;
  var x=document.getElementById("Ime").value;
  var y=document.getElementById("prezime").value;
  var z=document.getElementById("textarea").value;
  

if(document.getElementById("textarea").value==""){

  document.getElementById("greska3").innerHTML="Niste uneli komentar!";
}

else{
  document.getElementById("greska3").innerHTML="";
}



if(document.getElementById("Ime").value==""){

  document.getElementById("greska1").innerHTML="Niste uneli ime!";

}

else{



if(regExpIme.test(x)){

document.getElementById("greska1").innerHTML="";

}

else {
  document.getElementById("greska1").innerHTML="Niste ispravno uneli ime!";
}


}


if(document.getElementById("prezime").value==""){

  document.getElementById("greska2").innerHTML="Niste uneli prezime!";

}

else{

if(regExpPrezime.test(y)){

  document.getElementById("greska2").innerHTML="";
  
  }
  
  else {
    document.getElementById("greska2").innerHTML="Niste ispravno uneli prezime!";
  }
  
}

  var cek=document.getElementById("cek");

  if (!cek.checked) {
    document.getElementById("greska4").innerHTML="Niste potvrdili";
  }
  else{
    document.getElementById("greska4").innerHTML="";
  }


  });


