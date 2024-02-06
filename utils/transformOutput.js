export default function transformOutput(output) {
  let result = [];
  const {
    fixed: { ingredients: fixedIngredients },
    nonFixed: { ingredients: nonFixedIngredients },
  } = output;
  if (fixedIngredients.hasCp) {
    result = [...result, ...fixedIngredients.hasCp];
  }
  if (fixedIngredients.noCp) {
    result = [...result, ...fixedIngredients.noCp];
  }
  if (nonFixedIngredients.energySource) {
    result = [...result, ...nonFixedIngredients.energySource];
  }
  if (nonFixedIngredients.proteinSource) {
    result = [...result, ...nonFixedIngredients.proteinSource];
  }
  return result.sort((a,b)=>a.name < b.name ? -1 : 1);
}
