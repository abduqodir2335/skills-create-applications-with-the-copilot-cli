const { add, subtract, multiply, divide, calculate } = require("../calculator");

describe("addition", () => {
  test("adds the example operands", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("supports negative and decimal operands", () => {
    expect(add(-2, 3)).toBe(1);
    expect(add(0.5, 0.25)).toBe(0.75);
  });
});

describe("subtraction", () => {
  test("subtracts the example operands", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("supports negative results and decimal operands", () => {
    expect(subtract(4, 10)).toBe(-6);
    expect(subtract(1.5, 0.5)).toBe(1);
  });
});

describe("multiplication", () => {
  test("multiplies the example operands", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("supports negative operands and multiplication by zero", () => {
    expect(multiply(-3, 4)).toBe(-12);
    expect(multiply(7, 0)).toBe(0);
  });
});

describe("division", () => {
  test("divides the example operands", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("supports fractional and negative results", () => {
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(-12, 3)).toBe(-4);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(20, 0)).toThrow("Cannot divide by zero.");
  });
});

describe("calculate", () => {
  test.each([
    [2, "+", 3, 5],
    [10, "-", 4, 6],
    [45, "*", 2, 90],
    [20, "/", 5, 4],
  ])("calculates %p %p %p", (left, operator, right, expected) => {
    expect(calculate(left, operator, right)).toBe(expected);
  });

  test("rejects unsupported operators", () => {
    expect(() => calculate(2, "%", 3)).toThrow("Unsupported operation: %");
  });

  test("propagates division-by-zero errors", () => {
    expect(() => calculate(20, "/", 0)).toThrow("Cannot divide by zero.");
  });
});
