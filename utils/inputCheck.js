export default function inputCheck(input = []) {
  let err = "";
  const state = input.every((ing, index) => {
    const { name, price } = ing;
    if (!ing || !price) {
      err = `ingredient number ${index + 1} lacks either name or price`;
      return false;
    }
    return true;
  });
  if (state) {
    return { pass: true, err: null };
  }
  return { pass: false, err };
}
