import { fetchSubcategories } from "../src/services/slices/subCategorySlice";
import { fetchMaincategories } from "./services/slices/mainCategorySlice";
import "../node_modules/video-react/dist/video-react.css";
import Sideba from "./components/sidebar/sidebar";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/media_query.scss";
import "./App.scss";
import Routes from "./Routes";

function App() {
  const [display, setDisplay] = useState(false);
  const [selectedProd, setSelectedProd] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubcategories());
    dispatch(fetchMaincategories());
  }, [dispatch]);

  const openRightMenu = () => {
    setDisplay(true);
  };
  const selectProduct = (p) => {
    setSelectedProd(p);
  };

  const closeRightMenu = () => {
    setDisplay(false);
  };

  return (
    <div className="App">
      <Sideba display={display} closeRightMenu={closeRightMenu} />

      <Routes
        display={display}
        openRightMenu={openRightMenu}
        closeRightMenu={closeRightMenu}
        selectProduct={selectProduct}
        selectedSubCategory={selectedSubCategory}
        selectedProd={selectedProd}
      />
    </div>
  );
}

export default App;
