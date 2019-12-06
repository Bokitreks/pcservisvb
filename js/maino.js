$(document).ready(function(){
    
    $('#autori').hide();
    
    $('.triggerSideNav').click(function(){
      $('.sideNav').toggleClass('sideNav1');
    })
    
    $('#v').click(prikazDiv('Vuk Antanaskovic','-Student visoke ITS-Comtrade-skole, druga godina studija. Zavrsena 8. gimnazija. Osnivac servisa racunara VB <br/> Iza sebe ostvario veoma uspesnu karijeru u struci servisiranja racunara i televizora, vrlo komunikativan i kooperativan clan servisa!'));

    $('#b').click(prikazzDiv('Bojan Dimitrijevic (autor stranice)','-Student visoke ICT-skole, druga godina studija. Po struci elektrotehnicar racunara. Osnivac servisa racunara VB <br/> Ceo svima, moje ime je Bojan. Student sam na visokoj ICT skoli, trenutno sam druga godina studia! Od malena sam se zanimao za racunare, kako za softver tako i za hardver. Upisao sam visoku ICT jer sebe, u buducnosti , vidim kao Front End developera. '));
  
    

   
    
  
  
    $('#v').click(function(){
  
      $('#autori').slideDown();
  
  
  
    })

    $('#b').click(function(){
  
      $('#autori').slideDown();
  
  
  
    })


    
  
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







function prikazDiv(naslov, tekst) {

    document.getElementById("v").addEventListener('click',function(e){

      e.preventDefault();

    var naslovSadrzaj = document.getElementById('anaslov');

    var tekstSadrzaj = document.getElementById('atext');

    naslovSadrzaj.innerHTML = naslov;

    tekstSadrzaj.innerHTML = tekst;


  });
  


  }


  function prikazzDiv(naslov, tekst) {

    document.getElementById("b").addEventListener('click',function(e){

      e.preventDefault();

    var naslovSadrzaj = document.getElementById('anaslov');

    var tekstSadrzaj = document.getElementById('atext');


    naslovSadrzaj.innerHTML = naslov;

    tekstSadrzaj.innerHTML = tekst;


    

  });


  document.getElementById("b").addEventListener('click',function(){


document.getElementById("slikab").style.border="3px solid red";

document.getElementById("slikav").style.border="";


  });
  


  }


  document.getElementById("v").addEventListener('click',function(){


    document.getElementById("slikav").style.border="3px solid red";
    document.getElementById("slikab").style.border="";
    
    
      });
      
    
    
      

