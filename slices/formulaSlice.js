import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableIng: [],
  create: {
    basic: {
      name: "",
      description: "",
      requiredQuantity: 0,
      requiredCrudeProtein: 0,
    },
    mixingRatio: { energySource: "", proteinSource: "" },
    input: [
      { name: "", cp: +0, price: +0, quantity: +0 },
      { name: "", cp: +0, price: +0, quantity: +0 },
    ],
  },
  singleFormula: null,
  myFormulas: [],
};
const main = createSlice({
  name: "formulaSlice",
  initialState,
  reducers: {
    updateCreateBasic(state, action) {
      const { name, value } = action.payload;
      state.create.basic[name] = value;
    },
    updateCreateMixingRatio(state, action) {
      const { name, value } = action.payload;
      state.create.mixingRatio[name] = value;
    },
    updateAvailableIng(state, action) {
      state.availableIng = action.payload;
    },
    deleteFromInput(state, action) {
      // conso
      state.create.input = state.create.input.filter(
        (elem, index) => index !== +action.payload && elem
      );
    },
    updateInInput(state, action) {
      const { name, value, index } = action.payload;
      state.create.input[index][name] = name === "name" ? value : +value;
    },
    addToInput(state) {
      const obj = { name: "", cp: 0, price: 0, quantity: 0 };
      state.create.input.push(obj);
    },
    clearCreate(state) {
      state.create = {
        basic: {
          name: "",
          description: "",
          requiredQuantity: 0,
          requiredCrudeProtein: 0,
        },
        mixingRatio: { energySource: "", proteinSource: "" },
        input: [
          { name: "", cp: 0, price: 0, quantity: 0 },
          { name: "", cp: 0, price: 0, quantity: 0 },
        ],
      };
    },
    fillCreate(state, action) {
      const {
        input,
        name,
        description,
        mixingRatio,
        requiredQuantity,
        requiredCrudeProtein,
      } = action.payload;
      state.create.basic = {
        name,
        description,
        requiredCrudeProtein,
        requiredQuantity,
      };
      state.create.input = input;
      state.create.mixingRatio = mixingRatio;
    },
    fillMyFormulas(state, action) {
      state.myFormulas = action.payload;
    },
    fillSingleFormula(state, action) {
      state.singleFormula = action.payload;
    },
  },
});

export const formulaSliceActions = main.actions;
const formulaSlice = main.reducer;

export default formulaSlice;
