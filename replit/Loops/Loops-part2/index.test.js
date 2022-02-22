const {
  logPaidGuests,
  logCheckedInGuests,
  logTicketDiscounts,
  logLateGuests,
  logIfGuestHasCheckedInByName,
} = require("../");

let guests;
beforeEach(() => {
  guests = [
    {
      names: { preferred: "Brandon", surname: "Harris" },
      age: 32,
      arrivalTime: { hour: 17, minute: 0 },
      hasPaid: true,
      hasCheckedIn: true,
    },
    {
      names: { preferred: "Ali", surname: "Khan" },
      age: 54,
      arrivalTime: { hour: 17, minute: 15 },
      hasPaid: true,
      hasCheckedIn: true,
    },
    {
      names: { preferred: "Robin", surname: "Blake" },
      age: 19,
      arrivalTime: { hour: 17, minute: 30 },
      hasPaid: true,
      hasCheckedIn: false,
    },
    {
      names: { preferred: "Sage", surname: "Briggs" },
      age: 62,
      arrivalTime: { hour: 18, minute: 0 },
      hasPaid: false,
      hasCheckedIn: false,
    },
    {
      names: { preferred: "Amy", surname: "Ayala" },
      age: 66,
      arrivalTime: { hour: 18, minute: 15 },
      hasPaid: false,
      hasCheckedIn: false,
    },
  ];
  console.log = jest.fn();
});

describe("logPaidGuests()", () => {
  test("should only log the guests that are paid", () => {
    logPaidGuests(guests);

    expect(console.log).toHaveBeenCalledWith("Brandon Harris");
    expect(console.log).toHaveBeenCalledWith("Ali Khan");
    expect(console.log).toHaveBeenCalledWith("Robin Blake");
    expect(console.log).not.toHaveBeenCalledWith("Sage Briggs");
    expect(console.log).not.toHaveBeenCalledWith("Amy Ayala");
  });
});

describe("logCheckedInGuests()", () => {
  test("should only log the guests that have checked in", () => {
    logCheckedInGuests(guests);

    expect(console.log).toHaveBeenCalledWith("Brandon H.");
    expect(console.log).toHaveBeenCalledWith("Ali K.");
    expect(console.log).not.toHaveBeenCalledWith("Robin B.");
    expect(console.log).not.toHaveBeenCalledWith("Sage B.");
    expect(console.log).not.toHaveBeenCalledWith("Amy A.");
  });
});

describe("logTicketDiscounts()", () => {
  test("should log what kind of discount guests get, if any", () => {
    logTicketDiscounts(guests, 20, 60);

    expect(console.log).toHaveBeenCalledWith("Brandon H. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Ali K. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Robin B. - Young Adult Discount");
    expect(console.log).toHaveBeenCalledWith("Sage B. - Senior Discount");
    expect(console.log).toHaveBeenCalledWith("Amy A. - Senior Discount");
  });

  test("should correctly skip cases if needed", () => {
    logTicketDiscounts(guests, 10, 70);

    expect(console.log).toHaveBeenCalledWith("Brandon H. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Ali K. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Robin B. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Sage B. - General Admission");
    expect(console.log).toHaveBeenCalledWith("Amy A. - General Admission");
  });
});

describe("logLateGuests()", () => {
  test("should log out guests who have not checked in but have an arrival time at or before the given time", () => {
    logLateGuests(guests, 19, 0);

    expect(console.log).not.toHaveBeenCalledWith("LATE: Brandon H.");
    expect(console.log).not.toHaveBeenCalledWith("LATE: Ali K.");
    expect(console.log).toHaveBeenCalledWith("LATE: Robin B.");
    expect(console.log).toHaveBeenCalledWith("LATE: Sage B.");
    expect(console.log).toHaveBeenCalledWith("LATE: Amy A.");
  });

  test("should log out guests who have matching times to the input", () => {
    logLateGuests(guests, 18, 0);

    expect(console.log).not.toHaveBeenCalledWith("LATE: Brandon H.");
    expect(console.log).not.toHaveBeenCalledWith("LATE: Ali K.");
    expect(console.log).toHaveBeenCalledWith("LATE: Robin B.");
    expect(console.log).toHaveBeenCalledWith("LATE: Sage B.");
    expect(console.log).not.toHaveBeenCalledWith("LATE: Amy A.");
  });
});

describe("logIfGuestHasCheckedInByName()", () => {
  test("should log out true if the guest has checked in", () => {
    const actual = logIfGuestHasCheckedInByName(guests, "Ali", "Khan");
    const expected = true;
    expect(console.log).toHaveBeenCalledWith(expected);
  });

  test("should log out false if the guest has not checked in", () => {
    const actual = logIfGuestHasCheckedInByName(guests, "Amy", "Ayala");
    const expected = false;
    expect(console.log).toHaveBeenCalledWith(expected);
  });

  test("should log out that the guest cannot be found if the names do not match", () => {
    const actual = logIfGuestHasCheckedInByName(guests, "Kimberly", "Hall");
    const expected = "Kimberly Hall not found.";
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});
