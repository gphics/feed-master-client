

function Second() {
    const arr = [
        { title: "Fast", body: "We employ a super fast computation algorithm that is capable of generating the required feed formula in a matter of milliseconds." },
        { title: "Accuracy", body: "Our super fast feed formulator produces  formula with 100% accuracy." },

        { title: "Effortless", body: "Our automated software only requires you to input the feed formula data required and it does the overall computation for you." },
    ]
    return (
        <div className="second-landing-page-component">
            <h3>Value Proposition</h3>
            <section className="values">
                {arr.map(({ title, body }, index) => {
                    return <article className="value" key={index}>
                        <h4> {title} </h4>
                        <p> {body} </p>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Second