import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ComponentGrid from "./components/ComponentGrid/ComponentGrid";
import SizeFilter from "./components/filter/SizeFilter";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(null);

  const [filterproduct, setFilterproduct] = useState([]);

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
      );
      setProducts(response.data);
      setFilterproduct(response.data);
    };

    fetchProducts();
  }, []);

  const onFilterSelectHandler = (filterValue) => {
    switch (filterValue) {
      case "XS":
        setFilter("xsmall");
        break;
      case "S":
        setFilter("small");
        break;
      case "L":
        setFilter("large");
        break;
      default:
        setFilter(null);
    }
  };

  useEffect(() => {
    const updatedItems = filterproduct.filter((product) => product.details.size === filter);

    // console.log(updatedItems);
    setProducts(updatedItems);
  }, [filter]);

  const onClickAddToCartHandler = (productId) => {
    const cartItem = products.find((e) => {
      return e.id === productId;
    });
    const newArray = [...cartList, cartItem];
    setCartList(newArray);
  };

  const onCartRemoveHandler = (cartId) => {
    // const cartRemoveItem = cartList.find((e) => {
    //   return e.id === cartId;
    // });
    // const newArray = [...cartList, cartRemoveItem];
    // setCartList(newArray);
    const cartArray = cartList.filter((item) => item.id !== cartId);
    console.log(cartArray);
    setCartList(cartArray);
  };

  const onClickCartOpenHandler = (e) => {
    e.preventDefault();
    console.log("haha");
    document.getElementById("cartContainer").style.width = "35vw";
  };

  return (
    <div className="App">
      <ShoppingCart cartItems={cartList} onCartRemove={onCartRemoveHandler} />
      <div className="cart_container">
        <div>
          <p className="p_div">p</p>
        </div>
        <button className="cart_button" onClick={onClickCartOpenHandler}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
        </button>
      </div>
      <div className="container">
        <SizeFilter onFilterSelect={onFilterSelectHandler} />
        <ComponentGrid
          productItems={products}
          count={products.length}
          onClickAddToCart={onClickAddToCartHandler}
        />
      </div>
    </div>
  );
}

export default App;
