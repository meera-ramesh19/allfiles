const {
    gameHasTag,
    formatGamePrice,
    formatGameTags,
    canAfford,
    getGameDescription,
  } = require("../");
  
  let games;
  beforeEach(() => {
    games = [
      {
        name: "Rocket League",
        cost: 0,
        tags: ["Sports", "Racing"],
      },
      {
        name: "Star Wars: Battlefront II",
        cost: 39.99,
        tags: ["Action", "Shooter", "Adventure"],
      },
      {
        name: "Sid Meier's Civilization VI",
        cost: 59.5,
        tags: ["Turn-Based", "Strategy"],
      },
    ];
  });
  
  describe("gameHasTag()", () => {
    test("should return true if the inputted game has the inputted tag", () => {
      const game = games[0];
      const actual = gameHasTag(game, "Sports");
      expect(actual).toEqual(true);
    });
  
    test("should return false if the inputted game has the inputted tag", () => {
      const game = games[0];
      const actual = gameHasTag(game, "Strategy");
      expect(actual).toEqual(false);
    });
  });
  
  describe("formatGamePrice()", () => {
    test("should format the price for a game", () => {
      const game = games[1];
      const actual = formatGamePrice(game);
      const expected = "$39.99";
      expect(actual).toEqual(expected);
    });
  
    test("should format the price for games with varying decimal places", () => {
      const game = games[2];
      const actual = formatGamePrice(game);
      const expected = "$59.50";
      expect(actual).toEqual(expected);
    });
  
    test("should return 'Free' if there is no cost", () => {
      const game = games[0];
      const actual = formatGamePrice(game);
      const expected = "Free";
      expect(actual).toEqual(expected);
    });
  });
  
  describe("formatGameTags()", () => {
    test("formats three or more tags with a human readable string", () => {
      const game = games[1];
      const actual = formatGameTags(game);
      const expected = "Action, Shooter and Adventure";
      expect(actual).toEqual(expected);
    });
  
    test("formats two tags with a human readable string", () => {
      const game = games[2];
      const actual = formatGameTags(game);
      const expected = "Turn-Based and Strategy";
      expect(actual).toEqual(expected);
    });
  });
  
  describe("canAfford()", () => {
    test("should return true if the number given is greater than the cost of the game", () => {
      const game = games[1];
      const actual = canAfford(game, 50);
      expect(actual).toEqual(true);
    });
  
    test("should return false if the number given is less than the cost of the game", () => {
      const game = games[2];
      const actual = canAfford(game, 50);
      expect(actual).toEqual(false);
    });
  
    test("should return true if the number given is the cost of the game", () => {
      const game = games[0];
      const actual = canAfford(game, 0);
      expect(actual).toEqual(true);
    });
  });
  
  describe("getGameDescription()", () => {
    test("should print a description of the game", () => {
      const game = games[0];
      const actual = getGameDescription(game);
      const expected = "Rocket League is a Sports and Racing game that is Free.";
      expect(actual).toEqual(expected);
    });
  });
  