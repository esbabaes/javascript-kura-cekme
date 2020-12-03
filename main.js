var liste_al,liste_ekle,liste_topla=[];
var sayi=0,topla=0,kura;


var liste_goster=document.querySelector("#liste_goster");
var kura_sonuc=document.querySelector("#kura_sonuc");

function liste_cek(){
   liste_al=document.querySelector("#kura_liste").value;
   liste_ekle=liste_al.split(",");
    
   if(liste_al==""){
       alert("listeye eleman ekle...");
   }else{
       liste_goster.innerHTML="";
       for(sayi=0;sayi<liste_ekle.length;sayi++){
           liste_topla[topla]=liste_ekle[sayi];
           topla++;
       }
       for(topla=0;topla < liste_topla.length;topla++){
           liste_goster.innerHTML+= "<span>"+liste_topla[topla]+"</span>";
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
    }else{
        kura_sonuc.innerHTML="";
       for(sayi=0;sayi<3;sayi++){
           kura=Math.floor(Math.random()*liste_topla.length);
           kura_sonuc.innerHTML+= "<span>" +liste_topla[kura]+"</span>";
           
       }
        
    }
}

function kura_cek_temizle(){
    liste_goster.innerHTML="liste göster";
    liste_topla=[];
    topla=0;
}


function kura_yazdir(){
    var sonuc =kura_sonuc.innerText;
    alert(sonuc);
}

function kura_yazdir_temizle(){
    kura_sonuc.innerHTML="kura sonuc";
}


