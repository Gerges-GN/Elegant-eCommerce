import { Link } from "react-router-dom";

function PrimaryButton({ type, content, className, link, onClick }) {
  const typeClass = type == "rounded" ? "rounded-full" : "rounded-lg";
  return (
    <Link to={link}>
      <button
        className={`${className} ${typeClass} bg-primary text-white text-center text-sm md:text-lg md:font-medium py-2 px-10 border-3 border-primary
      hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary transition-all duration-75`}
      onClick={onClick}
      >
        {content}
      </button>
    </Link>
  );
}

export default PrimaryButton;
