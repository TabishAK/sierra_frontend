import img2 from "../../images/about_eff/backgrounds/about_bg2.jpg";
import img1 from "../../images/about_eff/backgrounds/about_bg.jpg";
import "./style.scss";
import { Helmet } from "react-helmet";

const Section2 = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={props.para2} />
      </Helmet>
      <div className="section-2">
        <h1>Connoisseurs of Fabric Infrastructure</h1>
        <p className="mt-3">{props.para2}</p>

        <div className="row mt-5">
          <div className="col-xl-6">
            <img alt="" src={img1} />
          </div>
          <div className="col-xl-6">
            <img alt="" src={img2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
