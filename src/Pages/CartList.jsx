import React, { useContext } from "react";
import { ShoppingCardContext } from "../context/Index";
import { useNavigate } from "react-router-dom";
import CardTile from "../Components/CardTile";

function CartList() {
  const { cardItems } = useContext(ShoppingCardContext);

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl  mx-auto max-md:max-w-xl  py-4">
      <h1 className="text-2xl font-bold  tex-gray-800  text-center">
        My card Page
      </h1>

      <div className="grid md:grid-cols-3 gap-8  mt-12">
        <div className="md:col-span-2  space-y-4">
          {cardItems?.length ? (
            cardItems.map((singleCardItem) => (
              <CardTile singleCardItem={singleCardItem} />
            ))
          ) : (
            <h1>No items Available in cart! </h1>
          )}
        </div>

        <div className="bg-gray-100  rounded-sm p-4  h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-">
            Order summery
          </h3>

          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap  gap-4 text-sm  font-bold">
              Total <span></span>
            </p>
          </ul>

          <div className="mt-5  space-y-2">
            <button className="text-sm px-4 py-4 text-white  font-extrabold bg-black mr-3 rounded-lg">
              CheckOut
            </button>
            <button
              onClick={() => navigate("/productlist")}
              className="text-sm px-4 py-4 text-white  font-extrabold bg-black  rounded-lg"
            >
              continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
