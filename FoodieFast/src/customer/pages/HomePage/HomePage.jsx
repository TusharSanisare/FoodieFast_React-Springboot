import CarousalItem from "./CarousalItem";
import "./HomePage.css";
import MultipleItemCarousel from "./MultipleItemCarousel";

const HomePage = () => {
  return (
    <div className="">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">FoodieFast</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Test the Convenience: Food, Fast and Delivered
          </p>
        </div>
        <div className="absolute cover top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="px-7 py-10">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-5">
            Top Meels
          </p>
        </div>
        <MultipleItemCarousel></MultipleItemCarousel>
      </section>
      <section className="px-5 lg:px-20 ">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Order From Our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
