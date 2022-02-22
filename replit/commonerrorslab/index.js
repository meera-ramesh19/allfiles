/**
 * Checks for whether or not the game has the specific tag.
 * @param {Object} game - An object representing a specific game.
 * @param {string} game.name - The name of the game.
 * @param {number} game.cost - The game's price.
 * @param {strings[]} game.tags - Tags or categories associated with the game.
 * @param {string} tag - A desired tag of game.
 * @returns {boolean} Whether or not the given game has the tag.
 */
 function gameHasTag(game, tag) {
    return game.tags.includes(tag);
     
   }
   
   /**
    * Formats the game's price.
    * @param {Object} game - An object representing a specific game.
    * @param {string} game.name - The name of the game.
    * @param {number} game.cost - The game's price.
    * @param {strings[]} game.tags - Tags or categories associated with the game.
    * @returns {string} A formatted version of the price.
    */
   function formatGamePrice(game) {
     if (!game.cost) {
       return "Free";
     }
     return`$${game.cost.toFixed(2)}`;
     
   }
   
   /**
    * Formats the game's tags into a human readable string.
    * @param {Object} game - An object representing a specific game.
    * @param {string} game.name - The name of the game.
    * @param {number} game.cost - The game's price.
    * @param {strings[]} game.tags - Tags or categories associated with the game.
    * @returns {string} A formatted version of the tags.
    */
   function formatGameTags(game) {
     const lastTag = game.tags.pop();
     const tags = `${game.tags.join(", ")} and ${lastTag}`;
     return tags;
   }
   
   /**
    * Checks whether or not the game is affordable given a specific amount.
    * @param {Object} game - An object representing a specific game.
    * @param {string} game.name - The name of the game.
    * @param {number} game.cost - The game's price.
    * @param {strings[]} game.tags - Tags or categories associated with the game.
    * @param {number} maximumAmountToSpend - The most that can be spent on a game.
    * @returns {boolean} Whether or not the game's cost is at or under the given amount.
    */
   function canAfford(game, maximumAmountToSpend) {
     return game.cost <= maximumAmountToSpend;
   }
   
   /**
    * Prints a description of the game.
    * @param {Object} game - An object representing a specific game.
    * @param {string} game.name - The name of the game.
    * @param {number} game.cost - The game's price.
    * @param {strings[]} game.tags - Tags or categories associated with the game.
    * @returns {string} The game description.
    */
   function getGameDescription(game) {
     const price = formatGamePrice(game);
     const tags = formatGameTags(game);
     const result = `${game.name} is a ${tags} game that is ${price}.`;
     return result;
   
   
   }
   
   module.exports = {
     gameHasTag,
     formatGamePrice,
     formatGameTags,
     canAfford,
     getGameDescription,
   };
   