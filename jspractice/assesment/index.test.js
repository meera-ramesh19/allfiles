const {
  logAllNames,
  logNamesOfOutOfStockProducts,
  addPriceInDollarsKeyToProducts,
} = require("../");

let products;
beforeEach(() => {
  products = [
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
});

describe("logAllNames()", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  test("should use a `for` loop but not other loops", () => {
    const text = logAllNames.toString();

    const hasFor = !!text.match(/for(\s*\(|\()/g);
    expect(hasFor).toBeTruthy();

    const hasOf = !!text.match(/for.*of.*\)/g);
    expect(hasOf).not.toBeTruthy();

    const hasWhile = !!text.match(/while(\s*\(|\()/g);
    expect(hasWhile).not.toBeTruthy();
  });

  test("should log all of the names", () => {
    logAllNames(products);
    expect(console.log).toHaveBeenCalledWith("REI Co-op Flash 18 Pack");
    expect(console.log).toHaveBeenCalledWith("Osprey Ultralight Dry Sack");
    expect(console.log).toHaveBeenCalledWith("Patagonia Refugio 28L Pack");
    expect(console.log).toHaveBeenCalledWith("Fjallraven Ulvo 23 Pack");
  });

  test("should work with different products", () => {
    const alternativeProducts = [
      { name: "A", brand: "A" },
      { name: "B", brand: "B" },
      { name: "C", brand: "C" },
    ];
    logAllNames(alternativeProducts);

    expect(console.log).toHaveBeenCalledWith("A A");
    expect(console.log).toHaveBeenCalledWith("B B");
    expect(console.log).toHaveBeenCalledWith("C C");
  });
});

describe("logNamesOfOutOfStockProducts()", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  test("should use a `for...of` loop but not other loops", () => {
    const text = logNamesOfOutOfStockProducts.toString();

    const hasFor = !!text.match(/for(\s*\(|\()/g);
    expect(hasFor).toBeTruthy();

    const hasOf = !!text.match(/for.*of.*\)/g);
    expect(hasOf).toBeTruthy();

    const hasWhile = !!text.match(/while(\s*\(|\()/g);
    expect(hasWhile).not.toBeTruthy();
  });

  test("should log all out of stock product names", () => {
    logNamesOfOutOfStockProducts(products);

    expect(console.log).not.toHaveBeenCalledWith("Flash 18 Pack");
    expect(console.log).not.toHaveBeenCalledWith("Ultralight Dry Sack");
    expect(console.log).not.toHaveBeenCalledWith("Refugio 28L Pack");
    expect(console.log).toHaveBeenCalledWith("Ulvo 23 Pack");
  });
});

describe("addPriceInDollarsKeyToProducts()", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  test("should add a key of priceInDollars to all products in the array", () => {
    const actual = addPriceInDollarsKeyToProducts(products);
    // REI Co-op Flash 18 Pack
    const flash = actual[0];
    expect(flash.priceInDollars).toBeTruthy();

    // Osprey Ultralight Dry Sack
    const osprey = actual[1];
    expect(osprey.priceInDollars).toBeTruthy();

    // Patagonia Refugio 28L Pack
    const patagonia = actual[2];
    expect(patagonia.priceInDollars).toBeTruthy();

    // Fjallraven Ulvo 23 Pack
    const ulvo = actual[3];
    expect(ulvo.priceInDollars).toBeTruthy();
  });

  test("should correctly format all dollar amounts as strings", () => {
    const actual = addPriceInDollarsKeyToProducts(products);

    // REI Co-op Flash 18 Pack
    const flash = actual[0];
    expect(flash.priceInDollars).toEqual("$39.95");

    // Osprey Ultralight Dry Sack
    const osprey = actual[1];
    expect(osprey.priceInDollars).toEqual("$25.00");

    // Patagonia Refugio 28L Pack
    const patagonia = actual[2];
    expect(patagonia.priceInDollars).toEqual("$89.00");

    // Fjallraven Ulvo 23 Pack
    const ulvo = actual[3];
    expect(ulvo.priceInDollars).toEqual("$125.00");
  });
});
