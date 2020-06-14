//console.log("Running test");

const checkLeap =  require("./findLeap");

test("checking Leap year", () => {
    expect(checkLeap(1999)).toBe(false);
    expect(checkLeap(2100)).toBe(false);
})