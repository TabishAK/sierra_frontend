import ShowBrandsButton from "../../components/showBrandsButton/showBrandsButton";
import logo from "../../images/logo_updated/sierra.png";

import "./informationPanel.scss";
import InfoPanelImageSection from "./../info-panel-image-section/info-panel-image-section";
import { useEffect, useState } from "react";
import axios from "axios";

const InformationPanel = () => {
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
    <div className="container information-panel">
      <center>
        <img className="logo-black" src={logo} alt="eff" />
      </center>

      <p>{homeData && homeData.para_below_logo}</p>

      <InfoPanelImageSection homeData={homeData} />
    </div>
  );
};

export default InformationPanel;
