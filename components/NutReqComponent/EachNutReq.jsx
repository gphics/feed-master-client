

function EachNutReq({ name, stage, requirements }) {
    return <section className="each-nut-req-component">

        <h4> name : {name} </h4>
        <h4> stage: {stage} </h4>
        <ul>
            {requirements.map(({ name, value, unit }, index) => <li key={index}> <span> {name} : </span>  {value || 0}{unit} </li>)}
        </ul>
    </section>
}

export default EachNutReq