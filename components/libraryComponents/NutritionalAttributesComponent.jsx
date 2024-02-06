

export default function NutritionalAttributesComponent({ nutritionalAttributes }) {
    return !nutritionalAttributes ? <></> : <article className="nutritional-attributes-component">
        <h3 className="heading"> Nutritional Attributes </h3>
        {nutritionalAttributes.map((elem, index) => <p key={index}> {elem} </p>)}
    </article>
}
