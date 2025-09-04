import { useState } from "react";
import { CloseIcon, TicktIcon } from "../../../assets/icons";
import { UnderLineButton } from "../buttons";

function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-sm font-medium flex items-center px-4 py-2">

      <div className="flex flex-1 items-center justify-center gap-2">
        <TicktIcon className="text-xl" />
        <span>30% off storewide — Limited time!</span>

        <UnderLineButton to="/shop" text="Shop Now" secondary className="hidden md:flex" />
      </div>

      <CloseIcon
        className="text-xl cursor-pointer hover:text-secondary transition-colors"
        onClick={() => setIsVisible(false)}
      />
    </div>
  );
}

export default TopBanner;
