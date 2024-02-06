import Image from "next/image"
export default
    function IntroComponent({ name, img_url, categories }) {
    const url = img_url || NEXT_PUBLIC_DEFAULT_IMAGE
    return <div className="intro-component">
        <Image alt={name} width={300} height={300} src={url} />
        <h3 className="heading"> {name} </h3>
        <h4 > Categories : </h4>
        <ul>
            {categories.map((elem, index) => <li key={index}> {elem} </li>)}
        </ul>
    </div>
}