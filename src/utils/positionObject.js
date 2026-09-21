export function positionObject(counterObject, topSpacing, leftSpacing, gapBetween) {
  const gapHeight = gapBetween * counterObject;
  const position = {
    top: topSpacing + gapHeight + "%",
    left: leftSpacing + "%",
  };
  return position;
}
