console.log("Merhaba");

//yorum satırı, kod çalıştırılırken dikkate alınmaz

//değişkenler türleri

// değişken tanımlama kodu var

// Javascript tip güvenli DEĞİLDİR
// TYPESCRIPT tip güvenldr angulara geçerken bu kullanılacak
let DolarKur = 10;
//DolarKur = 20; //set etmek
console.log(DolarKur);

//string
let EuroKur = "15";
console.log(EuroKur);

//matematiksel operatör
console.log(DolarKur +5);
console.log(EuroKur + 10); //! string olduğu için yanlış çalıştı

//var keywordunu unut!!
//let

// boolean = true ya da false
let euroYukselis = true;
console.log(euroYukselis);

//number ondlaıklı sayı
DolarKur = 12.5;
console.log(DolarKur);

//koleksiyonlar
//array = dizi
let krediler = ["ihtiyaç", "taşıt", "konut"];
console.log(krediler);
console.log(krediler[1]);

//object
//json - Javascript Object Notation
let odemeBilgileri = {
    aylikOdeme: 415.53,
    faizOrani: 1.89,
    toplamGeriOdeme:14950.42,
    krediTipi:"İhtiyaç Kredisi"
};
console.log(odemeBilgileri);