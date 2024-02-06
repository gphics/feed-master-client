"use client"

import { defaultSliceActions } from "@/slices/defaultSlice"
import { formulaSliceActions } from "@/slices/formulaSlice"
import fetchData from "@/utils/fetchData"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import EachFromInput from "./EachFromInput"
function InputForm() {
  const { updateAvailableIng, addToInput } = formulaSliceActions
  const { availableIng, create: { input: formInputArr } } = useSelector(state => state.formulaSlice)
  const dispatch = useDispatch()
  const { setIsLoading } = defaultSliceActions


  function addClickHandler(e) {
    dispatch(addToInput())
  }


  async function fetchAvailableIng() {
    dispatch(setIsLoading(true))
    const result = await fetchData("library/basic-data")
    if (result) {
      dispatch(setIsLoading(!true))
      const { err, data } = result
      if (err) {
        toast.error(err.message, { theem: "dark" })
        return;
      }
      dispatch(updateAvailableIng(data))
    }
  }

  useEffect(() => {

    !availableIng.length && fetchAvailableIng()
  }, [])
  return !availableIng.length ? <></> : (
    <div className="feedstuff-form-part">
      <header>
        <h3>Feedstuff</h3>
        <button type="button" className="add-input-btn" onClick={addClickHandler}>Add Ingredient </button>
      </header>
      <main>
        {formInputArr.map((elem, index) => <EachFromInput availableIng={availableIng} {...elem} index={index} key={index} />)}
      </main>
    </div>
  )
}

export default InputForm