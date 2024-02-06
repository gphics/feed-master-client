"use client"
import Link from "next/link"
import Image from "next/image"
function SmallSingle({name, img_url,categories}) {
    const defaultImage = process.env.NEXT_PUBLIC_DEFAULT_IMAGE
    return <Link prefetch={false} href={`/main/library/${name}`} className="each-short-ing">
        <Image width={250} height={250} alt={name} src={img_url || defaultImage} />
        <article>
            <h4> {name} </h4>
            <h4>Categories :  {categories.map((elem, index) => <span key={index}>  {elem} {categories.length - 1 > index ? "|" : ""} </span>)}</h4>
        </article>
    </Link>
}

export default SmallSingle