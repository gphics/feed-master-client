import Hero from "../../../public/images/broiler.jpg";
import Image from "next/image";
export const metadata = {
  title: "about",
};
function About() {
  const paragraphArr = [
    "We provide a superfast software for formulating feed in order to help you maximize your farm productivity and minimize cost of production. The user interface provided give you the priviledge to manually optimize your feed formula before and after the formula is generated. Lastly, you get all the aforementioned benefit for free without spending a dime.",
  ];
  return (
    <div className="about-page">
      <article className="text">
        {paragraphArr.map((elem, index) => (
          <p key={index}> {elem} </p>
        ))}
      </article>
      <div className="hero">
        <Image src={Hero} alt="hero image" />
      </div>
    </div>
  );
}

export default About;
