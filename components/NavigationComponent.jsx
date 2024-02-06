"use client";
import Cookies from "js-cookie";
import { MdDataUsage } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { SiAuthelia } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFunction } from "react-icons/ai";
import { CiSquareQuestion } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import fetchData from "@/utils/fetchData";
import { toast } from "react-toastify";

function NavigationComponent() {
  const router = useRouter();
  const currentPath = usePathname();
  const isAuth = currentPath.includes("/main");
  const notAuthRoutes = [
    { href: "/landing-page", value: "Home", Icon: GoHomeFill },
    { href: "/login", value: "Login", Icon: SiAuthelia },
    { href: "/register", value: "Register", Icon: TbBrandOauth },
    { href: "/about", value: "About", Icon: FaInfoCircle },
  ];

  const isAuthRoutes = [
    { href: "/main", value: "Dashboard", Icon: MdDashboard },
    { href: "/main/usage", value: "usage", Icon: MdDataUsage },
    { href: "/main/profile", value: "profile", Icon: CgProfile },
    { href: "/main/my-formula", value: "My Formula", Icon: AiOutlineFunction },
    // { href: "/main/library", value: "Library", Icon: IoLibrary },
    {
      href: "/main/nutrient-requirements",
      value: "Nutrient Requirements",
      Icon: CiSquareQuestion,
    },
    { href: "/logout", value: "logout", Icon: BiLogOutCircle },
  ];

  function menuControl() {
    document.querySelector(".link-holders").classList.toggle("holder-hide");
  }
  const navRoutes = isAuth ? isAuthRoutes : notAuthRoutes;

  function logoutControl(e) {
    e.preventDefault();
    mainLogoutControl();
  }
  async function mainLogoutControl() {

    const first = await fetchData("user/logout");
    menuControl()
    if (!first.err) {
      Cookies.remove("_at_")
      toast.success(first.data, {theme:"dark"})
      router.push("/landing-page");
      return;
    }
    toast.error(err?.message, { theme: "dark", toastId: 1 });
  }

  const isActive = (href) => href === currentPath;
  return (
    <div className="nav-component">
      <header>
       
        <CgMenuRightAlt className="menu-bar" onClick={menuControl} />
      </header>
      <section className="link-holders holder-hide">
        {navRoutes.map(({ href, value, Icon }, index) => {
          return (
            <Link
              prefetch={false}
              className={isActive(href) ? "nav-link active" : "nav-link"}
              href={href}
              key={index}
              onClick={href !== "/logout" ? menuControl : logoutControl}
            >
              {" "}
              <Icon key={index} className="link-icon" />
              {value}{" "}
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default NavigationComponent;
