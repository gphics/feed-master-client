import Hero from "../public/images/notFound.jpg";
import Image from "next/image";
import Link from "next/link";
function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Image className="not-found-image" src={Hero} alt="not found image" />
      <Link className="back-home-link" href="/main">
        {" "}
        Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
