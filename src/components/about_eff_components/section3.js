import sierra_group1 from "../../images/about_eff/eff_groups/1.jpg";
import sierra_group2 from "../../images/about_eff/eff_groups/2.jpg";
import sierra_group3 from "../../images/about_eff/eff_groups/3.jpg";
import sierra_group4 from "../../images/about_eff/eff_groups/4.jpg";
import sierra_group5 from "../../images/about_eff/eff_groups/5.jpg";
import sierra_group6 from "../../images/about_eff/eff_groups/6.jpg";
import sierra_group7 from "../../images/about_eff/eff_groups/7.jpg";
import sierra_group8 from "../../images/about_eff/eff_groups/8.jpg";
import sierra_group9 from "../../images/about_eff/eff_groups/9.jpg";
import sierra_group10 from "../../images/about_eff/eff_groups/10.jpg";
import sierra_group11 from "../../images/about_eff/eff_groups/11.jpg";
import sierra_group12 from "../../images/about_eff/eff_groups/12.jpg";

import "./style.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Section3 = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={props.para3} />
        <meta
          name="keywords"
          content="Concerning the Individual Fabric Groups"
        />
      </Helmet>

      <div className="section-3 mt-5">
        <h1>Concerning the Individual Fabric Groups</h1>

        <p className="mt-4">{props.para3}</p>
        <div className="row mt-5">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/hotel_blackout_curtains">
              <img src={sierra_group1} alt="blackout_curtains"></img>
            </Link>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/cotton_curtains">
              <img src={sierra_group2} alt="cotton_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/designer_curtains">
              <img src={sierra_group3} alt="designer_silk_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/faux_silk_curtains">
              <img src={sierra_group4} alt="faux_silk_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            {/* <Link to=""> */}
            <img src={sierra_group5} alt="hardware"></img>
            {/* </Link> */}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/linen_curtains">
              <img src={sierra_group6} alt="linen_curtains"></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/sheer_curtains">
              <img src={sierra_group7} alt="sheer_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/signature_silk_curtains">
              <img src={sierra_group8} alt="signature_silk_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="">
              <img src={sierra_group9} alt="solid_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/velvet_curtains">
              <img src={sierra_group10} alt="velvet_curtains"></img>
            </Link>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            {/* <Link to=""> */}
            <img src={sierra_group11} alt="window_shades"></img>
            {/* </Link> */}
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
            <Link to="/bed_sheets">
              <img src={sierra_group12} alt="bedding"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
