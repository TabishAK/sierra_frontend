import Navbar from "../../components/navbar/navbar";
import "./sourcing-and-development.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import { useLocation } from "react-router-dom";
import {
  FcPlanner,
  FcAdvertising,
  FcCustomerSupport,
  FcCheckmark,
} from "react-icons/fc";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import processImage from "../../images/4.jpg";

import {
  MdOutlinePrecisionManufacturing,
  MdOutlineDesignServices,
} from "react-icons/md";
import { GiSharpShuriken } from "react-icons/gi";
import axios from "axios";
import { Helmet } from "react-helmet";

const SourcingAndDevelopment = (props) => {
  const sourcingService = [
    {
      id: 1,
      serviceName: "Fabric sourcing",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <MdOutlinePrecisionManufacturing />,
    },
    {
      id: 2,
      serviceName: "Design",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 3,
      serviceName: "Celerity",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <GiSharpShuriken />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "PLANNING", icon: <FcPlanner /> },
    { id: "02", name: "SOURCING", icon: <FcAdvertising /> },
    { id: "03", name: "DESIGNING AND TESTING", icon: <FcCustomerSupport /> },
    { id: "04", name: "LAUNCH", icon: <FcCheckmark /> },
  ];

  const [classNamay, setClassNamay] = useState("sourcing-and-development");
  const [spinner, setSpinner] = useState(true);
  const [serviceData, setServiceData] = useState(true);

  const location = useLocation();

  const makeBlur = () => {
    setClassNamay("sourcing-and-development blur");
  };

  const removeBlur = () => {
    setClassNamay("sourcing-and-development");
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
      </Helmet>
      <div className={classNamay}>
        <Navbar
          st={props.st}
          openRightMenu={props.openRightMenu}
          makeBlur={makeBlur}
          removeBlur={removeBlur}
        />
        <h1 className="service-name">Sourcing and Product Development</h1>
        <Services
          mainParagraph={serviceData.mainParagraph}
          sourcingService={serviceData.services}
        />

        <div className="process-img">
          <h1 className="our-process">Our Process</h1>

          <div className="img-and-text">
            <img src={processImage} alt="" />

            {serviceData.process.map((sp, i) => (
              <div className={`development-process-${i + 1}`}>
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

export default SourcingAndDevelopment;
