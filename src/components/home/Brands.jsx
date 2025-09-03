import {
  brandLogo01,
  brandLogo02,
  brandLogo03,
  brandLogo04,
  brandLogo05,
  brandLogo06,
} from "../../assets/brands";
import "./home.css";

function Brands() {
  return (
    <section className="w-full h-28 md:h-36 overflow-x-scroll scrollbar-hide">
      <div className="container h-full px-5 lg:px-20 m-auto ">
        <div className="h-full flex items-center gap-5 *:grow *:max-h-16">
          <img src={brandLogo01} alt="Brand Logo 01" />
          <img src={brandLogo02} alt="Brand Logo 02" />
          <img src={brandLogo03} alt="Brand Logo 03" />
          <img src={brandLogo04} alt="Brand Logo 04" />
          <img src={brandLogo05} alt="Brand Logo 05" />
          <img src={brandLogo06} alt="Brand Logo 06" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
