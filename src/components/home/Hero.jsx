import { PrimaryBtn } from "../common/Buttons";
import heroImg from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-tr from-secondary to-[#EDD553]">
      <div className="container flex flex-col-reverse md:flex-row items-center px-5 lg:px-20 m-auto">
        <div className="md:flex-1/2">
          <div className="overflow-hidden max-w-[300px] lg:max-w-full pt-10 md:pt-20">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full object-cover lg:px-10"
            />
          </div>
        </div>

        <div className="md:flex-1/2 flex items-center pt-10 sm:pt-0 text-center md:text-start">
          <div className="p-5">
            <h1 className="text-4xl leading-10 md:text-5xl md:leading-12 lg:text-6xl xl:text-7xl lg:leading-16 xl:leading-20 font-medium tracking-tighter mb-3 md:mb-5">
              Listen to
              <br />
              the <span className="text-blue">amazing </span>
              <br />
              music sound.
            </h1>
            <p className="text-base leading-7 md:text-xl mb-2 md:mb-5">
              Experience music like never before
            </p>
            <PrimaryBtn type="default" content="Shop Now!" link="shop"></PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
