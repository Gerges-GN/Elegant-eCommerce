import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "../../../assets/icons";

function Icons() {
  const numOfProducts = 2;
  return (
    <div className="flex gap-4 justify-center items-center text-2xl *:cursor-pointer">
      <SearchIcon />
      <Link to="login">
        <UserCircleIcon />
      </Link>
      <span className="flex justify-between items-center gap-1">
        <ShoppingBagIcon />
        {numOfProducts > 0 && (
          <p className="bg-neutral-700 text-white w-5 h-5 rounded-full text-[13px] leading-5 text-center font-semibold">
            {numOfProducts > 9 ? "9+" : numOfProducts}
          </p>
        )}
      </span>
    </div>
  );
}

export default Icons;
