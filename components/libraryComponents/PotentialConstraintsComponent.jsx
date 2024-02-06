
export default function PotentialConstraintsComponent({ potentialConstraints }) {
    return !potentialConstraints ? <></> : <article className="potential-constraints-component">
        <h3 className="heading">Potential Constraints </h3>
        {potentialConstraints.map(({ title, body }, index) => <div key={index}>
            <h5>  {title} </h5>
            <p> {body} </p>
        </div>)}
    </article>
}