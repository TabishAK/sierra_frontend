import Navbar from "../../components/navbar/navbar";
import Footer from "./../../components/footer/footer";
import leadershipMainImage from "../../images/leadership/12.jpg";
import "./leadership.scss";
import { useState, useEffect } from "react";
import { GiJugglingSeal } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import { TiSocialAtCircular } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import img1 from "../../images/leadership/emp1.jpg";
import img2 from "../../images/leadership/emp2.jpg";
import img3 from "../../images/leadership/emp3.jpg";
import img4 from "../../images/leadership/emp4.jpg";
import aboutUs from "../../images/leadership/about-us.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HorseLoader from "../../components/Loader/horseLoader";
import SierraLoader from "./../../components/Loader/sierraLoader";
import axios from "axios";
const Leadership = (props) => {
  const [classNamay, setClassNamay] = useState("leadership");
  const [spinner, setSpinner] = useState(true);
  const [leadershipData, setLeadershipData] = useState();

  const makeBlur = () => {
    setClassNamay("leadership blur");
  };

  const removeBlur = () => {
    setClassNamay("leadership");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "facilities/")
      .then((response) => {
        setLeadershipData(response.data);
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
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />

      <div className="container">
        <h1 className="container-heading">{leadershipData.mainHeading}</h1>

        <center>
          <img src={leadershipMainImage} alt="" />
        </center>
      </div>

      <div className="who-are-we">
        <div className="container">
          <div className="who-are-we-question">
            <div className="heading">
              <h1>Who We Are ?</h1>
            </div>
            <div className="paragraph">
              <p>{leadershipData.whoAreWe}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <h1>Our Services</h1>

          <div className="row" style={{ justifyContent: "center" }}>
            {leadershipData.features.map((feat) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="panel">
                  <div className="svg">
                    <div className="icon">
                      <GiJugglingSeal />
                    </div>
                  </div>
                  <div className="text">
                    <h3>{feat.feature_name}</h3>
                    <p>{feat.feature_detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="our-team">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>Our Staff, Our Pride.</h5>
              <h1>
                Our tenacious designers are the brains behind the creation of
                our materials.
              </h1>
              <p>
                Our designers are the very identity of Sierra Textiles and
                Fabrics. Their potent skills and expertise facilitate the
                materialization of our fine production.
              </p>
              <h2 style={{ marginBottom: "2rem" }}>
                Here are some of our great skills
              </h2>
              <h6> Sketching</h6>
              <div class="bar learning"></div>
              <h6>Painting</h6>
              <div class="bar back basic"></div>
              <h6>Color Mixing</h6>
              <div class="bar back intermediate"> </div>
              <h6>Proportion</h6>
              <div class="bar front advanced"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img1} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img2} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img3} alt="" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-xl-6">
              <img src={aboutUs} alt="" />
            </div>
            <div className="col-xl-6">
              <h1>About Us</h1>
              <p className="below-about-us-heading">
                Our brand has received national acclaim for its textile
                cultivation and contribution to the creative industry. We have
                transitioned from a startup to an enterprise at an accelerated
                pace
              </p>

              {leadershipData.about_company.map((ac) => (
                <div className="heading-for-about">
                  <h4 className="about-us-section-heading">
                    <AiOutlineInfoCircle
                      style={{
                        position: "relative",
                        top: "-3px",
                        marginRight: "5px",
                      }}
                    />
                    {ac.about_main}
                  </h4>
                  <p>{ac.main_description}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;
