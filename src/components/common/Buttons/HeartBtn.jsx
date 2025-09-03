import { useState } from "react";
import { HeartIcon } from "../../../assets/icons";

function HeartBtn({className}) {
  const [isFav, setIsFav] = useState(false);
  console.log(isFav);

  return (
    <button
      className={`${className} bg-white p-1.5 rounded-full flex  shadow-neutral-400/50 shadow-lg hover:shadow-md 
     hover:*:*:fill-danger hover:*:*:stroke-danger ${
       isFav && "*:*:fill-danger *:*:stroke-danger shadow-md visible opacity-100"
     }`}
      onClick={() => setIsFav(!isFav)}
    >
      <HeartIcon className="text-xl text-transparent" />
    </button>
  );
}

export default HeartBtn;
