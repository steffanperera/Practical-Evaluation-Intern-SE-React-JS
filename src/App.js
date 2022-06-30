import "./App.css";
import ComponentGrid from "./components/ComponentGrid/ComponentGrid";
import FilterButton from "./components/filter/FilterButton";
import SizeFilter from "./components/filter/SizeFilter";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SizeFilter />
        <ComponentGrid />
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default App;
