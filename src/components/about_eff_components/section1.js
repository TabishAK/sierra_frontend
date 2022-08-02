import { Helmet } from "react-helmet";
import logo from "../../images/logo/eff_black.png";
import "./style.scss";

const Section1 = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={props.para1} />
      </Helmet>{" "}
      <div className="row section-1">
        <div className="col-lg-6 col-xl-6">
          <h1 className="mb-3">About Sierra</h1>

          <p className="para-without-image">{props.para1}</p>
        </div>
        <div className="col-lg-6 col-xl-6 bg-1"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Section1;
