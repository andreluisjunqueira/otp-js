const map = (
  value: number,
  r0: number,
  r1: number,
  r2: number,
  r3: number,
): number => {
  const mag = Math.abs(value - r0);
  const sgn = value < 0 ? -1 : 1;
  const total = (sgn * mag * (r3 - r2)) / (r1 - r0);

  return parseFloat(total.toFixed(1));
};

export default map;
