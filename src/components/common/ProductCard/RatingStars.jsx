import { StarFilledIcon, StarOutlinedIcon } from "../../../assets/icons";

function RatingStars({ numberOfStars, size }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < numberOfStars ? (
            <StarFilledIcon className={`text-${size}`} />
          ) : (
            <StarOutlinedIcon className={`text-${size}`} />
          )}
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
