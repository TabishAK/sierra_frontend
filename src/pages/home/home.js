import InformationPanel from "../../components/information_panel/informationPanel";
import NewsLetterSub from "../../components/newsLetterSub/newsLetterSub";
import MoreOptions from "../../components/moreOptions/moreOptions";
import TopCarousel from "./../../components/carousel/carousel";
import { addToken } from "../../services/slices/tokenSlice";
import Navbar from "./../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import horseGIF from "../../images/horse.gif";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookie from "cookie-universal";
import React from "react";
import axios from "axios";
import "./home.scss";
import SierraLoader from "./../../components/Loader/sierraLoader";
import { Helmet } from "react-helmet";

const Home = (props) => {
  const [banner, setBanner] = useState();
  const [spinner, setSpinner] = useState(true);
  const cookies = Cookie();
  const dispatch = useDispatch();
  const [classNamay, setClassNamay] = useState("home");

  const makeBlur = () => {
    setClassNamay("home blur");
  };

  const removeBlur = () => {
    setClassNamay("home");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "banner/")
      .then((response) => {
        setBanner(response.data[0]);
        setSpinner(false);
        return axios
          .get(
            process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/getToken"
          )
          .then(function (response) {
            if (response.data.token) {
              cookies.set("eff_customer", response.data.token);
              dispatch(addToken(response.data.token));
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((error) => console.log(error.response));
  }, []);

  return spinner ? (
    <SierraLoader />
  ) : (
    <>
      <Helmet>
        <title>Sierra Textiles - Home</title>
        <meta
          name="description"
          content="Sierra Textiles and Fabrics has become the manifestation of a multigenerational brand in Pakistan that caters a diverse audience in accordance with the ever-changing globalized ecosystem. It has been credited for its orthodox and indigenous designs woven to perfection by our cosmopolitan design crew. The artistry mastered by our designers is imprinted in our fabric materials rich with original color palette. Sierra Textiles and Fabrics has established its foothold within the design industry as a trailblazing entity that is geared to spearhead clothing style and aesthetic to its pinnacle."
        />
        <meta
          name="keywords"
          content="Textile, fabrics, Cotton, Linen, Blackout,"
        />
      </Helmet>
      <div className={classNamay}>
        <Navbar
          st={props.st}
          openRightMenu={props.openRightMenu}
          makeBlur={makeBlur}
          removeBlur={removeBlur}
        />
        <TopCarousel banner={banner} />
        <InformationPanel />
        <NewsLetterSub />
        {/* <MoreOptions /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
