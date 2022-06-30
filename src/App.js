import { useState } from "react";
import "./App.css";
import ComponentGrid from "./components/ComponentGrid/ComponentGrid";
import SizeFilter from "./components/filter/SizeFilter";

function App() {
  const [products, setProducts] = useState();

  return (
    <div className="App">
      <div className="container">
        <SizeFilter />
        <ComponentGrid />
      </div>
    </div>
  );
}

export default App;
