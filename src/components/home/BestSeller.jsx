import ProductCard from "../common/product/ProductCard";
import products from "../../utils/products.json";

function BestSeller() {
  return (
    <section>
      <div className="container py-10 px-5 lg:px-20 m-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-12">
          Best Seller
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-6">
          {products.slice(0, 8).map((item) => (
            <ProductCard key={item.id} product={item} small/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
