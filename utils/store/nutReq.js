const nutReqArr = [
  {
    name: "Broiler",
    stage: "starter",
    requirements: [
      { name: "crude protein", value: "23-25", unit: "%" },
      {
        name: "crude fibre",
        value: 5,
        unit: "%",
      },

      { name: "salt", value: 0.5, unit: "%" },
      {
        name: "methionine",
        value: 0.51,
        unit: "%",
      },
      { name: "lysine", value: 1.44, unit: "%" },
      { name: "calcium", value: 1, unit: "%" },

      { name: "phosphorous", value: 0.5, unit: "%" },
      { name: "metabolizable energy", value: 3010, unit: "Kcal/ME/Kg" },
    ],
  },
  {
    name: "Broiler",
    stage: "grower",
    requirements: [
      { name: "crude protein", value: "21-23", unit: "%" },

      { name: "crude fibre", value: 5, unit: "%" },
      { name: "salt", value: 0.5, unit: "%" },
      { name: "methionine", value: 0.45, unit: "%" },
      { name: "lysine", value: 1.25, unit: "%" },
      { name: "calcium", value: 0.9, unit: "%" },
      { name: "phosphorous", value: 0.45, unit: "%" },
      { name: "metabolizable energy", value: 3175, unit: "Kcal/ME/Kg" },
    ],
  },
  {
    name: "Broiler",
    stage: "finisher",
    requirements: [
      { name: "crude protein", value: "19-21", unit: "%" },
      { name: "crude fibre", value: 5, unit: "%" },
      { name: "salt", value: 0.5, unit: "%" },
      { name: "methionine", value: 0.39, unit: "%" },
      { name: "lysine", value: 1.05, unit: "%" },
      { name: "calcium", value: 0.9, unit: "%" },
      { name: "phosphorous", value: 0.42, unit: "%" },
      { name: "metabolizable energy", value: 3225, unit: "Kcal/ME/Kg" },
    ],
  },

  {
    name: "layer",
    stage: "starter",
    requirements: [
      { name: "crude protein", value: 20, unit: "%" },
      { name: "crude fibre", value: 7, unit: "%" },
      { name: "salt", value: "", unit: "%" },
      { name: "methionine", value: 1, unit: "%" },
      { name: " lysine", value: 1, unit: "%" },
      { name: "calcium", value: 0.5, unit: "%" },
      { name: "phosphorous", value: 1, unit: "%" },
      { name: " metabolizable energy", value: 2800, unit: "Kcal/ME/Kg" },
    ],
  },
  {
    name: "layer",
    stage: "grower",
    requirements: [
      { name: "crude protein", value: 16, unit: "%" },
      { name: "crude fibre", value: 9, unit: "%" },
      { name: "salt", value: "", unit: "%" },
      { name: "methionine", value: 0.7, unit: "%" },
      { name: "lysine", value: 1, unit: "%" },
      { name: "calcium", value: 0.5, unit: "%" },
      { name: "phosphorous", value: 1, unit: "%" },
      { name: "metabolizable energy", value: 2500, unit: "Kcal/ME/Kg" },
    ],
  },
  {
    name: "layer",
    stage: "layer phase 1",
    requirements: [
      { name: "crude protein", value: 18, unit: "%" },
      { name: "crude fibre", value: 9, unit: "%" },
      { name: " salt", value: "", unit: "%" },
      { name: "methionine", value: 0.7, unit: "%" },
      { name: " lysine", value: 1, unit: "%" },
      { name: " calcium", value: 0.5, unit: "%" },
      { name: "phosphorous", value: 3, unit: "%" },
      { name: "metabolizable energy", value: 2600, unit: "Kcal/ME/Kg" },
    ],
  },
  {
    name: "layer",
    stage: "layer phase 2",
    requirements: [
      { name: "crude protein", value: 16, unit: "%" },
      { name: " crude fibre", value: 10, unit: "%" },
      { name: "salt", value: "", unit: "%" },
      { name: "methionine", value: 0.65, unit: "%" },
      { name: "lysine", value: 1, unit: "%" },
      { name: "calcium", value: 0.5, unit: "%" },
      { name: "phosphorous", value: 3, unit: "%" },
      { name: "metabolizable energy", value: 2400, unit: "Kcal/ME/Kg" },
    ],
  },
];

export default nutReqArr;
