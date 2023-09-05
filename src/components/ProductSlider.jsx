import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/Card";
import Button from "./common/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductSlider = ({ products }) => {
  const sliderRef = useRef(null);
  const customDotsRef = useRef(null); // Add a ref for the custom dots

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  // style.backgroundColor = "blue"

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    arrows: false,
    responsive: [
      // ... (your responsive settings)
    ],
  };

  return (
    <>
      <div className="flex justify-between mt-10">
        <h1 className="font-semibold text-5xl">you may also like</h1>
        <div className="">
          <Button
            onClick={handlePrevClick}
            text={<IoIosArrowDown />}
            backgroundColor={"#"}
          />
          <Button onClick={handleNextClick} text={<IoIosArrowUp />} />
          <button>left</button>
          <button>right</button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-4 relative">
            {/* Your product card component */}
            <Card item={product} index={index} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductSlider;
