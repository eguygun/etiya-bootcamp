let products = [
    {unitPrice:100, productName:"ürün1",discount:true,rate :15},
    {unitPrice:150, productName:"ürün2",discount:false,rate: 0},
    {unitPrice:200, productName:"ürün3",discount:true,rate: 2.5},
];

let searchText = "ürün";

let product = products.filter(p => p.productName.includes(searchText));

//console.log(`Arama sonucu ${product.length}`);

function getProductByName(productName)
{
    let productsResult = products.filter(p => p.productName.includes(productName));
    console.log(`Arama sonucunda ${productsResult.length} adet ürüne ulaşıldı`);
};

getProductByName("ürün");
getProductByName("1");
getProductByName("adasfas");
getProductByName("3");


const getProductByUnitPrice = (unitPrice) =>{
    console.log("getProductByUnitPrice fonksiyonu çalıştı");
};
getProductByUnitPrice()