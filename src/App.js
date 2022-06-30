import "./App.css";
import ComponentGrid from "./components/ComponentGrid/ComponentGrid";
import SizeFilter from "./components/filter/SizeFilter";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <SizeFilter />
          <ComponentGrid />
        </div>
      </div>
    </Provider>
  );
}

export default App;
