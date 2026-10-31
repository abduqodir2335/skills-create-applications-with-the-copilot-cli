#!/usr/bin/env node

// Supported operations: addition (+), subtraction (-), multiplication (*),
// division (/), modulo (%), exponentiation (**), and square root (sqrt).
function add(left, right) {
  return left + right;
}

function subtract(left, right) {
  return left - right;
}

function multiply(left, right) {
  return left * right;
}

function divide(left, right) {
  if (right === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return left / right;
}

function modulo(left, right) {
  if (right === 0) {
    throw new Error("Cannot calculate modulo by zero.");
  }

  return left % right;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(number) {
  if (number < 0) {
    throw new Error("Cannot calculate the square root of a negative number.");
  }

  return Math.sqrt(number);
}

function calculate(left, operator, right) {
  switch (operator) {
    case "+":
      return add(left, right);
    case "-":
      return subtract(left, right);
    case "*":
      return multiply(left, right);
    case "/":
      return divide(left, right);
    case "%":
      return modulo(left, right);
    case "**":
      return power(left, right);
    case "sqrt":
      return squareRoot(left);
    default:
      throw new Error(`Unsupported operation: ${operator}`);
  }
}

function runCli(args) {
  if (args.length === 2 && args[0] === "sqrt") {
    const number = Number(args[1]);
    if (!Number.isFinite(number)) {
      throw new Error("The operand must be a finite number.");
    }

    console.log(calculate(number, "sqrt"));
    return;
  }

  if (args.length !== 3) {
    throw new Error(
      "Usage: node src/calculator.js <number> <+|-|*|/|%|**> <number> or node src/calculator.js sqrt <number>",
    );
  }

  const [leftInput, operator, rightInput] = args;
  const left = Number(leftInput);
  const right = Number(rightInput);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new Error("Both operands must be finite numbers.");
  }

  console.log(calculate(left, operator, right));
}

if (require.main === module) {
  try {
    runCli(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
};
