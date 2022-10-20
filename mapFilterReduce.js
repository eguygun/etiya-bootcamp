let urunler = [
    {fiyat:100, ad:"ürün1",discount:true,oran :15},
    {fiyat:150, ad:"ürün2",discount:false,oran: 0},
    {fiyat:200, ad:"ürün3",discount:true,oran: 2.5},
];

let filtrelenmisurunler = urunler.filter(urun=>{
    return urun.fiyat > 160;
});

console.log(filtrelenmisurunler)


// map -> forEach ile aynı FARKI map yeni bir array oluşturur
let maplenmisArray = urunler.map(urun =>{
    return {fiyat : urun.fiyat*2,
            ad: urun.ad,
            indirim: urun.discount,
            oran: urun.oran,
        };

});
console.log("map edilen array",maplenmisArray);

let newArray = urunler.map(urun =>{
    return{
        fiyat :
        urun.indirim ===true 
        ? urun.fiyat - (urun.fiyat*urun.oran/100)
        :urun.fiyat,
    ad: urun.ad,
    indirimTutari: (urun.fiyat*urun.oran/100),
    };
});
console.log(newArray);


//full eng and do the requested conditions
//requested conditions
// Sepetteki tüm ürünleri gez, adet*unitPrice ile toplam fiyatı bul
// Kullanıcıya göster {totalPrice:300,totalProductCount:6}
let cart = [
    {id:1,productname:"product1",quantity:3,unitPrice:3000},
    {id:2,productname:"product2",quantity:2,unitPrice:1000},
    {id:3,productname:"product3",quantity:1,unitPrice:500},
]

//totalproductcount and totalprice
let totalofBoth = { totalprice: 0, totalquantitycount: 0 };
cart.forEach((cart) => {
    totalofBoth.totalprice += cart.quantity*cart.unitPrice;
    totalofBoth.totalquantitycount += cart.quantity;
});
console.log(totalofBoth);

//reduce will be covered on thursday

let cartTotal = cart.reduce(
    (acc,cartItem) => acc + cartItem.quantity * cartItem.unitPrice,0
);

let cartQuantityTotal = cart.reduce((acc, cartItem) => 
acc + cartItem.quantity, 0,
);
console.log(`Toplam Sepet tutarı: ${cartTotal} Sepette toplam ${cartQuantityTotal} adet`
);
