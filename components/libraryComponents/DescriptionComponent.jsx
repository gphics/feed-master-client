export default
    function DescriptionComponent({ description }) {
    return !description ? <></> : <article className="description-component">
        <h3 className="heading"> Description </h3>
        {description.map((elem, index) => <p key={index}> {elem} </p>)}
    </article>
}

