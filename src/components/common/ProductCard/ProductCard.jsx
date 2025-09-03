import { useState } from "react";
import { CheckIcon } from "../../../assets/icons";
import cardPlaceholder from "../../../assets/images/Card placeholder image.png";
import { PrimaryBtn } from "../Buttons";
import HeartBtn from "../Buttons/HeartBtn";
import RatingStars from "./RatingStars";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  // Temporary placeholder
  const {
    title = "Skullcandy - Crusher anc 2 wireless headphones Skullcandy - Crusher anc 2 wireless headphones",
    newPrice = 299.99,
    oldPrice = 499.99,
    rate = 4,
    isNew = true,
  } = product || {};

  const discount = oldPrice > 0 ? ((oldPrice - newPrice) / oldPrice) * 100 : 0;

  const hoverVisibility =
    "opacity-0  invisible group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-150";

  return (
    <div className="h-[400px] md:h-[450px] min-w-[230px] md:min-w-[250px] group">
      {/* Image section */}
      <div className="bg-neutral-200 h-3/4 relative">
        <div className="flex flex-col justify-between absolute top-0 left-0 z-50 w-full h-full p-5">
          <div className="flex justify-between items-start">
            <div className="text-centerfont-semibold *:px-2 *:rounded cursor-default">
              {isNew && <div className="bg-white ">NEW</div>}
              {discount > 0 && (
                <div className="bg-success text-white mt-1">
                  -{discount.toFixed(0)}%
                </div>
              )}
            </div>
            <HeartBtn className={hoverVisibility} />
          </div>
          <div>
            <PrimaryBtn
              content={
                (added && (
                  <span className="flex justify-center items-center gap-1">
                    <CheckIcon className="text-base" /> Added
                  </span>
                )) ||
                "Add to card"
              }
              className={`${!added && hoverVisibility} w-full !text-sm`}
              onClick={() => setAdded(!added)}
            />
          </div>
        </div>

        <div>
          <img
            src={cardPlaceholder}
            alt="Card Placeholder Image"
            className={`${
              added && "-translate-y-3"
            } px-11 pt-16 group-hover:-translate-y-3 transition-all`}
          />
        </div>
      </div>
      {/* Text section */}
      <div className="mt-3 font-inter min-h-[21%] max-h-1/5 flex flex-col justify-between">
        <div className="">
          <RatingStars numberOfStars={rate} size="sm" />
          <h3 className="font-semibold leading-6 mt-1.5 line-clamp-2">
            {title}
          </h3>
        </div>
        <span className="flex gap-2 pt- text-sm">
          <p className="font-semibold">${newPrice}</p>
          {newPrice < oldPrice && (
            <p className="text-neutral-400 line-through">${oldPrice}</p>
          )}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
