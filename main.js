var liste_al,liste_ekle,liste_topla=[];
var sayi=0,topla=0,sira=0,kura;

var liste_goster=document.querySelector("#liste_goster");
var kura_sonuc=document.querySelector("#kura_sonuc");

function liste_cek(){
    liste_al=document.querySelector("#kura_liste").value;
    liste_ekle=liste_al.split(",");
    if(liste_al==""){
        alert("listeye isim yaz...");
    }
    
    
    if(liste_al !=""){
    for(sayi=0; sayi<liste_ekle.length; sayi++){
        liste_topla[topla]=liste_ekle[sayi];
        topla++;
    }
     liste_goster.innerHTML="";   
    for(sira=0;sira<topla;sira++){
        liste_goster.innerHTML+="<span>"+liste_topla[sira]+"</span>";
    }    
    
}
 liste_al=document.querySelector("#kura_liste").value="";   
    
}

function liste_cek_temizle(){
    liste_al=document.querySelector("#kura_liste").value=""; 
}

function kura_cek(){
    
    
    
    if(liste_goster.innerHTML=="liste göster"){
        alert("listeye eleman gonder...");
    }else {
        
        kura_sonuc.innerHTML="";
        for(sayi=0;sayi<3;sayi++){
        kura=Math.floor(Math.random()*liste_topla.length);
          kura_sonuc.innerHTML+="<span>"+liste_topla[kura]+"</span>";  
        }
        
        
    }
    
    
    
}

function kura_cek_temizle(){
    liste_goster.innerHTML="liste göster";
    liste_topla=[];
    topla=0;
    
}

function kura_yazdir(){
    var sonuc= kura_sonuc.innerText;
    alert(sonuc);
}

function kura_temizle(){
    kura_sonuc.innerHTML="kura sonuc";
}








































/*


var kura_liste, liste_cek, liste_ekle, sayi, kura, liste_tut = [],
    tut = 0,
    sira = 0;

var liste_yaz = document.querySelector("#liste_goster");
var liste_sonuc = document.querySelector("#kura_sonuc");

function liste_cek() {

    kura_liste = document.querySelector("#kura_liste").value;
    liste_ekle = kura_liste.split(",");
    if (liste_ekle != "") {
        liste_yaz.innerHTML = "";
    }

    if (kura_liste != "") {
        for (sayi = 0; sayi < liste_ekle.length; sayi++) {
            
                liste_tut[tut] = liste_ekle[sayi];
                tut++; 
        }
            liste_yaz.innerHTML = "";
            
            for (sira = 0; sira < liste_tut.length; sira++) {
                liste_yaz.innerHTML += "<span>" + liste_tut[sira] + "</span>";
            }
        
    } else {
        alert("listeye isim yaz");
    }
   
    kura_liste = document.querySelector("#kura_liste").value = "";
}

function liste_cek_temizle() {
    kura_liste = document.querySelector("#kura_liste").value = "";
}

function kura_cek() {
    if (liste_sonuc.innerHTML != "kura sonuc") {
        liste_sonuc.innerHTML = "";
    }
    if (liste_yaz.innerHTML == "liste göster") {
        alert("eleman ekle");
    } else {
        if (liste_sonuc.innerHTML == "kura sonuc") {
            liste_sonuc.innerHTML = "";
        }
        for (var i = 0; i < 3; i++) {
            kura = Math.floor(Math.random() * liste_tut.length);
            liste_sonuc.innerHTML += "<span>" + liste_tut[kura] + "</span>";
        }

    }

}

function kura_cek_temizle() {
    liste_yaz.innerHTML = "liste göster";

}

function kura_yazdir() {
    alert(liste_sonuc.innerText);
}

function kura_temizle() {
    liste_sonuc.innerHTML = "kura sonuc";
}






*/