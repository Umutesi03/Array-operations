const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];

// step1 : Use push to add a new product:
products.push({name: "Desk",price:150,category: "Furniture"});

console.log(`Step2: Use find to get the details of the product named "Watch" and display them in the console.\n`)
let detailWatch = products.find(product => product.name === "Watch" );
console.log(detailWatch);
console.log("\n");

console.log(`Step3: Use map to create a new array of product names only.\n`)
let productsNames = products.map(product=>product.name);
console.log(productsNames +"\n");

console.log(`Step4: Use filter to get all products that cost more than 100.\n`)
let productsCostMore100 = products.filter(product => product.price >100);
console.log(productsCostMore100 ) ;
console.log("\n");

console.log(`Step5: Use forEach to display each product’s name and price in the format:\n`)
products.forEach(product => 
    console.log(`Product: ${product.name}, Price: $${product.price}`)
);
console.log("\n");

console.log(`Step6: Use reduce to calculate the total cost of all products in the array.\n`)
let totalCost = products.map(product => product.price).reduce((product,sum)=>sum+=product,0);

console.log(` The total cost of all products in array is ${totalCost} \n`);



let mainContent = document.getElementById("mainContent");

let ul = '<ul>';

products.forEach(product => {
  ul += `<li>Product: ${product.name}, Price: $${product.price}</li>`;
});
ul += '</ul>';

mainContent.insertAdjacentHTML("beforeend", ul);
