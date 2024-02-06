

function InputComponent({ value, name, onChange, holderClass, type = "text", label = null, inSpan = "", Icon = null, placeholder, iconClass = "", inputId=""}) {

    return (
        <div className={holderClass}>
            {label ? <>   <label htmlFor={inputId} > {label} <span> {inSpan} </span> </label>
                <input id={inputId} type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} /></> : <>
                {Icon && <Icon className={iconClass} />}
                <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />
            </>}

        </div>
    )
}

export default InputComponent