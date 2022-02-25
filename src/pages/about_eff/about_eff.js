import Section1 from "../../components/about_eff_components/section1";
import Section2 from "../../components/about_eff_components/section2";
import Section3 from "../../components/about_eff_components/section3";
import "../../components/about_eff_components/style.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./about_eff.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import axios from "axios";

const AboutEFF = (props) => {
  const [classNamay, setClassNamay] = useState("about-eff");
  const [spinner, setSpinner] = useState(true);
  const [aboutData, setAboutData] = useState();

  const makeBlur = () => {
    setClassNamay("about-eff blur");
  };

  const removeBlur = () => {
    setClassNamay("about-eff");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "aboutUs/")
      .then((response) => {
        setAboutData(response.data);
        console.log(response.data);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Sidebar display={props.display} closeRightMenu={props.closeRightMenu} />

      <div className="container">
        <Section1 para1={aboutData.para1} />
        <Section2 para2={aboutData.para2} />
        <Section3 para3={aboutData.para3} />
        {/* <Section4 para4={aboutData.para4} />
        <Section5 para5={aboutData.para5} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutEFF;
