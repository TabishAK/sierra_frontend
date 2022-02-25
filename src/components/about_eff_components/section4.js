import history_1 from "../../images/about_eff/history/1.jpg";
import history_2 from "../../images/about_eff/history/2.jpg";

const Section4 = (props) => {
  return (
    <div className="section-4 mt-5">
      <h1>History</h1>
      <p className="mt-3">{props.para4}</p>

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <img src={history_1} alt="" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <img src={history_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
