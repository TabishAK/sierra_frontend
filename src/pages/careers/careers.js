import CareerBanner from "../../components/careerBanner/careerBanner";
import Eff_Benefits from "../../components/eff_benfits/eff_benefits";
import SierraLoader from "./../../components/Loader/sierraLoader";
import JobOpening from "../../components/jobOpening/jobOpening";
import Navbar from "./../../components/navbar/navbar";
import Footer from "./../../components/footer/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./careers.scss";
import { Helmet } from "react-helmet";

const Careers = (props) => {
  const [classNamay, setClassNamay] = useState("careers");
  const [spinner, setSpinner] = useState(false);
  const [careersData, setCareersData] = useState();

  const makeBlur = () => {
    setClassNamay("careers blur");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "careers/")
      .then((response) => {
        setCareersData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeBlur = () => {
    setClassNamay("careers");
  };

  return spinner ? (
    <SierraLoader />
  ) : (
    <>
      <Helmet>
        <title>Sierra Textiles - Careers</title>
        <meta name="description" content={careersData?.firstPara} />
        <meta
          name="keywords"
          content="BENEFITS OF BEING SIERRA EMPLOYEE, Sierra Jobs, jobs, careers, opportunity, full time, designation, Sierra textiels jobs"
        />
        <link
          rel="canonical"
          href="https://www.sierratextiles.com.pk/careers"
        />
      </Helmet>
      <div className={classNamay}>
        <Navbar
          st={props.st}
          openRightMenu={props.openRightMenu}
          makeBlur={makeBlur}
          removeBlur={removeBlur}
        />

        <CareerBanner paragraph={careersData && careersData.firstPara} />
        <Eff_Benefits benefits={careersData && careersData.benefits} />
        <hr />
        <JobOpening jobs={careersData && careersData.jobs} />
        <Footer />
      </div>
    </>
  );
};

export default Careers;
