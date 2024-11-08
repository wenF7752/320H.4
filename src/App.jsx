import ToolBar from "../Components/ToolBar";
import FilterableProductTable from "../Components/FilterableProductTable";
import PRODUCTS from "../data/produces";

import "./App.css";

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />

      <br />

      <ToolBar />
    </>
  );
}

export default App;
