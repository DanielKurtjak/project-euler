import R from "ramda";

const { compose, zipWith, multiply, nthArg, sum, divide, converge } = R;

export const weigthedMean = converge(divide, [
  compose(sum, zipWith(multiply)),
  compose(sum, nthArg(1))
]);
