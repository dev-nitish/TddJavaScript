//console.log("Running test");

const checkLeap =  require("./findLeap");

test("checking Leap year", () => {
    expect(checkLeap(1999)).toBe(false);
    expect(checkLeap(2100)).toBe(false);
    expect(checkLeap(2008)).toBe(true);
    expect(checkLeap(1700)).toBe(false);
    expect(checkLeap(1900)).toBe(false);
    expect(checkLeap(2000)).toBe(true);
    expect(checkLeap(2012)).toBe(true);
    expect(checkLeap(2016)).toBe(true);
    expect(checkLeap(2017)).toBe(false);
    expect(checkLeap(2018)).toBe(false);
    expect(checkLeap(2019)).toBe(false);
})