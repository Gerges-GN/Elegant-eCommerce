import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CloseIcon, TicktIcon } from "../../../assets/icons";

function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-sm font-medium flex items-center px-4 py-2">

      <div className="flex flex-1 items-center justify-center gap-2">
        <TicktIcon className="text-xl" />
        <span>30% off storewide — Limited time!</span>

        <Link
          to="/shop"
          className="hidden md:flex items-center ml-1 text-secondary font-light hover:font-normal border-b group transition-all"
        >
          <span>Shop Now</span>
          <ArrowIcon className="ml-1 text-xl transform transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <CloseIcon
        className="text-xl cursor-pointer hover:text-secondary transition-colors"
        onClick={() => setIsVisible(false)}
      />
    </div>
  );
}

export default TopBanner;
