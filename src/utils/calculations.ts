const replaceConstants = (expression: string): string => {
  let result = expression.replace(/π/g, Math.PI.toString());

  result = result.replace(/e(?![0-9])/g, Math.E.toString());
  return result;
};

const parseFunction = (expression: string): number => {
  let parsedExpression = expression;

  parsedExpression = parsedExpression.replace(/sin\(([^)]+)\)/g, (_, args) => {
    return Math.sin(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(/cos\(([^)]+)\)/g, (_, args) => {
    return Math.cos(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(/tan\(([^)]+)\)/g, (_, args) => {
    return Math.tan(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(/log\(([^)]+)\)/g, (_, args) => {
    return Math.log10(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(/ln\(([^)]+)\)/g, (_, args) => {
    return Math.log(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(/√\(([^)]+)\)/g, (_, args) => {
    return Math.sqrt(evaluateExpression(args)).toString();
  });

  parsedExpression = parsedExpression.replace(
    /([0-9.]+)\^([0-9.]+)/g,
    (_, base, exponent) => {
      return Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    }
  );

  return eval(parsedExpression);
};

export const evaluateExpression = (expression: string): number => {
  if (!expression) return 0;

  try {
    let processedExpression = replaceConstants(expression);

    if (/sin|cos|tan|log|ln|√|\^/.test(processedExpression)) {
      return parseFunction(processedExpression);
    }

    return eval(processedExpression);
  } catch (error) {
    console.error("Error evaluating expression:", error);
    throw new Error("Invalid expression");
  }
};
