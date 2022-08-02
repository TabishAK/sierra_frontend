import "./info-panel-image-section.scss";
import roklin from "../../images/logo/roklin.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const InfoPanelImageSection = () => {
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "homePageContent/")
      .then((response) => {
        setHomeData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row info-panel-images">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-1">
        <div id="all" style={{height: "100%"}}>
          <div className="view view-first">
            <img src={roklin} alt="" />

            <div className="mask">
              <h2>Roklin</h2>
              <p>
                External household spaces are rapidly transitioning into a
                sanctum exuding style and sophistication. These fashionable
                havens are an amalgamation of quality and longevity.
              </p>
              <Link to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-2">
        <img src={homeData && homeData.image_2} alt="fm" />
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-3">
        <img src={homeData && homeData.image_3} alt="fo" />
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 card-4">
        <img src={homeData && homeData.image_1} alt="fa" />
      </div>
    </div>
  );
};

export default InfoPanelImageSection;
