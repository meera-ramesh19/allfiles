onst { celsiusToFahrenheit, getBoilingPoint } = require("../");

describe("celsiusToFahrenheit()", () => {
  test("should return an error string if no value is inputted", () => {
    const actual = celsiusToFahrenheit();
    const expected = "No temperature provided.";
    expect(actual).toEqual(expected);
  });

  test("should convert values appropriately", () => {
    const actual = celsiusToFahrenheit(30);
    const expected = 86;
    expect(actual).toEqual(expected);
  });

  test("should convert from 0", () => {
    const actual = celsiusToFahrenheit(0);
    const expected = 32;
    expect(actual).toEqual(expected);
  });

  test("should convert negative values", () => {
    const actual = celsiusToFahrenheit(-40);
    const expected = -40;
    expect(actual).toEqual(expected);
  });
});

describe("getBoilingPoint()", () => {
  test("should return an error string if the input is incorrect", () => {
    const actual = getBoilingPoint("kelvin");
    const expected = "Incorrect unit entered.";
    expect(actual).toEqual(expected);
  });

  test("should return the boiling point for celsius", () => {
    const actual = getBoilingPoint("celsius");
    const expected = 100;
    expect(actual).toEqual(expected);
  });

  test("should return the boiling point for fahrenheit", () => {
    const actual = getBoilingPoint("fahrenheit");
    const expected = 212;
    expect(actual).toEqual(expected);
  });

  test("should return the boiling point for celsius despite casing", () => {
    const actual = getBoilingPoint("CELSIUS");
    const expected = 100;
    expect(actual).toEqual(expected);
  });

  test("should return the boiling point for fahrenheit despite casing", () => {
    const actual = getBoilingPoint("Fahrenheit");
    const expected = 212;
    expect(actual).toEqual(expected);
  });
});
