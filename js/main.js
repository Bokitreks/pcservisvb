


$(document).ready(function(){
  //sakrivanje();
  $('#skriveni').hide();

  $('.hrpa').click(prikaziDiv('uslugen0', 'racunar.jpg', 'Popravka racunara', 'Popravka računara u Beogradu vrši popravke svih vrsta računara. Popravka obuhvata softverske i hardverske probleme: instalacija sistema, brisanje virusa, popravka hardvera i softvera, održavanje sistema'));
  $('.hrpa').click(prikaziDiv('uslugen1', 'laptop.jpg', 'Popravka laptopova', 'Laptop servis u Beogradu obavlja popravku laptopova: Asus, Acer, Emachines, Fujitsu Siemens, HP, Dell, LG, IBM, Lenovo, Toshiba, Samsung, Sony. Najčešći problem na laptopu je hardverski i nastaje nepažnjom korisnika (prosuta tečnost po tastaturi), ali i usled oštećenja hardvera (polomljen ekran, flet kabl, baterija, ventilator, polomljen ulaz za punjač-DC konektor, pokvaren punjač, polomljene šarke, plastika, laptop pregreva'));
  $('.hrpa').click(prikaziDiv('uslugen2', 'monitor.jpg', 'Popravka monitora', 'Popravka monitora u Beogradu vrši popravke svih vrsta monitora. Popravka obuhvata hardverske probleme: instalacija sistema, brisanje virusa, popravka hardvera i održavanje sistema'));
  $('.hrpa').click(prikaziDiv('uslugen3', 'sistem.jpg', 'Instaliranje sistema', 'Instalacija sistema Windows 10, 8, Win 7, XP, Linux i MAC se obavlja na novi laptop ili desktop računar bez operativnog sistema. Takođe, podizanje/obaranje sistema se obavlja i zbog oštećenja operativnog sistema od strane virusa ili slučajnim brisanjem bitnih datoteka. Naš servis vrši instaliranje sistema po želji i prema zahtevima vašeg računara. Uz sistem se vrši instalacija drajvera i besplatnih programa.'));
  $('.hrpa').click(prikaziDiv('uslugen4', 'ciscenje.jpg', 'Ciscenje komponenti', 'Čišćenje laptopa se obavlja kada se laptop pregreva, radi sporo, sistem podiže dugo, prikazuje se problem sa kulerom (ventilator ne radi), izlazi plavi ekran. Problem začepljenja rashladnog sistema na laptopu izaziva nečistoća koji se nakuplja u unutrašnjost laptopa. Godišnje je potrebno jednom kompletno očistiti laptop. Opustite se, mi čišćenje laptopa radimo brzo i efikasno sa garancijom na rad.'));
  $('.hrpa').click(prikaziDiv('uslugen5', 'dijagnostika.jpg', 'Dijagnostika', 'Dijagnostika kompjutera se mora sprovesti pažljivo i detaljno. Postoje tačne odrednice kolika mora da bude temperatura kulera na napajanju, kolika na procesoru itd. kojih se i serviseri zaposleni u ovom servisu strogo pridržavaju.'));

  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
 

  $('.triggerSideNav').click(function(){
    $('.sideNav').toggleClass('sideNav1');
  })


  $('.hrpa').click(function(){

    $('#skriveni').slideDown();



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




var blokNiz=[['PLAĆATE SAMO USPEH','Niste sigurni da li je isplativo da popravite Vaš računar? Daćemo Vam besplatnu procenu servisa da lakše odlučite o servisu. Nemojte trošiti pare na nove računare dok ne saznate cenu popravke starog uređaja. Procenom cene koštanja servisa, omogućuje Vam da se informišete o ceni pre servisa!'],['SERVIS SA GARANCIJOM','Servis Računara je naše ime. Mi ne popravljamo samo desktop i laptop računare. Kada su u pitanju popravke tv aparata, konzola za igranje i monitora imajte poverenja u nas. Naša uspešnost u otklanjanju kvarova na uređajima je zagarantovana. Vaš uređaj je važan za nas, i pobrinućemo se da radi kao nov!'],['TIM ISKUSNIH SERVISERA','Mi nudimo 90 dana garancije za sve standardne servise. Kada završimo popravku, mi testiramo Vaš uređaj, ali ako kasnije bude problema na uređaju, tu smo da da Vam pomognemo. Ne očekujemo da bude bilo kakvih problema, ali zar nije lepo znati da imate garanciju ako Vam je potrebna?']];
var blok="<div class='container-fluid' id='blokcic'>";

for(var x=0;x<blokNiz.length;x++){

    blok+="<div class='bloK'><h3>" + blokNiz[x][0] + "</h3>" + "<p id='textb'>" + blokNiz[x][1]  + "</p>" + "</div>";
    


}


blok+="</div>";

document.getElementById("blokovi").innerHTML=blok;


var servis="";
var servisNiz=['Popravka racunara','Popravka lap-topova','Popravka monitora','Instaliranje sistema','Ciscenje komponenti','Dijagnostika'];

for(var y=0;y<servisNiz.length;y++) {
    servis+=`<a href='#skriveni' id='uslugen${y}' class="hrpa"'>${servisNiz[y]}</a>`;
}

document.getElementById("serviss").innerHTML=servis;


// Menjanje diva #skriveni

function prikaziDiv(identifikator, slika, naslov, tekst) {

      document.getElementById(identifikator).addEventListener('click',function(e){

        e.preventDefault();

      var naslovSadrzaj = document.getElementById('naslovSadrzaj');

      var tekstSadrzaj = document.getElementById('tekstSadrzaj');

      var slikaSadrzaj = document.querySelector('.imgSadrzaj');

      naslovSadrzaj.innerHTML = naslov;

      tekstSadrzaj.innerHTML = tekst;

      slikaSadrzaj.innerHTML = `<img class="imgSadrzaj img-fluid" src='images/${slika}' alt='Slika racunara'/>`

    });
    


    }


    document.getElementById("linkovi").addEventListener('click',function(){



      alert("Dobrodosli na oficijalni sajt servisa kompjutera VB!");




    });
    
  





