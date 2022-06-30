import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ComponentGrid from "./components/ComponentGrid/ComponentGrid";
import SizeFilter from "./components/filter/SizeFilter";

function App() {
  const [products, setProducts] = useState([]);

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
      );
      console.log(response);
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const onFilterSelectHandler = (filterValue) => {
    setFilter(filterValue);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("fak");
    };

    fetchProducts();
  }, [filter]);

  return (
    <div className="App">
      <div className="container">
        <SizeFilter onFilterSelect={onFilterSelectHandler} />
        <ComponentGrid productItems={products} />
      </div>
    </div>
  );
}

export default App;
