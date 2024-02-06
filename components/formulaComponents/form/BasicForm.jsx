"use client"
import InputComponent from "@/components/InputComponent"
import { formulaSliceActions } from "@/slices/formulaSlice"
import { useDispatch, useSelector } from "react-redux"
function BasicForm() {
  const { updateCreateBasic } = formulaSliceActions
  const dispatch = useDispatch()
  const { name, description, requiredQuantity,
    requiredCrudeProtein } = useSelector(state => state.formulaSlice.create.basic)
  const arr = [
    { name: "name", value: name, label: "formula name", inSpan: "*", placeholder: "formula name " },
    { name: "description", value: description, label: "basic description", inSpan: "*", placeholder: "formula description" },
    { name: "requiredCrudeProtein", value: requiredCrudeProtein, type: "number", label: "required cp (%)", inSpan: "*", placeholder: "required cp ..." },
    { name: "requiredQuantity", value: requiredQuantity, type: "number", label: "required quantity(kg)", inSpan: "*", placeholder: "required quantity" },

  ]
  function onChangeHandler(e) {
    const { name, value } = e.target
    dispatch(updateCreateBasic({ name, value }))
  }
  return (
    <div className="basic-form-part">
      <h3>Formula Details </h3>
      {arr.map((elem, index) => <InputComponent holderClass="formula-input-holder" inputId={`form-input-${index + 1}`} onChange={onChangeHandler} {...elem} key={index} />)}
    </div>
  )
}

export default BasicForm