import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleProduct } from "../services/products";
import Loader from "../components/common/Loader";
import ProductSlider from "../components/ProductSlider";
import { useData } from "../hooks/useData";
import Button from "../components/common/Button";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [cart, setCart] = useState([]);

  const { products } = useData();
  const { productId } = useParams();

  // get single Product
  console.log(products, "sin");

  useEffect(() => {
    const filterProduct = products?.find(
      (item) => item.id === Number(productId)
    );
    setSingleProduct(filterProduct);
  }, [productId]);

  const [myColors, setMyColors] = useState([
    "bg-[#FF5733]",
    "bg-[#FF5733]",
    "bg-[#92dc7e]",
    "bg-[#FF5733]",
    "bg-[#33A8FF]",
    "bg-[#fafa6e]",
  ]);
  // const colors = [
  //   "accent-[#FF5733]",
  //   "accent-[#FF5733]",
  //   "accent-[#92dc7e]",
  //   "accent-[#FF5733]",
  //   "accent-[#33A8FF]",
  //   "accent-[#fafa6e]",
  // ];
  const colors = [
    { id: 1, name: "Red", code: "#FF5733" },
    { id: 2, name: "Green", code: "#92dc7e" },
    { id: 3, name: "Blue", code: "#33A8FF" },
    // Add more colors as needed
  ];

  const handleClick = (product) => {
    if (cart.includes(product)) return;
    cart.push(product);
    const cartItem = JSON.stringify(cart);
    localStorage.setItem("cart", cartItem);
  };

  return (
    <>
      <section className="min-h-screen px-14 pt-20">
        <div className=" flex">
          <div className="grid grid-cols-2 w-[874px]  gap-4 mr-4  	">
            <img
              src={singleProduct?.image}
              className="rounded-tl-[48px]"
              alt=""
            />
            <img
              src={singleProduct?.image}
              className="rounded-tr-[48px]"
              alt=""
            />
            <img
              src={singleProduct?.image}
              className="rounded-bl-[48px]"
              alt=""
            />
            <img
              src={singleProduct?.image}
              className="rounded-br-[48px]"
              alt=""
            />
          </div>
          <div className="w-[430px]">
            <button className="py-3 bg-[#4A69E2]  px-4 text-xs	font-semibold  text-white	rounded-xl">
              New Release
            </button>
            <h2 className="font-semibold	text-[32px] my-4 uppercase">
              {singleProduct?.title}
            </h2>
            <p className="font-semibold text-[#4A69E2] text-2xl">
              ${singleProduct?.price}
            </p>
            {/* {colors?.map((color, index) => {
              console.log(color);
              return (
                <input
                  type="radio"
                  name="same"
                  key={index}
                  // onClick={() => setSelectedColor(color)}
                  className={`${color}  h-10 w-10 rounded-full ml-3 text-white `}
                ></input>
              );
            })} */}
            <div>
              <h1>Select a Color</h1>
              <div className="color-selector">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`color-option ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.code }}
                    // onClick={() => handleColorSelect(color)}
                  >
                    {selectedColor === color && (
                      <i className="fas fa-check"></i>
                    )}
                  </div>
                ))}
              </div>
              {selectedColor && (
                <p>
                  You've selected:{" "}
                  <span style={{ color: selectedColor.code }}>
                    {selectedColor.name}
                  </span>
                </p>
              )}
            </div>
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-option ${
                  selectedColor === color ? "selected" : ""
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && <i className="fas fa-check"></i>}
              </div>
            ))}
            <div className="">
              <div className="flex justify-between uppercase">
                <h4 className="font-semibold text-base	">size</h4>
                <Link className="text-sm font-medium	underline	">size chart</Link>
              </div>
              <div className="text-sm font-medium	flex flex-wrap text-center">
                <button className="h-12 w-[50.25px] bg-[#232321] text-white rounded-lg mt-1	mr-1">
                  71
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-[#D2D1D3] rounded-lg mt-1	mr-1">
                  31
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-[#D2D1D3] rounded-lg mt-1	mr-1">
                  15
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  13
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  16
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  12
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  13
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  16
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  41
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  11
                </button>{" "}
                <button className="h-12 w-[50.25px] bg-white rounded-lg mt-1	mr-1">
                  12
                </button>{" "}
              </div>
              <div className="">
                <Button
                  text={"Add To Cart"}
                  backgroundColor={"#232321"}
                  onClick={() => handleClick(singleProduct)}
                />
              </div>
            </div>
          </div>
        </div>
        <ProductSlider products={products} />
      </section>
    </>
  );
};

export default ProductDetail;
