import React, { useContext } from "react";
import { ShoppingCardContext } from "../context/Index";

function CardTile({ singleCardItem }) {
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-center gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400  p-1  rounded-sm">
            <img
              src={singleCardItem?.thumbnail}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {singleCardItem?.title}
            </h3>
            <button className="text-sm px-4 py-4 text-white  font-extrabold bg-black  rounded-lg mt-4">
              {" "}
              Remove
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${singleCardItem?.totalPrice.toFixed(2)}
          </h3>
          <div>
            <button className="border border-[#000] pl-2 pr-2  mt-3 mr-2 font-bold text-xl rounded-sm">
              -
            </button>
            <button className="border border-[#000] pl-2 pr-2  mt-3 text-xl rounded-sm">
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </>
  );
}

export default CardTile;
