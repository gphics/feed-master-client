export default function ProfileInfoComponent({ firstname, lastname, contact, location, email }) {
    const arr = [
        { title: "firstname", value: firstname },
        { title: "lastname", value: lastname },
        { title: "email", value: email },
        { title: "contact", value: contact },
        { title: "location", value: location },
    ]
    return <section className="user-info-section">
        <h3>Personal Information</h3>
        {arr.map(({ title, value }, index) => {
            return <div className="each" key={index}>
                <h4 > {title} : <span className={title === "email" ? "is-email" : ""}>  {value} </span> </h4>
            </div>
        })}
    </section>
}