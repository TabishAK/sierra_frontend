import Navbar from "../../components/navbar/navbar";
import "./production-and-quality.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import { useLocation } from "react-router-dom";
import processImage from "../../images/4.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

const ProductionAndQuality = (props) => {
  const [classNamay, setClassNamay] = useState("production-and-quality");
  const [spinner, setSpinner] = useState(true);
  const [serviceData, setServiceData] = useState(true);
  const location = useLocation();

  const makeBlur = () => {
    setClassNamay("production-and-quality blur");
  };

  const removeBlur = () => {
    setClassNamay("production-and-quality");
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "services/byParams", {
        params: {
          slug: location.pathname,
        },
      })
      .then((response) => {
        setServiceData(response.data);
        setSpinner(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return spinner ? (
    <SierraLoader />
  ) : (
    <>
      <Helmet>
        <title>Sierra Textiles - Services</title>
        <meta name="description" content={serviceData?.mainParagraph} />
        <meta name="keywords" content="Production and Quality Control" />
      </Helmet>

      <div className={classNamay}>
        <Navbar
          st={props.st}
          openRightMenu={props.openRightMenu}
          makeBlur={makeBlur}
          removeBlur={removeBlur}
        />

        <h1 className="service-name">Production and Quality Control</h1>

        <Services
          mainParagraph={serviceData.mainParagraph}
          sourcingService={serviceData.services}
        />

        <div className="process-img">
          <h1 className="our-process">Our Process</h1>

          <div className="img-and-text">
            <img src={processImage} alt="" />

            {serviceData &&
              serviceData.process.map((sp, i) => (
                <div className={`production-process-${i + 1}`}>
                  <h1>{sp.process_name}</h1>
                  <p>{sp.process_description}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="container">
          <InfoPanelImageSection />
        </div>

        <ContactForm capabilities={serviceData.capabilities} />

        <Footer />
      </div>
    </>
  );
};

export default ProductionAndQuality;
