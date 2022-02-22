/**
 * Converts celsius to fahrenheit.
 * @param {number} celsius - A temperature in celsius.
 * @returns {number} The temperature converted to fahrenheit.
 */
 function celsiusToFahrenheit(temperature) {
    let result=''
    if (temperature === undefined) {
       result = "No temperature provided.";
    } else {
       result = temperature * 1.8 + 32;
    }
  
    return result;
  }
  
  /**
   * Returns the boiling point of certain units.
   * @param {string} unit - A unit of measurement for temperature.
   * @returns {*} Either the boiling point of celsius or fahrenheit, or an error message.
   */
  function getBoilingPoint(unit) {
    let result=''
    unit = unit.toLowerCase();
  
    if (unit === "celsius") {
       result = 100;
    } else if (unit === "fahrenheit") {
      result = 212;
    } else {
       result = "Incorrect unit entered.";
    }
  
    return result;
  }
  
  module.exports = {
    celsiusToFahrenheit,
    getBoilingPoint,
  };
  