import React from "react";

const CarousalItem = ({ image, title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className=" w-[90%] aspect-square rounded-full object-cover object-center"
        src={image}
        alt=""
      />
      <span className="py-5 font-semibold text-xl text-gray-400">{title}</span>
    </div>
  );
};

export default CarousalItem;
