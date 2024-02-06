"use client"
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import formulaComponents from "@/components/formulaComponents"
import { useState } from "react"
import { formulaSliceActions } from "@/slices/formulaSlice";
import inputCheck from "@/utils/inputCheck";
import basicCheck from "@/utils/basicCheck";
import mixingRatioCheck from "@/utils/mixingRatioCheck";
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import fetchData from "@/utils/fetchData";
import { defaultSliceActions } from "@/slices/defaultSlice";
import { useRouter } from "next/navigation";
function FormulaCreatePage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { setIsLoading } = defaultSliceActions
  const { BasicForm, InputForm, MixingRatioForm } = formulaComponents
  const [currentForm, setCurrentForm] = useState(0)
  const { basic, mixingRatio, input } = useSelector(state => state.formulaSlice.create)
  // const { basic, mixingRatio, input } = formulaSliceActions
  function submitHandler(e) {
    e.preventDefault()

    const checkArr = [inputCheck(input), basicCheck(basic), mixingRatioCheck(mixingRatio)]
    const checkResult = { pass: false, err: null }
    checkArr.forEach(elem => {
      if (elem.pass) {
        checkResult.pass = true
      } else {
        checkResult.err = elem.err
        checkResult.pass = false
      }
    })
    if (checkResult.err) {
      toast.warn(checkResult.err, { theme: "dark" })
      return
    }
    mainSubmitHandler()
  }
  async function mainSubmitHandler() {
    dispatch(setIsLoading(true))
    const transformedInput = JSON.parse(JSON.stringify(input)).map(elem => {
      elem.price = +elem.price
      elem.quantity = +elem.quantity
      elem.cp = +elem.cp
      return elem
    })
    const body = { ...basic, mixingRatio, input: transformedInput }
    const result = await fetchData("formula/create", "POST", body)
    if (result) {
      dispatch(setIsLoading(false))
      const { data, err } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      router.push("/main/my-formula")
    }
  }

  function prevHandler() {
    setCurrentForm(prev => prev > 0 ? prev - 1 : prev)
  }

  function nextHandler() {
    setCurrentForm(prev => {
      const newPrev = prev + 1
      const ans = newPrev < 3 ? newPrev : 0
      return ans
    })
  }
  return (
    <div className="formula-create-page">
      <article className="note">
        <h2>create your feed formula</h2>
        <p> <span>Note: </span> `*` means the field is required. `?` means the field is optional. visit <a href="/main/usage"> usage page </a>to learn more.</p>
      </article>
      <form className="formula-create-form" onSubmit={submitHandler} >
        <div className="current-form-controls-holder">
          <button onClick={prevHandler} type="button"> <GrFormPrevious className="icon" /> </button>
          <h4> {currentForm + 1} </h4>
          <button onClick={nextHandler} type="button"> <GrFormNext className="icon" /> </button>
        </div>
        {currentForm === 0 && <BasicForm />}
        {currentForm === 1 && <InputForm />}
        {currentForm === 2 && <MixingRatioForm />}
        {currentForm === 2 &&
          <button onClick={submitHandler} type="submit" className="formula-create-btn">create</button>
        }
      </form>

    </div>
  )
}

export default FormulaCreatePage