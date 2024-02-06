"use client"
import InputComponent from "@/components/InputComponent"
import { formulaSliceActions } from "@/slices/formulaSlice"
import { useDispatch, useSelector } from "react-redux"

function MixingRatioForm() {
  const { updateCreateMixingRatio } = formulaSliceActions
  const dispatch = useDispatch()
  const { energySource, proteinSource } = useSelector(state => state.formulaSlice.create.mixingRatio)
  const arr = [
    { name: "energySource", value: energySource, label: "energy source mixing ratio", inSpan: "?", placeholder: "format:(1:1:1)" },
    { name: "proteinSource", value: proteinSource, label: "protein source mixing ratio", inSpan: "?", placeholder: "format:(1:1:1)" },

  ]
  function onChangeHandler(e) {
    const { name, value } = e.target
    dispatch(updateCreateMixingRatio({ name, value }))
  }
  return (
    <div className="mixing-ratio-form-part">
      <h3>Mixing Ratio</h3>

      {arr.map((elem, index) => <InputComponent key={index} {...elem} holderClass="formula-input-holder" onChange={onChangeHandler} />)}
    </div>
  )
}

export default MixingRatioForm