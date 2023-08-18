import Image from "next/image";
import Link from "next/link";
import getCurrentUser from "@/app/actions/getCurrentUser";
import logo from "@/images/logo.svg";
import Container from "@/components/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import User from "@/components/user";
import NavbarContainer from "@/components/navbar-container";

const routes = [
  {
    href: "/movies",
    label: "Phim",
  },
  {
    href: "/promotion",
    label: "Khuyến mãi",
  },
  {
    href: "/ticket-price",
    label: "Giá vé",
  },
  {
    href: "/news",
    label: "Tin tức",
  },
  {
    href: "/faqs",
    label: "Hỏi đáp",
  },
  {
    href: "/other",
    label: "Liên hoan phim",
  },
];

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <NavbarContainer>
      <Container>
        <div className="py-4 flex items-center h-20">
          <Link href="/">
            <Image src={logo} alt={logo} width={94} height={47} />
          </Link>
          <MainNav data={routes} />
          {currentUser ? (
            <User name={currentUser?.name} image={currentUser?.image || ""} />
          ) : (
            <NavbarActions />
          )}
        </div>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
