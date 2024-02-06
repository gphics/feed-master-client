"use client"
import { useDispatch, useSelector } from "react-redux"
import bactchCreate from "@/utils/batchCreate"
import library from "@/utils/store/library"
import { librarySliceActions } from "@/slices/librarySlice"
import { useEffect } from "react"
import fetchData from "@/utils/fetchData"
import { toast } from "react-toastify"
import { defaultSliceActions } from "@/slices/defaultSlice"
import Image from "next/image"
import Link from "next/link"
import libraryComponents from "@/components/libraryComponents"
function DashboardPage() {
  const { setIsLoading } = defaultSliceActions
  const { fillLibrary, updateQuery } = librarySliceActions
  const dispatch = useDispatch()
  const { SmallSingle } = libraryComponents
  const { allLibrary, filteredLibrary, query } = useSelector(state => state.librarySlice)
  // async function clickHandler() {
  //     const result = await bactchCreate("library/create", "POST", library)

  // }
  //  function clickHandler() {
  //  checkLibrary()
  //  console.log(library.length)
  //  }
  async function fetchLibrary() {
    dispatch(setIsLoading(true))
    const result = await fetchData("library")
    if (result) {
      dispatch(setIsLoading(false))
      const { data, err } = result
      if (err) {
        toast.error(err.message)
        return
      }
      dispatch(fillLibrary({ name: "allLibrary", data }))
      dispatch(fillLibrary({ name: "filteredLibrary", data }))
    }

  }
  useEffect(() => { fetchLibrary() }, [])
  function onChangeHandler(e) {
    const { value } = e.target
    dispatch(updateQuery(value))
    if (value === "") {
      dispatch(fillLibrary({ name: "filteredLibrary", data: allLibrary }))
      return;
    }

    const filt = allLibrary.filter(elem => elem.name.toLowerCase().includes(value.toLowerCase()))
    dispatch(fillLibrary({ name: "filteredLibrary", data: filt }))
  }
  //  return <button onClick={clickHandler}>click</button>

  return !filteredLibrary ? <></> : (
    <div className="library-page">
      <form onSubmit={(e) => e.preventDefault()} className="library-search-form">
        <input type="search" onChange={onChangeHandler} value={query} placeholder="search here ...." name="library-query" />
      </form>
      <h3>Common feed Ingredients</h3>

      <section className="short-ingredients">
        {filteredLibrary.length > 0 ? filteredLibrary.map(({ name, img_url = defaultImage, categories }, index) => {
          return <Link prefetch={false} href={`/main/library/${name}`} key={index} className="each-short-ing">
            <Image width={250} height={250} alt={name} src={img_url} />
            <article>
              <h4> {name} </h4>
              <h4>Categories :  {categories.map((elem, index) => <span key={index}>  {elem} {categories.length - 1 > index ? "|" : ""} </span>)}</h4>

            </article>
          </Link>
        }) : <h2 className="not-query"> {query} not found ! </h2>}
      </section>
    </div>
  )


}

export default DashboardPage

/**
 * The content of this page was the previous content of the main/library page that is no longer in use
 * I chose to do this because I can't find any reasonable thing to put in the dashboard page here
 * So the styling is also in the library page
 */