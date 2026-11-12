var product1Price = +prompt("Enyter the price of Product 1 ")

var product2Price = +prompt("Enyter the price of Product 2 ")

var product3Price = +prompt("Enyter the price of Product 3 ")

var totalBill = product1Price + product2Price + product3Price

var discount = totalBill * 0.10;

console.log("Product 1 :" + product1Price)

console.log("Product 2 :" + product2Price)

console.log("Product 3 :" + product3Price)

console.log("Total bill :", totalBill)

console.log("Discount (10%) :", discount)

console.log("Final Price :",totalBill - discount);

