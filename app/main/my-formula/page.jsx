"use client"
import { useEffect } from 'react'
import Link from "next/link"
import fetchData from '@/utils/fetchData'
import { defaultSliceActions } from '@/slices/defaultSlice'
import { formulaSliceActions } from '@/slices/formulaSlice'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import formulaComponents from '@/components/formulaComponents'
function MyFormulaPage() {
  const { SmallSingleFormula } = formulaComponents
  const dispatch = useDispatch()
  const { setIsLoading } = defaultSliceActions
  const { fillMyFormulas } = formulaSliceActions
  const { myFormulas } = useSelector(state => state.formulaSlice)
  const myFormulaLength = !!myFormulas.length
  async function fetchMyFormulas() {
    dispatch(setIsLoading(true))
    const result = await fetchData("formula")
    if (result) {
      dispatch(setIsLoading(false))
      const { err, data } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return
      }
      dispatch(fillMyFormulas(data))
    }
  }
  useEffect(() => { fetchMyFormulas() }, [])
  return !myFormulaLength ? <div className='my-formula-page no-formula'>
    <h3>You currently do not have any feed formula</h3>
    <Link href="/main/my-formula/create" className='create-formula-link'>create formula</Link>
  </div> : (
    <div className='my-formula-page'>
      <header>
        <h2>My Formula</h2>
        <Link href="/main/my-formula/create" className='create-formula-link'>create formula</Link>
      </header>
      <div className="my-formula-list">
        <div className="small-single-formula">
          <h4>Name</h4>
          <h4>Quantity</h4>
          <h4>Date</h4>
        </div>
        {myFormulas.map(({ name, createdAt, requiredQuantity, _id }, index) => <SmallSingleFormula key={index} createdAt={createdAt} name={name} requiredQuantity={requiredQuantity} id={_id} />)}
      </div>
    </div>
  )
}

export default MyFormulaPage