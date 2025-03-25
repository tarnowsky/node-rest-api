const items_price = document.querySelectorAll('.items');
const shipping_price = document.querySelector('.shipping');
const before_tax_price = document.querySelector('.before-tax');
const estimated_tax_price = document.querySelector('.tax');
const total_price = document.querySelector('.item-price-total');



let items_priceF = 0;
items_price.forEach(item => {
    items_priceF += Number.parseFloat(item.textContent.slice(1));
})

const shipping_priceF = Number.parseFloat(shipping_price.textContent.slice(1));
const before_tax_priceF = items_priceF + shipping_priceF;
const  estimated_taxF = Math.round((before_tax_priceF * 0.1) * 100) / 100;

before_tax_price.innerHTML = '$' + before_tax_priceF;
estimated_tax_price.innerHTML = '$' + estimated_taxF;
total_price.innerHTML = '$' + (estimated_taxF + before_tax_priceF);

let celc_val = document.querySelector('.celc-val');
celc_val = Number.parseFloat(celc_val.innerHTML);
let fahr_val = document.querySelector('.fahr-val');
fahr_val.innerHTML = (celc_val * 9 / 5) + 32;
