import { PrimaryButton } from "../common/buttons";
import heroImg from "../../assets/images/hero.png";

function Hero() {
  // Enhancements: Fix the max hight
  return (
    <section className="bg-gradient-to-tr from-secondary to-[#EDD553] md:max-h-[calc(100vh-60px)] overflow-hidden">
      <div className="container flex flex-col-reverse md:flex-row items-center px-5 lg:px-20 m-auto">
        <div className="md:flex-1/2">
          <div className="overflow-hidden max-w-[300px] md:max-w-[300px] lg:max-w-[500px] pt-10 md:pt-20">
            <img
              src={heroImg}
              alt="Man waring Headset"
              className="w-full object-cover lg]:px-16"
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
            <PrimaryButton
              type="default"
              content="Shop Now!"
              link="shop"
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
