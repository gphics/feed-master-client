"use client"
import { toast } from "react-toastify"
import InputComponent from "@/components/InputComponent"
import { formulaSliceActions } from "@/slices/formulaSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
function EachFromInput({ availableIng, name, cp, price, quantity, index }) {
    const { updateInInput, deleteFromInput } = formulaSliceActions
    const [selectState, setSelectState] = useState(true)
    const { input } = useSelector(state => state.formulaSlice.create)
    const dispatch = useDispatch()
    const arr = [
        { name: "cp", value: cp, type: "number", label: "crude protein", inSpan: "*", },
        { name: "price", value: price, type: "number", label: "price per kg", inSpan: "*" },
        { name: "quantity", value: quantity, type: "number", label: "quantity(kg)", inSpan: "?", },
    ]
    function selectOnChangeHandler(e) {
        const { value, name } = e.target
        // console.log(name, value)

        if (!value) {
            dispatch(updateInInput({ name: "cp", value: 0, index }))
            return;
        }

        const defaultCP = availableIng.find(elem => elem.name === value).cp

        // updating the cp
        dispatch(updateInInput({ name: "cp", value: defaultCP, index }))

        // updating the ingredient
        dispatch(updateInInput({ name, value, index }))


    }
    function otherInputOnChangeHandler(e) {
        const { name, value } = e.target
        dispatch(updateInInput({ name, value, index }))
    }
    function deleteHandler() {
        if (input.length <= 2) {
            toast.warn("you cannot have less than 2 feed ingredients", { theme: "dark" })
            return;
        }
        dispatch(deleteFromInput(index))
    }
    return <section className="each-from-input">
        <div className="select-input-holder">
            <aside>
                <button type="button" onClick={() => { setSelectState(prev => !prev) }}>click</button>
                <small> {selectState ? "text" : "select"} </small>
            </aside>
            <label htmlFor="name" id={name + index}> feed ingredient <span>* </span> </label>

            {selectState ?
                <select id="name" value={name} name="name" onChange={selectOnChangeHandler}>
                    <option value=""> select feedstuff </option>
                    {availableIng.map(({ name }, num) => <option value={name} key={num}> {name} </option>)}
                </select> :
                <InputComponent value={name} name="name" placeholder="type here " onChange={otherInputOnChangeHandler} holderClass="input-in-select" inputId={`form-input-from-select`} />}
        </div>

        {arr.map((elem, num) => <InputComponent onChange={otherInputOnChangeHandler} holderClass="formula-input-holder" key={num} {...elem} inputId={`form-input-${num + 1}`} />)}
        <button type="button" className="input-delete-btn" onClick={deleteHandler}>delete</button>
    </section>
}

export default EachFromInput