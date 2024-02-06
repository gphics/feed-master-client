"use client"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import fetchData from "@/utils/fetchData"
import { defaultSliceActions } from "@/slices/defaultSlice"
import { librarySliceActions } from "@/slices/librarySlice"
import { toast } from "react-toastify"
import libraryComponents from "@/components/libraryComponents"
function EachLibraryPage() {
  const { NutritionalAttributesComponent, NutritionalValuesComponent, DescriptionComponent, PotentialConstraintsComponent, IntroComponent } = libraryComponents
  const { setIsLoading } = defaultSliceActions
  const { fillLibrary, clearLibrary } = librarySliceActions
  const { name } = useParams()
  const dispatch = useDispatch()
  const { singleLibrary } = useSelector(state => state.librarySlice)
  async function fetchLibrary() {
    dispatch(setIsLoading(true))
    const result = await fetchData(`library/${name}`)
    if (result) {
      dispatch(setIsLoading(!true))
      const { err, data } = result
      if (err) {
        toast.error(err.message, { theme: "dark" })
        return;
      }
      dispatch(fillLibrary({ name: "singleLibrary", data }))
    }

  }
  useEffect(() => {
    dispatch(clearLibrary("singleLibrary"))
    fetchLibrary()
  }, [name])
  return !singleLibrary ? <></> : (
    <div className="each-library-page">
      <IntroComponent {...singleLibrary} />
      <DescriptionComponent {...singleLibrary} />
      <NutritionalAttributesComponent {...singleLibrary} />
      <PotentialConstraintsComponent {...singleLibrary} />
      <NutritionalValuesComponent {...singleLibrary} />
    </div>
  )
}





export default EachLibraryPage