/* eslint-disable react/prop-types */
// import "../styles/hero.css"
import girl from "../../public/assets/pic1.png";

function Hero(props) {
  return (
    <>
      <div className="hero flex bg-[#152A46] xl:h-[440px] lg:h-[340px] ">
        <div className="txt flex flex-col m-20 ml-[120px] text-white gap-5 w-[440px]  ">
          <h1 className="xl:text-5xl font-medium lg:text-3xl ">
            {props.title}
          </h1>
          <p>
            {props.desc}
          </p>
        </div>
        <div className="overflow-hidden ml-[40px] ">
          <img className=" xl:w-[680px] max-lg:w-[400px] " src={girl} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
