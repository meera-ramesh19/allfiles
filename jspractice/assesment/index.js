*
  You may use the following products array to test your functions inside of this file. This is the same array of products that is used in the tests.

  Note that if you invoke your functions in this file, the output from your functions will show in the console to the right. They will show up first, before the tests run.
*/
const products = [
  {
    id: "o8HTX2dbn",
    name: "Flash 18 Pack",
    brand: "REI Co-op",
    priceInCents: 3995,
    sizes: null,
    inStock: true,
    colors: ["Black", "Castlerock", "Cinnamon Stick", "Deep Marine"],
  },
  {
    id: "jxCeWz7hy",
    name: "Ultralight Dry Sack",
    brand: "Osprey",
    priceInCents: 2500,
    sizes: ["30L", "20L", "12L", "6L"],
    inStock: true,
    colors: ["Electric Lime", "Shadow Grey", "Tropical Teal", "Poppy Orange"],
  },
  {
    id: "IJK8vIUxG",
    name: "Refugio 28L Pack",
    brand: "Patagonia",
    priceInCents: 8900,
    sizes: null,
    inStock: true,
    colors: [
      "Black",
      "Forge Grey",
      "Classic Navy",
      "Mojave Khaki",
      "Smolder Blue",
    ],
  },
  {
    id: "mIqVMUzn5",
    name: "Ulvo 23 Pack",
    brand: "Fjallraven",
    priceInCents: 12500,
    sizes: null,
    inStock: false,
    colors: ["Black", "Red Gold", "Mountain Blue"],
  },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Logs out the name of all products with the brand prefixed to the front.
 * @param {Object[]} products - An array of objects, representing each product. See the instructions and tests for a more detailed breakdown of what each object has.
 *
 * NOTE: You must use a `for` loop for this function.
 *
 * EXAMPLE
 * ------------------
 * logAllNames(products);
 * //> REI Co-op Flash 18 Pack
 * //> Osprey Ultralight Dry Sack
 * //> Patagonia Refugio 28L Pack
 * //> Fjallraven Ulvo 23 Pack
 */
function logAllNames(products) {
  for(let i = products.length - 1; i >= 0; i--){
    console.log(products[i]["brand"] + " " + products[i]["name"]);
  }
 
}



//logAllNames(products)
/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Logs out the name of all products which are out of stock.
 * @param {Object[]} products - An array of objects, representing each product. See the instructions and tests for a more detailed breakdown of what each object has.
 *
 * NOTE: You must use a `for...of` loop for this function.
 *
 * EXAMPLE
 * ------------------
 * logNamesOfOutOfStockProducts(products);
 * //> Ulvo 23 Pack
 */
function logNamesOfOutOfStockProducts(products) {
  for(product of products){
    if(product['inStock']===false){
      console.log(`${product['name']}`)
    }
  }
  
}

//logNamesOfOutOfStockProducts(products)
/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Add a `priceInDollars` key to each product in the `products` array.
 * @param {Object[]} products - An array of objects, representing each product. See the instructions and tests for a more detailed breakdown of what each object has.
 * @returns {Object[]} All of the products.
 *
 * NOTE: You may use whatever type of loop you like to solve this problem.
 *
 * NOTE: This function should return the entire `products` array, not log.
 * 
 * EXAMPLE
 * ------------------
 * const result = addPriceInDollarsKeyToProducts(products);
 * console.log(result[0].priceInDollars); //> $39.95
 * console.log(result[1].priceInDollars); //> $25.00
 * console.log(result[2].priceInDollars); //> $89.00
 * console.log(result[3].priceInDollars); //> $125.00
 */
function addPriceInDollarsKeyToProducts(products) {
  
  for(product of products){
    let cents=product['priceInCents']/100
    
    product['priceInDollars']=`$${cents.toFixed(2)}`
  }
  return products
}


// addPriceInDollarsKeyToProducts(products)
// Do not change any code below this line.
module.exports = {
  logAllNames,
  logNamesOfOutOfStockProducts,
  addPriceInDollarsKeyToProducts,
};
