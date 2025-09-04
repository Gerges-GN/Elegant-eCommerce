import { UnderLineButton } from "../common/buttons";
import imagePlaceholder from "../../assets/images/Card placeholder image.png";
import headBandImg from "../../assets/images/HeadBand.png";
import earbudsImg from "../../assets/images/earbuds.png";
import accessoriesImg from "../../assets/images/usb-cable.png";

const Card = ({ col, heading, image }) => (
  <div
    className={`${
      col ? "flex-col row-span-2" : "flex-row-reverse items-end"
    } flex justify-between bg-neutral-200 h-full p-5 lg:p-10 group`}
  >
    <div
      className={`${
        col ? "mb-5 md:mb-0 px-10" : "py-5 pl-5 xl:pr-10"
      } lg:pl-10`}
    >
      <img
        src={image || imagePlaceholder}
        alt={heading}
        className={`${
          col ? "max-h-96" : "max-h-40 lg:max-h-52"
        } w-full h-full object-contain group-hover:scale-105 transition-all`}
      />
    </div>
    <div className="max-w-1/3 z-50">
      <h3 className="text-3xl font-medium mb-1">{heading}</h3>
      <UnderLineButton
        to="/shop"
        text="collection"
        className="*:text-base font-inter"
      />
    </div>
  </div>
);

function ShopCollection() {
  return (
    <section>
      <div className="container py-10 px-5 lg:px-20 m-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-12">
          Shop Collection
        </h2>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
          <Card image={headBandImg} heading="HeadBand" col />
          <Card image={earbudsImg} heading="Earbuds" />
          <Card image={accessoriesImg} heading="Accessories" />
        </div>
      </div>
    </section>
  );
}

export default ShopCollection;
