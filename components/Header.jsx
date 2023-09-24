import Button from "./ui/Button";
import Logo from "./ui/Logo";
import Analysis from "@/pages/home/analysis";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between">
        <Logo />
        <ul className="flex gap-7">
          <li>
            <Link href={"/home/analysis"}>
              <Button className={"py-3 px-4 rounded-[19px]"}>
                Diğer sayfaya geçmek için
              </Button>
            </Link>
          </li>
          <li>
            <Button className={"py-3 px-4 rounded-[19px]"}>Projects</Button>
          </li>
          <li>
            <Button className={"py-3 px-4 rounded-[19px]"}>Services</Button>
          </li>
          <li>
            <Button className={"py-3 px-4 rounded-[19px]"}>About us</Button>
          </li>
          <li>
            <Button className={"py-3 px-4 rounded-[19px]"}>Contact us</Button>
          </li>
          <li>
            <Button className={"py-3 px-4 rounded-[19px] !bg-fourth"}>
              Start a Project
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
