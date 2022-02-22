const {
    returnHelloName,
    sumThree,
    bothNumbers,
    eitherNumber,
    numbersEqual,
    numbersNotEqual,
    bothEven,
  } = require("../");
  
  describe("returnHelloName()", () => {
    test("Returns a string", () => {
      expect(returnHelloName()).toBeDefined();
      expect(typeof returnHelloName("James")).toBe("string");
    });
  
    test("Returns the correct string", () => {
      expect(returnHelloName("Anne")).toBe("Hello Anne!");
      expect(returnHelloName("Jamal")).toBe("Hello Jamal!");
    });
  });
  
  describe("sumThree()", () => {
    test("does not return undefined", () => {
      expect(sumThree(1, 2, 3)).toBeDefined();
      expect(sumThree(9, 9, 9)).toBeDefined();
    });
  
    test("returns a number", () => {
      expect(typeof sumThree(100, 5, 1)).toBe("number");
      expect(typeof sumThree(1, 1, 1)).toBe("number");
    });
  
    test("returns the correct answer", () => {
      expect(sumThree(9, 9, 9)).toBe(27);
      expect(sumThree(8, 1, 2)).toBe(11);
    });
  });
  
  describe("bothNumbers()", () => {
    test("does not return undefined", () => {
      expect(bothNumbers(5, 10)).toBeDefined();
      expect(bothNumbers(55, 30)).toBeDefined();
    });
    test("returns the correct answer", () => {
      expect(bothNumbers(11, 49)).toBe(true);
      expect(bothNumbers("what", 49)).toBe(false);
      expect(bothNumbers("what", "cat")).toBe(false);
    });
  });
  
  describe("eitherNumber()", () => {
    test("does not return undefined", () => {
      expect(eitherNumber(19, 12)).toBeDefined();
      expect(eitherNumber(22, 3)).toBeDefined();
    });
    test("returns the correct answer", () => {
      expect(eitherNumber("19", 19)).toBe(true);
      expect(eitherNumber(19, "19")).toBe(true);
      expect(eitherNumber("19", "19")).toBe(false);
      expect(eitherNumber(true, "19")).toBe(false);
    });
  });
  
  describe("numbersEqual()", () => {
    test("does not return undefined", () => {
      expect(numbersEqual(1, 1)).toBeDefined();
      expect(numbersEqual(55, 1)).toBeDefined();
    });
    test("returns the correct answer", () => {
      expect(numbersEqual(5, 5)).toBe(true);
      expect(numbersEqual(1, 5)).toBe(false);
    });
  });
  
  describe("numbersNotEqual()", () => {
    test("does not return undefined", () => {
      expect(numbersNotEqual(1, 1)).toBeDefined();
      expect(numbersNotEqual(5, 2)).toBeDefined();
    });
    test("returns the correct answer", () => {
      expect(numbersNotEqual(5, 2)).toBe(true);
      expect(numbersNotEqual(2, 2)).toBe(false);
    });
  });
  
  describe("bothEven()", () => {
    test("does not return undefined", () => {
      expect(bothEven(4, 2)).toBeDefined();
      expect(bothEven(3, 3)).toBeDefined();
      expect(bothEven(3, 2)).toBeDefined();
    });
    test("returns the correct answer", () => {
      expect(bothEven(3, 2)).toBe(false);
      expect(bothEven(4, 2)).toBe(true);
      expect(bothEven(2, 5)).toBe(false);
      expect(bothEven(3, 5)).toBe(false);
    });
  });
  