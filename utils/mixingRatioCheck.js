export default function mixingRatioCheck(mixingRatio) {
  const { energySource, proteinSource } = mixingRatio;
  const result = { pass: true, err: null };
  if (energySource === "" && proteinSource === "") {
    return result;
  }
  if (energySource) {
    if (!energySource.includes(":") || +energySource[-1] === NaN) {
      return { pass: false, err: "invalid mixing ratio format " };
    }
  }
  if (proteinSource) {
    if (!proteinSource.includes(":") || +proteinSource[-1] === NaN) {
      return { pass: false, err: "invalid mixing ratio format" };
    }
  }
  return result
}
