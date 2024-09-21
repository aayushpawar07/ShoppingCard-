import React, { useContext } from "react";
import { ShoppingCardContext } from "../context/Index";
import { list } from "postcss";
import ProductTile from "../Components/ProductTile";
// import { loadConfigFromFile } from 'vite';

function ProductList() {
  const { listofProducts, loading } = useContext(ShoppingCardContext);

  console.log(listofProducts);

  if (loading) return <h1> Loading your data please wait.....</h1>;

  return (
    <>
      <section className="py-12  bg-white  sm:py-16  lg:py-20">
        <div className="px-4  mx-auto  sm:px-6 lg-px-8  max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
              our Features Products
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8  lg:grid-cols-4   ">
            {listofProducts && listofProducts.length > 0 ? (
              listofProducts.map((singleProductTile) => (
                <ProductTile singleProductTile={singleProductTile} />
              ))
            ) : (
              <h3>No product found</h3>
            )}
          </div>
        </div>
      </section>
    </>
  );
}


export default ProductList;