"use client"

import { defaultSliceActions } from "@/slices/defaultSlice"
import { formulaSliceActions } from "@/slices/formulaSlice"
import fetchData from "@/utils/fetchData"
import numFix from "@/utils/numFix"
import transformOutput from "@/utils/transformOutput"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
function Read() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { setIsLoading } = defaultSliceActions
  const { fillSingleFormula } = formulaSliceActions
  const { singleFormula } = useSelector(state => state.formulaSlice)
  const { id } = useParams()
  async function fetchSingleFormula() {
    dispatch(setIsLoading(true))
    const result = await fetchData(`formula/${id}`)
    if (result) {
      dispatch(setIsLoading(!true))
      const { err, data } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      dispatch(fillSingleFormula(data))
    }
  }
  async function deleteHandler() {
    dispatch(setIsLoading(true))
    const result = await fetchData(`formula/${id}`, "DELETE")
    if (result) {
      dispatch(setIsLoading(!true))
      const { err, data } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      toast.success(data, { theme: "dark" })
      router.push("/main/my-formula")
      dispatch(fillSingleFormula(null))
    }
  }
  useEffect(() => { fetchSingleFormula() }, [id])
  return !singleFormula ? <></> : (
    <div className="single-formula-page">
      <Basic {...singleFormula} />
      <FormulaTable output={singleFormula.output} />
      <div className="controls">
        <button type="button" onClick={() => router.push(`/main/my-formula/update/${id}`)} className="ctrl-btn ">update</button>
        <button type="button" className="ctrl-btn del" onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}
function Basic({ name, description, requiredQuantity, requiredCrudeProtein, createdAt }) {
  const transDate = new Date(createdAt).toDateString()
  const transCp = (requiredCrudeProtein / 100) * requiredQuantity
  return <div className="basic-formula-component">
    <h4> {name} </h4>
    <p> {description} </p>
    <h4>Required Quantity: {requiredQuantity}kg </h4>
    <h4>Required Crude Protein: {requiredCrudeProtein}% </h4>
    <h4>Required Crude Protein: {transCp}kg </h4>
    <small> Created at: {transDate} </small>
  </div>
}

function FormulaTable({ output }) {
  const transformedOutput = transformOutput(output)

  return <section className="formula-table-component">
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> CP(%) </th>
          <th> Price(N) </th>
          <th>  Quantity(kg)</th>
          <th>cost(N) </th>
          <th> CP(kg) </th>
        </tr>

      </thead>
      <tbody>
        {transformedOutput.map(({ name, cp, quantity, totalPrice, price, contributedCp }, index) => {

          return <tr key={index}>
            <td> {name} </td>
            <td> {cp} </td>
            <td> {price} </td>
            <td> {numFix(quantity)} </td>
            <td> {numFix(totalPrice)} </td>
            <td> {contributedCp ? numFix(contributedCp) : 0} </td>
          </tr>
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th></th>
          <th></th>
          <th> {numFix(output.totalQuantity)} </th>
          <th> {numFix(output.totalCost)} </th>
          <th> {numFix(output.totalCp)} </th>
        </tr>
      </tfoot>
    </table>
  </section>

}

const n = 34
n.toFixed()

export default Read