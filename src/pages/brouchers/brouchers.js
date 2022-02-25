import Signin_Signup from "./../../components/signin_signup/signin_signup";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Navbar from "./../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./brouchers.scss";
import axios from "axios";
require("dotenv").config();

const Brouchers = (props) => {
  const [classNamay, setClassNamay] = useState("brouchers");
  const [categories, setCategories] = useState();
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("brouchers blur");
  };

  const removeBlur = () => {
    setClassNamay("brouchers");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "subCategories/")
      .then((response) => {
        setCategories(response.data);
        setSpinner(false);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return spinner ? (
    <SierraLoader />
  ) : (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container broucher-heading">
        <h1>Sierra Textile's Brouchers</h1>
      </div>

      <div className="container broucher-card">
        <div className="row">
          {categories &&
            categories.map((c) =>
              c.subCategory_image ? (
                <div className="col-xl-4 col-lg-4 col-md-6 mb-5">
                  <center>
                    <p className="sub-cat-name">{c.subCategory_name}</p>
                  </center>

                  <div class="image">
                    <img
                      class="image__img"
                      src={c.subCategory_image}
                      alt="Bricks"
                    />
                    <div class="image__overlay">
                      <div class="image__title">{c.subCategory_name}</div>
                    </div>
                  </div>

                  <span className="mt-3">
                    <Signin_Signup
                      products={c}
                      style={{
                        background: "#d3a657e3",
                        borderRadius: "5px",
                        marginLeft: "0",
                        color: "white",
                        padding: "2% 3%",
                        boxShadow: "0 2px 10px grey",
                        fontSize: "15px",
                        marginTop: "3%",
                        fontWeight: "400",
                        border: "none",
                      }}
                    />
                  </span>
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brouchers;
