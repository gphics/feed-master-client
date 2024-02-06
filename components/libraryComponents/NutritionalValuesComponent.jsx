export default
    function NutritionalValuesComponent({ nutritionalValues }) {
    return !nutritionalValues ? <></> : <article className="nutritional-values-component">
        <h3 className="heading"> Nutritional Values </h3>
        <table>
           
            <thead>
                <tr>
                    <th>name </th>
                    <th>value</th>
                    <th>unit</th>
                </tr>
            </thead>
            <tbody>
                {nutritionalValues.map(({ name, value, unit }, index) => {
                    return <tr key={index}>
                        <td> {name} </td>
                        <td> {value} </td>
                        <td> {unit} </td>
                    </tr>
                })}
            </tbody>


        </table>
    </article>
}