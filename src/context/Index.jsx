import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCardContext = createContext(null);

function ShoppingCardProvider({ children }) {
    const [loading, setLoading] = useState(true);  // Start with loading as true
    const [listofProducts, setListofProducts] = useState([]);
const[productDetails , setProductDetails] = useState(null);

const [cardItems  , setcardItem] = useState([]);
    

const navigate = useNavigate();

    async function fetchListofProducts() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products');
            const result = await apiResponse.json();
            setListofProducts(result.products);
            console.log("Fetched Products:", result.products);
        } catch (e) {
            console.log("Error fetching products:", e);
        } finally {
            setLoading(false);  // Set loading to false after fetch
        }
    }

    function handleAddToCart(getProductDetails){
      console.log(getProductDetails);

      let copyExistingCardItem = [...cardItems];
      const findIndexofCurrentItem = copyExistingCardItem.findIndex(cardItems => cardItems.id === getProductDetails.id);

      console.log(findIndexofCurrentItem);

      if(findIndexofCurrentItem === -1){
        copyExistingCardItem.push({...getProductDetails,
            quantity : 1,
          totalPrice : getProductDetails?.price
     });
      }else{
    
             
      }
      
      console.log(copyExistingCardItem);
      setcardItem(copyExistingCardItem);

      localStorage.setItem('cartItems' , JSON.stringify(copyExistingCardItem));
      navigate("/cart");
    }

    useEffect(() => {
        fetchListofProducts();
    }, []);


    console.log(cardItems);
    

    return (
        <ShoppingCardContext.Provider value={{ listofProducts, 
        loading,
         productDetails, 
         setLoading,
         setProductDetails,
         handleAddToCart,
         cardItems, 
         }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export default ShoppingCardProvider;
