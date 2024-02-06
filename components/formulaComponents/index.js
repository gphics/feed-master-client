import SmallSingleFormula from "./SmallSingleFormula";

const { default: BasicForm } = require("./form/BasicForm");
const { default: InputForm } = require("./form/InputForm");
const { default: MixingRatioForm } = require("./form/MixingRatioForm");

const formulaComponents = { MixingRatioForm, InputForm, BasicForm, SmallSingleFormula };

export default formulaComponents;
