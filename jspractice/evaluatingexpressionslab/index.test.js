const {
    increaseTeaPrice,
    removeLastTeaFromList,
    moveFirstTeaToBeLastTea,
    compareAvailableKinds,
    comparePrices,
  } = require("../");
  
  // Example input
  let teas;
  beforeEach(() => {
    teas = {
      black: [
        { name: "Earl Grey", priceInDollars: 7 },
        { name: "Darjeeling", priceInDollars: 8 },
        { name: "Lapsang Souchong", priceInDollars: 10 },
      ],
      dark: [{ name: "Golden Flower Brick Tea", price: 16 }],
      green: [
        { name: "Dragon Well", priceInDollars: 20 },
        { name: "Genmaicha", priceInDollars: 12 },
        { name: "Sencha", priceInDollars: 11 },
      ],
      oolong: [{ name: "Rishi Bao Zhong", priceInDollars: 8 }],
      white: [
        { name: "Silver Needle", priceInDollars: 58 },
        { name: "White Peony", priceInDollars: 34 },
      ],
      yellow: [{ name: "Golden Dragon", priceInDollars: 19 }],
    };
  });
  
  describe("increaseTeaPrice()", () => {
    test("should increase the price of a tea by 1", () => {
      expect(increaseTeaPrice(teas.black[0])).toEqual(8);
      expect(increaseTeaPrice(teas.green[1])).toEqual(13);
      expect(increaseTeaPrice(teas.oolong[0])).toEqual(9);
    });
  });
  
  describe("removeLastTeaFromList()", () => {
    test("should remove the last tea from a list and return the name of the removed tea", () => {
      expect(removeLastTeaFromList(teas, "Black")).toEqual("Lapsang Souchong");
      expect(removeLastTeaFromList(teas, "Green")).toEqual("Sencha");
      expect(removeLastTeaFromList(teas, "Green")).toEqual("Genmaicha");
      expect(removeLastTeaFromList(teas, "Yellow")).toEqual("Golden Dragon");
    });
  });
  
  describe("moveFirstTeaToBeLastTea()", () => {
    test("should remove the first tea from the list and add it to the end of the list", () => {
      expect(moveFirstTeaToBeLastTea(teas, "Black")).toEqual([
        { name: "Darjeeling", priceInDollars: 8 },
        { name: "Lapsang Souchong", priceInDollars: 10 },
        { name: "Earl Grey", priceInDollars: 7 },
      ]);
      expect(moveFirstTeaToBeLastTea(teas, "Green")).toEqual([
        { name: "Genmaicha", priceInDollars: 12 },
        { name: "Sencha", priceInDollars: 11 },
        { name: "Dragon Well", priceInDollars: 20 },
      ]);
      expect(moveFirstTeaToBeLastTea(teas, "Green")).toEqual([
        { name: "Sencha", priceInDollars: 11 },
        { name: "Dragon Well", priceInDollars: 20 },
        { name: "Genmaicha", priceInDollars: 12 },
      ]);
      expect(moveFirstTeaToBeLastTea(teas, "Dark")).toEqual([
        { name: "Golden Flower Brick Tea", price: 16 },
      ]);
    });
  });
  
  describe("compareAvailableKinds()", () => {
    test("should return an appropriate string depending on how the two tea types' lists compare", () => {
      expect(compareAvailableKinds(teas, "Black", "Dark")).toEqual(
        "There are more Black teas than Dark teas."
      );
      expect(compareAvailableKinds(teas, "Oolong", "White")).toEqual(
        "There are more White teas than Oolong teas."
      );
      expect(compareAvailableKinds(teas, "Dark", "Yellow")).toEqual(
        "There are the same number of Dark teas and Yellow teas."
      );
    });
  });
  
  describe("comparePrices()", () => {
    test("should return an appropriate string depending on how the two teas' prices compare", () => {
      expect(comparePrices(teas.white[0], teas.oolong[0])).toEqual(
        "Silver Needle costs more than Rishi Bao Zhong."
      );
      expect(comparePrices(teas.yellow[0], teas.green[0])).toEqual(
        "Dragon Well costs more than Golden Dragon."
      );
      expect(comparePrices(teas.black[1], teas.oolong[0])).toEqual(
        "Darjeeling and Rishi Bao Zhong have the same price."
      );
    });
  });
  