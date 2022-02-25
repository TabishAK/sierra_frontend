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
  );
};

export default Home;
