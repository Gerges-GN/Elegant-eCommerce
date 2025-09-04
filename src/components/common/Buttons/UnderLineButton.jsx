import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../assets/icons";

function UnderLineButton({ to, text, className, noArrow, secondary }) {
  return (
    <Link
      to={to}
      className={`${
        secondary && "text-secondary "
      } ${className} flex items-center font-light border-b w-fit group transition-all`}
    >
      <span>{text}</span>
      {!noArrow && (
        <ArrowIcon className="ml-1 text-xl transform transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export default UnderLineButton;