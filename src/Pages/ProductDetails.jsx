import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCardContext } from "../context/Index";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { productDetails, setProductDetails, loading, setLoading , handleAddToCart } =
    useContext(ShoppingCardContext);

  async function fetchProductDetails() {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();

      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // function handleGotocard() {
  //   navigate("/cart");
  // }

  if (loading) return <h1>Loading Product details Please wait......</h1>;

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                src={productDetails?.thumbnail}
                alt="product"
                className="w-4/5 rounded object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.length
                ? productDetails.images.map((imageItem, index) => (
                    <img
                      key={index}
                      src={imageItem}
                      alt={`product-${index}`}
                      className="w-1/4 rounded object-cover"
                    />
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {" "}
              {productDetails?.title}
            </h2>
            <div className="flex fled-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productDetails?.price} </p>
            </div>
            <div>
              <button
                onClick={()=>handleAddToCart(productDetails)}
                className="min-w-[200px] px-4 py-3 border  border-[#333] bg-transparent font-sm   font-semibold rounded mt-4"
              >
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
