import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import News from "./../../components/productCarousel/productCarousel";
import ImageViewer from "react-simple-image-viewer";
import Signin_Signup from "../../components/signin_signup/signin_signup";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import Cookie from "cookie-universal";
import { addToken } from "../../services/slices/tokenSlice";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Loader1 from "./../../components/Loader/loader1";

const Products = (props) => {
  const [classNamay, setClassNamay] = useState("fabric");
  const [products, setProducts] = useState();
  const [spinner, setSpinner] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [subCategory, setSubCategory] = useState({});

  const [token, setToken] = useState();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const location = useLocation();
  const cookies = Cookie();
  const lg = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const md = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const sm = useMediaQuery({ minWidth: 576, maxWidth: 767 });
  const xs = useMediaQuery({ maxWidth: 575 });
  const dispatch = useDispatch();

  const makeBlur = () => {
    setClassNamay("fabric blur");
  };

  const removeBlur = () => {
    setClassNamay("fabric");
  };

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setSpinner(true);
    axios
      .post(
        process.env.REACT_APP_AMAZON_SERVER_LINK + "products/getFromSlug",
        JSON.stringify({
          slug: location.pathname,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setClassNamay("fabric");
        setProducts(response.data);

        return axios
          .get(
            process.env.REACT_APP_AMAZON_SERVER_LINK + "subCategories/bySlug",
            {
              params: {
                subCategory: location.pathname,
              },
            }
          )
          .then(function (response) {
            setSubCategory(response.data);
            setSpinner(false);
            return axios
              .get(
                process.env.REACT_APP_AMAZON_SERVER_LINK +
                  "customerAuth/getToken"
              )
              .then(function (response) {
                if (response.data.token) {
                  cookies.set("eff_customer", response.data.token);
                  dispatch(addToken(response.data.token));
                  setToken(response.data.token);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location]);

  const getImages = () => {
    var images = [];
    products &&
      products.map((p) => {
        images.push(p.product_creative_image);
      });
    return images;
  };

  return spinner ? (
    <SierraLoader />
  ) : (
    <div className={classNamay}>
      <Navbar
        token={token}
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 description">
            <h1 className="sub-category-name">
              {subCategory && subCategory.subCategory_name}
              ..
            </h1>

            <p className="description-text">
              {subCategory.subCategory_description ? (
                subCategory.subCategory_description
              ) : (
                <Loader1 />
              )}
            </p>

            {subCategory && subCategory.pdf ? (
              <Signin_Signup
                label="Download Broucher"
                products={products && products[0]}
                style={{
                  background: "#d3a657e3",
                  borderRadius: "5px",
                  marginLeft: "15%",
                  color: "white",
                  padding: "2% 3%",
                  boxShadow: "0 2px 10px grey",
                  fontSize: "15px",
                  marginTop: "5%",
                  fontWeight: "400",
                  border: "none",
                }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 image">
            <img src={subCategory.subCategory_image} alt="life-style" />
          </div>
        </div>
      </div>

      {products && products.length !== 0 ? (
        <div className="container product-carousel">
          <h1 className="categories">Categories</h1>
          <center>
            <News
              openImageViewer={openImageViewer}
              data={products}
              md={md}
              lg={lg}
              sm={sm}
              xs={xs}
            />
          </center>
        </div>
      ) : (
        ""
      )}

      {isViewerOpen && (
        <ImageViewer
          src={getImages()}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
      <Footer />
    </div>
  );
};

export default Products;
