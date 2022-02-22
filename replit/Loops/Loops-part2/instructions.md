# Loops Lab, Part II

_The Brooklyn Museum_ is piloting a new ticketing system where guests can purchase tickets in advance and arrive at staggered times, to reduce the amount of time people are standing in line. They need to build a bit more functionality into their application, so they can get regular summaries.

## Instructions

You will need to write five functions that require you to make use of loops, conditionals, and logic. Each function makes use of a `guests` array, that contains a number of objects in the following shape.

```js
const guests = [
  {
    names: { preferred: "Ash", surname: "Price" },
    age: 24,
    arrivalTime: { hour: 16, minute: 30 },
    hasPaid: true,
    hasCheckedIn: true,
  },
  {
    names: { preferred: "Yesenia", surname: "Melendez" },
    age: 61,
    arrivalTime: { hour: 16, minute: 50 },
    hasPaid: true,
    hasCheckedIn: false,
  },
  // ...
];
```

The fields for each guest is as follows:

- **names**: An object that contains two keys, representing the person's preferred name and surname.
- **age**: A number representing the person's age.
- **arrivalTime**: An object with two values representing the time someone should be arriving. The time is stored in 24-hour format. For example, 6:30pm would be 18:30, or `{ hour: 18, minute: 30 }`.
- **hasPaid**: A boolean that represents whether or not the guest has paid.
- **hasCheckedIn**: A boolean that represents whether or not the guest has checked in with staff.

## Tests

All of these functions require that you _log_ out values, with `console.log()`. None of the functions need to return a value. In the tests, you will see `.toHaveBeenCalledWith()`. This is a check for whether or not `console.log()` has been called with a particular value as the argument.

## Function Descriptions & Examples

### logPaidGuests()

The `logPaidGuests()` function should _log_ out the full names of anyone who has paid.

#### Example

```js
logPaidGuests(guests);
//> "Ash Price"
//> "Yesenia Melendez"
```

### logCheckedInGuests()

The `logCheckedInGuests()` function should _log_ out the full names of anyone who has already checked in. In this function, abbreviate the last name to just be the first letter followed by a `.`.

#### Example

```js
logCheckedInGuests(guests);
//> "Ash P."
```

### logTicketDiscounts()

The `logTicketDiscounts()` function should _log_ out the name of each guest followed by what type of ticket they should receive.

The first argument is an array of guests, as described above.

The second argument is the maximum age someone must be for them to receive a "Young Adult Discount". For example, if the second argument is `18`, everyone who is `18` and younger will receive a "Young Adult Discount".

The third argument is the minimum age someone must be for them to receive a "Senior Discount". For example, if the third argument is `90`, everyone who is `90` and older will receive a "Senior Discount".

Carefully check the format of the output below. It requires the name, with the last name abbreviated, to be followed by a dash and then the ticket type.

#### Example

```js
logTicketDiscounts(guests, 20, 55);
//> "Ash P. - General Admission"
//> "Yesenia M. - Senior Discount"
```

### logLateGuests()

The `logLateGuests()` function should _log_ out the names of anyone who has not checked in and is late. In addition to the `guests` array, the function should accept a number that represents the current hour and the current minute. If the person's arrival time is equal to or less than this time, their name should be printed out with the word "LATE".

In this function, abbreviate the last name to just be the first letter followed by a `.`. Pay attention to what the output looks like to get this function correct!

> **Hint:** The logic for this function can be tricky. Consider that a time of 17:30 is _earlier_ than 18:00, even though the minutes of 17:30 is greater than the minutes of 18:00.

#### Example

```js
logLateGuests(guests, 17, 0);
//> "LATE: Yesenia M."
```

### logIfGuestHasCheckedInByName()

The `logIfGuestHasCheckedInByName()` function should first find a guest by the given preferred name and surname. If none is found, it should _log_ `"PREFERRED SURNAME not found."`, where "PREFERRED" and "SURNAME" are replaced with the appropriate names.

If the guest is found, it should log `true` if the guest has checked in, or `false` if they have not.

#### Example

```js
logIfGuestHasCheckedInByName(guests, "Ash", "Price");
//> true
logIfGuestHasCheckedInByName(guests, "Yesenia", "Melendez");
//> false
logIfGuestHasCheckedInByName(guests, "Louie", "Hill");
//> "Louie Hill not found."
```
