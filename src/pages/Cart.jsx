import React from "react";

const Cart = () => {
  const cartItems = localStorage.getItem("cart");
  console.log("cartItems", cartItems);

  return (
    <section className="min-h-screen px-3 md:px-14  text-[#232321]	 bg-[#E7E7E3]">
      <div className="font-semibold my-6 ">
        <h2 className="text-xl md:text-[34px]">Saving to celebrate </h2>
        <p className="text-[10px] md:text-[14px] my-2">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <h5 className="text-sm">Join us or Sign-in</h5>
      </div>
      <div className="bg-white h-[306px] p-4 w-[338px] md:h-[389px] md:w-[781.82px] rounded-2xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          tempore. Dolore ipsam in quod mollitia quibusdam, expedita quaerat
          obcaecati dolor, incidunt voluptatibus harum! Totam velit repellendus
          neque maxime libero animi.
        </p>
      </div>
      {JSON.parse(cartItems)?.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="">{item.title}</div>
            <div className=""></div>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
