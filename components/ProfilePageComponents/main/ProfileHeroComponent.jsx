import Image from "next/image"
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
export default function ProfileHeroComponent({ url }) {
    const router = useRouter()
    function clickHandler() {
        router.push("/main/profile/update")
    }
    return <section className="user-hero-section"><Image width={200} height={200} src={url} alt="user profile image" />
        <FiEdit onClick={clickHandler} className="edit-icon" />
    </section>
}
