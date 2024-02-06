"use client"
import Hero from "../../public/images/landing-page-hero.jpg"
import Image from "next/image"

function First() {
    return (
        <div className="first-landing-page-component">
            <article className="first-intro">
                <p>
                    Feed master is a top-notch automatic, effortless and accurate feed
                    formulator that can help you formulate feeds for all types of animals
                    base on your requirements. From the created formula, the software also
                    calculate the total cost of the formulated feed so that you can
                    minimize the cost of production and maximize your farm productivity.
                </p>
            </article>
            <article className="second-intro">
                <Image src={Hero} className="landing" alt="hero image" />
            </article>
        </div>
    )
}

export default First