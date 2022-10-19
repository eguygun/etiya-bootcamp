console.log("Statements Start");


//KOŞUL BLOKLARI
//true - false
//1 eşittir 1
//mantıksal operatör
console.log(1==1);
console.log(1!=1);
console.log(1>=1); // > , >= , =<, <

// == sadece değer kontrolü yapar
// === tip ve değer kontrolü yapar
console.log(1 == "1")
console.log(1 === "1")
console.log(1 !== "1")
//condition
if(1 != 1){
    console.log("If içerisi çalıştı..")
}
else if (2 == 2){
    console.log("Else if içerisi çalıştı..")
}
else{
    console.log("Else içerisi çalıştı..")
}

let DolarKurDun = 18.74;
let DolarKurBugun = 18.8;

if (DolarKurBugun > DolarKurDun){
    console.log("fazla")
}
else{
    console.log("az")
}

// ternacy operatör
// tek satırlık if - one line if statement
// koşul ? kod1 
//kod1 => koşul true
//kod2 => koşul false 
DolarKurBugun >= DolarKurDun ? console.log("dolar kur yükselişte"): console.log("dolar kur yükselişte")

//switch-case

let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) {
    case "USD":
        toplamBakiye *= 17;
        break;
    case "EUR":
        toplamBakiye *= 20;
        break;
    case "TL":
        break;
    default:
        console.warn("Bilinmedik kur türü");
        break;
}
console.log("Toplam bakiye:  ", toplamBakiye);

let secilenKredi = 0;
let KrediTutarı = 150000;

switch (secilenKredi) {
    case 0:
        KrediTutarı *= 2;
        break;
    case 1:
        KrediTutarı *= 2.5;
        break;
    case 2:
        KrediTutarı *= 1.5;
        break;
    default:
        console.error("Bilinmedik kredi türü");
        break;
}
console.log("Kredi tutarınız:  ", KrediTutarı);

//girilen sayı çift ise "çift" tek is "tek" yazalım

let sayı = 20;

if  (sayı % 2 ==0){
    console.log("sayı çift");
}

else {
    console.log("sayı tek");
}
