import React, { useState, useEffect } from "react";
import Dropdown from "./common/Dropdown";
import { useData } from "../hooks/useData";

export const Filters = () => {
  const { products, setFilteredProducts } = useData();
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRange, setSelectedRange] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);

  function handleChange(e) {
    if (e.target.checked) {
      setSelectedCategory([...selectedCategory, e.target.value]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((item) => item !== e.target.value)
      );
    }
  }

  // -------------------------refineBy-------------------------
  const refineBy = [...selectedCategory];

  // -------------------------categoryCheckboxOptions-------------------------

  const category = [
    ...new Map(products.map((i) => [i.category, i])).values(),
  ].map((item) => item.category);

  const genderCheckboxOptions = [
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
    // Add more options as needed
  ];

  const rangeOptions = [
    { label: +selectedRange, value: "1000" },

    // Add more options as needed
  ];

  const handleAllFilters = () => {
    // ------------------ filter by range -------------------
    if (+selectedRange > 0) {
      const rangeFilter = products.filter((item) => {
        return item.price >= 0 && item.price <= +selectedRange;
      });
      setFilteredProducts(rangeFilter);
    } else {
      setFilteredProducts(products);
    }

    // ------------------- filter by category ------------------------
    if (selectedCategory.length > 0) {
      let tempItems = selectedCategory.map((selectedCategory) => {
        let temp = products.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredProducts(tempItems.flat());

      // setProducts(categoryFilter)
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    handleAllFilters();
  }, [selectedRange, selectedCategory]);

  return (
    <div className=" w-80 pr-4">
      <h2 className="text-2xl font-semibold pt-7">Filters</h2>
      <Dropdown
        title={"Refine by"}
        option={refineBy}
        setSelectedCategory={setSelectedCategory}
      />
      <Dropdown title={"size"} option={[]} />
      <Dropdown title={"Color"} option={[]} />
      <Dropdown
        title={"Category"}
        option={category}
        onChange={handleChange}
        type={"checkbox"}
      />
      <Dropdown
        title={"Gender"}
        option={genderCheckboxOptions}
        type={"checkbox"}
        onChange={setSelectedGender}
      />
      <Dropdown
        title={"price"}
        option={rangeOptions}
        type={"range"}
        onChange={setSelectedRange}
      />
    </div>
  );
};
