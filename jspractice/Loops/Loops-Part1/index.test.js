const {
    oneTillDoneWhileLoop,
    oneTillDoneForLoop,
    doneToZeroWhileLoop,
    doneToZeroForLoop,
    fizzBuzzPart1,
    fizzBuzzPart2,
  } = require("../");
  
  describe("oneTillDoneWhileLoop", () => {
    test("returns an array with numbers from 1 till given number", () => {
      expect(oneTillDoneWhileLoop(3)).toEqual([1, 2, 3]);
      expect(oneTillDoneWhileLoop(5)).toEqual([1, 2, 3, 4, 5]);
    });
    test("is written with a while loop", () => {
      let funcString = oneTillDoneWhileLoop.toString();
      expect(funcString.includes("while")).toBe(true);
      expect(funcString.includes("for")).toBe(false);
    });
  });
  
  describe("oneTillDoneForLoop", () => {
    test("returns an array with numbers from 1 till given number", () => {
      expect(oneTillDoneForLoop(3)).toEqual([1, 2, 3]);
      expect(oneTillDoneForLoop(5)).toEqual([1, 2, 3, 4, 5]);
    });
    test("is written with a for loop", () => {
      let funcString = oneTillDoneForLoop.toString();
      expect(funcString.includes("while")).toBe(false);
      expect(funcString.includes("for")).toBe(true);
    });
  });
  
  describe("doneToZeroWhileLoop", () => {
    test("returns an array with numbers from number to zero (exclusive)", () => {
      expect(doneToZeroWhileLoop(3)).toEqual([3, 2, 1]);
      expect(doneToZeroWhileLoop(5)).toEqual([5, 4, 3, 2, 1]);
    });
    test("is written with a while loop", () => {
      let funcString = doneToZeroWhileLoop.toString();
      expect(funcString.includes("while")).toBe(true);
      expect(funcString.includes("for")).toBe(false);
    });
  });
  
  describe("doneToZeroForLoop", () => {
    test("returns an array with numbers from number to zero (exclusive)", () => {
      expect(doneToZeroForLoop(3)).toEqual([3, 2, 1]);
      expect(doneToZeroForLoop(5)).toEqual([5, 4, 3, 2, 1]);
    });
    test("is written with a for loop", () => {
      let funcString = doneToZeroForLoop.toString();
      expect(funcString.includes("while")).toBe(false);
      expect(funcString.includes("for")).toBe(true);
    });
  });
  
  describe("fizzBuzzPart1", () => {
    test("returns an array of length 100", () => {
      expect(fizzBuzzPart1().length).toBe(100);
    });
    test("returns correct array", () => {
      const arr = Array(100)
        .fill(null)
        .map((_, i) => {
          if (!((i + 1) % 3)) return "Fizz";
          else if (!((i + 1) % 5)) return "Buzz";
          else return i + 1;
        });
      expect(fizzBuzzPart1()).toEqual(arr);
    });
  });
  describe("fizzBuzzPart2", () => {
    test("returns an array of length 100", () => {
      expect(fizzBuzzPart2().length).toBe(100);
    });
    test("returns correct array", () => {
      const arr = Array(100)
        .fill(null)
        .map((_, i) => {
          if (!((i + 1) % 3) && !((i + 1) % 5)) return "FizzBuzz";
          else if (!((i + 1) % 3)) return "Fizz";
          else if (!((i + 1) % 5)) return "Buzz";
          else return i + 1;
        });
      expect(fizzBuzzPart2()).toEqual(arr);
    });
  });
  