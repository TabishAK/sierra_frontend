import SierraLoader from "./../../components/Loader/sierraLoader";
import Button1 from "./../../components/buttons/button1";
import facilities3 from "../../images/facilities/3.jpeg";
import facilities2 from "../../images/facilities/2.jpg";
import facilities from "../../images/facilities/1.jpg";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import map_img from "../../images/facilities/4.png";
import { RiGovernmentLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import "./facilities.scss";
import {
  GiHealthPotion,
  GiCommercialAirplane,
  GiGreenhouse,
} from "react-icons/gi";
import {
  MdOutlineCastForEducation,
  MdOutlineRestaurantMenu,
} from "react-icons/md";

const Facilities = (props) => {
  const [classNamay, setClassNamay] = useState("facilities");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  });

  const makeBlur = () => {
    setClassNamay("facilities blur");
  };

  const removeBlur = () => {
    setClassNamay("facilities");
  };

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

      <div className="image-with-two-div">
        <div className="container">
          <h1>Facilities in Sierra Textiles</h1>
          <center>
            <img className="building" src={facilities} alt="" />
          </center>
        </div>

        <div className="container two-div">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 right">
              <div className="women">
                <img src={facilities2} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 left">
              <div className="text-div">
                <p>
                  We have plenty of space and other benefits available for you
                  to prosper in with convenience.
                </p>

                <Button1 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container construction-and-co">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12 text-middle">
            <h1>Sierra’s History</h1>

            <h3>
              We has a proud tradition of service <br />
              since 2007
            </h3>
            <p>
              We were established in 2007 and have built a reputation for
              delivering out of the box fabrics that have given new life to
              clients belonging to a myriad of households. We have catered to
              thousands of clients with inventive projects that are as artistic
              as they are enigmatic.
            </p>

            <Button1 />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-sm-12 img">
            <img src={facilities3} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="certifications">
        <div className="container ">
          <h3>What we do</h3>
          <h1>Company Certifications</h1>
          <p className="certification-text">
            Our company offers a variety of services to meet your project’s
            needs, to take you from collaboration meetings all the way to
            ribbon-cutting and beyond. We believe that every project is unique,
            and can customize our approach to fit your particular project.
          </p>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiHealthPotion />
              <h2>Insurance Health and Wellness</h2>
              <p>
                We provide dental, vision and other health insurance options.
                Complementary insurance is included as well.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiGreenhouse />
              <h2>Paternal Leave</h2>
              <p>
                Both mothers and fathers have the privilege of taking leave to
                tend to their family.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <RiGovernmentLine />
              <h2>Financial Retirement </h2>
              <p>
                You have complete freedom to choose your period to retire in and
                gain benefits
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <GiCommercialAirplane />
              <h2> Vacation and Time Off</h2>
              <p>
                You can take paid leave or time off for relaxation or vacation
                purposes.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <MdOutlineRestaurantMenu />

              <h2>Perks and Discounts</h2>
              <p>Lunch and Food breaks with membership.</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-sm-12">
              <MdOutlineCastForEducation />

              <h2>Professional Support</h2>
              <p>We provide open contact with management with transparency.</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="world-team">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img src={map_img} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3>Team Sierra Textiles</h3>
              <h1>Searching for Work?</h1>

              <p>
                Join Sierra Textiles and Fabrics and expand your potential with
                our entrepreneurial endeavors and become part of the acclaimed
                enterprise. All you need to have is commitment, faith and desire
                to succeed. Send us your resume.
              </p>

              <Button1 />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facilities;
