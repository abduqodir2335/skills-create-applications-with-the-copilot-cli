const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

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

describe("modulo", () => {
  test("returns the remainder", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("throws when the divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot calculate modulo by zero.");
  });
});

describe("power", () => {
  test("raises the base to the exponent", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("supports zero and negative exponents", () => {
    expect(power(5, 0)).toBe(1);
    expect(power(2, -2)).toBe(0.25);
  });
});

describe("square root", () => {
  test("returns the square root", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("supports zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("throws for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow(
      "Cannot calculate the square root of a negative number.",
    );
  });
});

describe("calculate", () => {
  test.each([
    [2, "+", 3, 5],
    [10, "-", 4, 6],
    [45, "*", 2, 90],
    [20, "/", 5, 4],
    [5, "%", 2, 1],
    [2, "**", 3, 8],
    [16, "sqrt", undefined, 4],
  ])("calculates %p %p %p", (left, operator, right, expected) => {
    expect(calculate(left, operator, right)).toBe(expected);
  });

  test("rejects unsupported operators", () => {
    expect(() => calculate(2, "mod", 3)).toThrow("Unsupported operation: mod");
  });

  test("propagates division-by-zero errors", () => {
    expect(() => calculate(20, "/", 0)).toThrow("Cannot divide by zero.");
  });

  test("propagates modulo-by-zero errors", () => {
    expect(() => calculate(20, "%", 0)).toThrow("Cannot calculate modulo by zero.");
  });

  test("propagates negative square-root errors", () => {
    expect(() => calculate(-1, "sqrt")).toThrow(
      "Cannot calculate the square root of a negative number.",
    );
  });
});
