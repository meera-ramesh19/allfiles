# Early JavaScript Assessment

This challenge is designed to assess the JavaScript skills you have gained so far. This assessment is _not_ a requirement for passing the first gate

## Learning Objectives Assessed

The following learning objectives will be assessed in this assessment:

- Log expressions and values using `console.log()`.
- Create and assign values to variables.
- Use arithmetic operators to build simple mathematical equations.
- Represent logical assertions using `===`, `&&`, `||`, and `!`.
- Conditionally run code based on values and expressions.
- Create functions with parameters using the function declaration syntax.
- Return values from functions.
- Interpret JSDoc function comments.
- Interpret test output in order to take actionable steps in code.
- Access elements in an array through bracket notation.
- Access values in an object through bracket and dot notation.
- Update values in an object with bracket and dot notation.
- Differentiate between arrays and objects.
- Manipulate numbers with common methods and tools.
- Write a `for` loop with a variable number of iterations.
- Write `for...of` loops to iterate over arrays.

## Instructions

You will need to write three functions that require you to make use of loops, conditionals, and logic. To complete each function, follow the examples below, the tests, and the JSDoc comments.

### Data Structure

Each function makes use of a `products` array, that contains a number of objects. The entire array is included below.

```js
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
```

The fields for each product is as follows:

- **id**: A unique identifier for each product.
- **name**: The name of the product.
- **brand**: The product's brand.
- **priceInCents**: The cost of product, in cents.
- **sizes**: Either `null`, if the product is "one-size-fits-all", or an array of sizes for the product.
- **inStock**: Whether or not the product is currently in stock.
- **colors**: An array of colors the product is available in.

### Running your code

A `products` array is at the top of the `index.js` file. If you like, you can test your functions by calling them in the `index.js` file. Note that if you invoke your functions in the `index.js` file, the output from your functions will show in the console. They will show up first, before the tests run.

### Tests

Two of these functions require that you _log_ out values, with `console.log()`. For those functions, in the tests you will see `.toHaveBeenCalledWith()`. This is a check for whether or not `console.log()` has been called with a particular value as the argument.

When you log out the values, you should log each out individually. For example, take a look at the code below.

```js
const numbers = [10, 20, 30];
```

If you were asked to log out all of the values above individually, three statements would show in the console:

```
> 10
> 20
> 30
```

## Function Descriptions & Examples

Each function's purpose is described below and in the tests. Certain functions will need to be written using certain kinds of loops. Take note of these restrictions in the `index.js` file.

### logAllNames()

This function should _log_ out all of the names of the products. The product's `brand` should be put in front of the name.

#### Example

```js
logAllNames(products);
//> REI Co-op Flash 18 Pack
//> Osprey Ultralight Dry Sack
//> Patagonia Refugio 28L Pack
//> Fjallraven Ulvo 23 Pack
```

Each of the products should be printed, with the brand in front of the name of the product.

### logNamesOfOutOfStockProducts()

This function should log _only_ the names of products that are _out of stock._

#### Example

```js
logNamesOfOutOfStockProducts(products);
//> Ulvo 23 Pack
```

Only the "Ulvo 23 Pack" is out of stock.

### addPriceInDollarsKeyToProducts()

This function will add a new key to each of the products in the `products` array. That key will be `priceInDollars` and will have a string value that represents the `priceInCents` as dollars.

To calculate the price in dollars, divide the `priceInCents` value by 100. Then, format the result as a string with a dollar symbol (i.e. `$`) prefixing the amount. The final amount should have two digits after the decimal place.

Once you have made the updates to each object, return the _entire `products` array._

> **Hint:** Remember that `.toFixed()` can help you transform numbers into strings with a certain number of digits after the decimal place.

#### Example

```js
addPriceInDollarsKeyToProducts(products);
/*
  [
    {
      id: "o8HTX2dbn",
      name: "Flash 18 Pack",
      brand: "REI Co-op",
      priceInCents: 3995,
      priceInDollars: "$39.95"
      ...
    },
    {
      id: "jxCeWz7hy",
      name: "Ultralight Dry Sack",
      brand: "Osprey",
      priceInCents: 2500,
      priceInDollars: "$25.00"
      ...
    },
    ...
  ]
*/
```
