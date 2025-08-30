import { NavLink } from "react-router-dom";

function NavBar({ className }) {
  function navLinkClass({ isActive, isPending, isTransitioning }) {
    return [
      "rounded-md transition-colors duration-200",
      isActive ? "text-black font-medium" : "text-neutral-500 hover:text-black",
      isPending ? "animate-pulse" : "",
      isTransitioning ? "opacity-70" : "",
    ].join(" ");
  }

  return (
    <ul className={`${className} hidden md:flex justify-center gap-2 md:gap-10 text-md`}>
      <li>
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
      </li>
      <li>
        <NavLink to="/products" className={navLinkClass}>Product</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
