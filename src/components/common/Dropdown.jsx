import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = (props) => {
  const { title, type, option, onChange, setSelectedCategory } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const randerOption = () => {
    // Refine By
    if (title === "Refine by") {
      return (
        <div className="flex gap-3 flex-wrap">
          {option.length !== 0 && (
            <button
              className=" font-semibold rounded-xl text-center py-3 text-white bg-[#4A69E2] text-xs h-[38px] px-4"
              onClick={() => {
                setSelectedCategory([]);

                option.length = 0;
              }}
            >
              clear all
            </button>
          )}

          {option.map((item, index) => {
            return (
              <div key={index} className="">
                <p className="font-semibold text-xs h-[38px] text-center py-3 text-white w-fit  rounded-xl px-4 bg-[#4A69E2]">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      );
    }

    // checkbox
    if (type === "checkbox" && title === "Category") {
      return option.map((item) => {
        return (
          <>
            <input
              type={type}
              id={item}
              name={item}
              value={item}
              onChange={onChange}
            />
            <label for={item}> {item}</label>
            <br />
          </>
        );
      });
    } else if (type === "checkbox") {
      return option.map((item) => {
        return (
          <>
            <input
              type={type}
              id={item.label}
              name={item.label}
              value={item.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label for={item.label}> {item.label}</label>
            <br />
          </>
        );
      });
    }

    // range
    if (type === "range") {
      return (
        <>
          <input
            className="w-full h-1.5   bg-black appearance-none  rounded-full   block"
            type={type}
            id={option.label}
            name={option.label}
            min="0"
            max="1000"
            value={option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label
            for={option.label}
            className="flex justify-between	items-center"
          >
            ${option[0].label} <span>$1000</span>
          </label>
        </>
      );
    }
  };

  return (
    <div className="pt-6">
      <div
        onClick={toggleDropdown}
        className="flex justify-between	items-center	"
      >
        <span className="uppercase text-base font-semibold">{title}</span>
        <span>
          {isOpen ? (
            <IoIosArrowUp className="h-5 w-5  " />
          ) : (
            <IoIosArrowDown className="h-5 w-5  " />
          )}
        </span>
      </div>
      {isOpen && <div className="  pt-4  z-10">{randerOption()}</div>}
    </div>
  );
};

export default Dropdown;

// const [selectedOptions, setSelectedOptions] = useState([]);

// const handleOptionChange = (event) => {
//   const value = event.target.value;
//   if (selectedOptions.includes(value)) {
//     setSelectedOptions(selectedOptions.filter((option) => option !== value));
//   } else {
//     setSelectedOptions([...selectedOptions, value]);
//   }

//   // Pass the selected options to the parent component
//   onChange(selectedOptions);
// };
