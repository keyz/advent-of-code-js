export const polyMaker = (fn) => function polyedFn(target, ...args) {
  return fn.call(target, ...args);
};

export const polyReduce = polyMaker(Array.prototype.reduce);
export const polyForEach = polyMaker(Array.prototype.forEach);

export const polySum = (seq) => polyReduce(
  seq,
  (res, x) => res + x,
  0
);

export const polyProd = (seq) => polyReduce(
  seq,
  (res, x) => res * x,
  1
);
