import TopBanner from "./TopBanner";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Icons from "./Icons";

export const Header = () => {
  return (
    <header>
      <TopBanner />
      <nav className="bg-neutral-100 ">
        <div className="container m-auto flex justify-between py-4 px-5 lg:px-20">
          <Logo />
          <NavBar className="flex-1" />
          <Icons />
        </div>
      </nav>
    </header>
  );
};
