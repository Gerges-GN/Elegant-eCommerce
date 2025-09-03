import { useEffect, useRef, useState } from "react";
import ProductCard from "../common/ProductCard/ProductCard";
import products from "../../utils/products.json";
import { ArrowSmallIcon } from "../../assets/icons";

function ProductsCarousel() {
  const scrollRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount =
      direction === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: scrollAmount });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setDisableLeft(scrollLeft <= 0);
      setDisableRight(scrollLeft + clientWidth >= scrollWidth);
    };

    handleScroll();

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="container py-10 px-5 lg:px-20 m-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium">New Arrivals</h2>
          <span className="flex items-center gap-5 text-xl *:cursor-pointer">
            <ArrowSmallIcon
              className={`rotate-180 ${disableLeft && "opacity-30"}`}
              onClick={() => !disableLeft && scroll("left")}
            />
            <ArrowSmallIcon
              className={`${disableRight && "opacity-30"}`}
              onClick={() => !disableRight && scroll("right")}
            />
          </span>
        </div>
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="w-full flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            {products
              .filter((item) => item.isNew)
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsCarousel;
