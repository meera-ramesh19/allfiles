/**
 * Increase the given tea's price by a dollar.
 * @param {Object} tea - An object that represents the tea.
 * @param {string} tea.name - The name of the tea.
 * @param {number} tea.priceInDollars - The price of the tea, in dollars.
 * @returns {number} The new price of the tea.
 */
 function increaseTeaPrice(tea) {
    return ++tea.priceInDollars;
  }
  
  /**
   * Removes the last item from a particular tea type's list.
   * @param {Object[]} teas - An array of all of the teas.
   * @param {string} teas[].name - The name of the tea.
   * @param {number} teas[].priceInDollars - The price of the tea, in dollars.
   * @param {string} teaType - The name of the tea type. (e.g. "Green")
   * @returns {string} - The name of the removed tea.
   */
  function removeLastTeaFromList(teas, teaType) {
    
    const typeKey = teaType.toLowerCase();
    return teas[typeKey].pop().name;
  }
  
  /**
   * Moves the first tea in a tea type's list to be the last tea.
   * @param {Object[]} teas - An array of all of the teas.
   * @param {string} teas[].name - The name of the tea.
   * @param {number} teas[].priceInDollars - The price of the tea, in dollars.
   * @param {string} teaType - The name of the tea type. (e.g. "Green")
   * @returns {Object[]} - The new list of teas for the given tea type.
   */
  function moveFirstTeaToBeLastTea(teas, teaType) {
       const typeKey = teaType.toLowerCase();
       const popped= teas[typeKey].shift()
        teas[typeKey].push(popped)
       return teas[typeKey]
  } 
  
  /**
   * Compares the quantity of available kinds of tea to each other.
   * @param {Object[]} teas - An array of all of the teas.
   * @param {string} teas[].name - The name of the tea.
   * @param {number} teas[].priceInDollars - The price of the tea, in dollars.
   * @param {string} teaType1 - Name of the first tea type.
   * @param {string} teaType2 - Name of the second tea type.
   * @returns {string} A response representing the comparison.
   */
  function compareAvailableKinds(teas, teaType1, teaType2) {
    const type1 = teas[teaType1.toLowerCase()];
    const type2 = teas[teaType2.toLowerCase()];
    let result = null;
    if (type1.length > type2.length) {
      result = `There are more ${teaType1} teas than ${teaType2} teas.`;
    } else if (type1.length < type2.length) {
      result = `There are more ${teaType2} teas than ${teaType1} teas.`;
    } else {
      result = `There are the same number of ${teaType1} teas and ${teaType2} teas.`;
    }
    return result;
  }
  
  /**
   * Compares the prices of two teas.
   * @param {Object} tea1 - An object that represents the tea.
   * @param {string} tea1.name - The name of the tea.
   * @param {number} tea1.priceInDollars - The price of the tea, in dollars.
   * @param {Object} tea2 - An object that represents the tea.
   * @param {string} tea2.name - The name of the tea.
   * @param {number} tea2.priceInDollars - The price of the tea, in dollars.
   * @returns {string} A response representing the comparison.
   */
  function comparePrices(tea1, tea2) {
    let result = null;
    if (tea1.priceInDollars > tea2.priceInDollars) {
      result = `${tea1.name} costs more than ${tea2.name}.`;
    } else if (tea1.priceInDollars < tea2.priceInDollars) {
      result = `${tea2.name} costs more than ${tea1.name}.`;
    } else {
      result = `${tea1.name} and ${tea2.name} have the same price.`;
    }
    return result;
  }
  
  // Do not change any code below this line.
  module.exports = {
    increaseTeaPrice,
    removeLastTeaFromList,
    moveFirstTeaToBeLastTea,
    compareAvailableKinds,
    comparePrices,
  };
  