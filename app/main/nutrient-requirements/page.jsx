"use client"
import nutReqComponent from "@/components/NutReqComponent";
import { defaultSliceActions } from "@/slices/defaultSlice";
import { nutReqActions } from "@/slices/nutReqSlice";
import bactchCreate from "@/utils/batchCreate";
import fetchData from "@/utils/fetchData"
import nutReqArr from "@/utils/store/nutReq";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
function NutrientRequiremetPage() {
  const { EachNutReq } = nutReqComponent
  const dispatch = useDispatch()
  const { all } = useSelector(state => state.nutReqSlice)
  const { fillAll } = nutReqActions
  const { setIsLoading } = defaultSliceActions

  async function fetchNutReq() {
    dispatch(setIsLoading(true))
    const result = await fetchData("requirements")
    if (result) {
      dispatch(setIsLoading(!true))
      const { data, err } = result
      if (err) {
        toast.error(err.message)
        return
      }
      dispatch(fillAll(data))
    }
  }
  useEffect(() => {
    fetchNutReq()
  }, [])

  async function clickHandler() {
    await bactchCreate("requirements/create", "POST", nutReqArr)
  }
  // return <button onClick={clickHandler}>click me </button>

  return !all ? <> </> : (
    <div className="nut-req-page">
      <h3>Below are the nutrient requirements for some common poultry birds.</h3>
      {all.map((elem, index) => {
        return <EachNutReq {...elem} key={index} />
      })}

    </div>
  )

}


export default NutrientRequiremetPage