const examplesJest = require("./example.js");
/*const testing = require("./index.js");

test("test the API", ()=>{
    expect(testing.testFligths().isArray).toBe(true);
});*/


test("sum test", ()=>{
    expect(examplesJest.perro(2, 3)).toBe(5);
});

test("sum test", ()=>{
    expect(examplesJest.perro(5, 3)).toBe(8);
});

test("sum test", ()=>{
    expect(examplesJest.multiply(3, 3)).toBe(9);
});

test("sum test", ()=>{
    expect(examplesJest.multiply(2, 3)).toBe(6);
});