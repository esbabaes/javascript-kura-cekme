var kura_liste, liste_cek, liste_ekle, sayi, kontrol = 1,
    kura, liste_tut = [],tut=0;

var liste_yaz = document.querySelector("#liste_goster");
var liste_sonuc = document.querySelector("#kura_sonuc");

function liste_cek() {

    kura_liste = document.querySelector("#kura_liste").value;
    liste_ekle = kura_liste.split(",");
    if (liste_ekle != "" && kontrol == 1) {
        liste_yaz.innerHTML = "";
        kontrol++;
    }

    if (kura_liste != "") {
        for (sayi = 0; sayi < liste_ekle.length; sayi++) {
            if (sayi != liste_ekle.length) {
             liste_tut[tut]= liste_ekle[sayi];
                tut++; 
            }

            liste_yaz.innerHTML += "<span>" +liste_ekle[sayi]+"</span>";
        }
    }else{
        alert("listeye isim yaz");
    }
    console.log(liste_tut);
    kura_liste = document.querySelector("#kura_liste").value = "";
}

function liste_cek_temizle() {
    kura_liste = document.querySelector("#kura_liste").value = "";
}

function kura_cek() {
    var listekontrol = document.querySelector("#liste_goster").innerHTML;
    if(liste_sonuc.innerHTML!="kura sonuc"){
        liste_sonuc.innerHTML="";
    }
    if (listekontrol == "liste goster") {
        alert("eleman ekle");
    } else {
        if(liste_sonuc.innerHTML=="kura sonuc"){
        liste_sonuc.innerHTML="";
    }
        for(var i=0;i<3;i++){
        kura = Math.floor(Math.random() * liste_tut.length);
        liste_sonuc.innerHTML+= "<span>" +liste_tut[kura]+"</span>";
        }

    }

}

function kura_cek_temizle() {
        liste_yaz.innerHTML = "liste goster";

}

function kura_yazdir(){
    alert(liste_sonuc.innerText);
}

function kura_temizle(){
    liste_sonuc.innerHTML="kura sonuc";
}