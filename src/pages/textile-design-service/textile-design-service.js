import Navbar from "../../components/navbar/navbar";
import "./textile-design-service.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import OurProcess from "./../../components/our-process/our-process";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import { FaSketch } from "react-icons/fa";
import { MdGraphicEq, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { AiOutlineSketch } from "react-icons/ai";
import { GiMedievalBarracks } from "react-icons/gi";
import { HiPresentationChartLine } from "react-icons/hi";
import processImage from "../../images/4.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

const TextileDesignService = (props) => {
  const sourcingService = [
    {
      id: 1,
      serviceName: "Graphics Design Services",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <MdGraphicEq />,
    },
    {
      id: 2,
      serviceName: "Illustrations & Sketches",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <FaSketch />,
    },
    {
      id: 3,
      serviceName: "Product Visualization",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <MdOutlineProductionQuantityLimits />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "Idea Research", icon: <GiTeamIdea /> },
    { id: "02", name: "Sketching and Sampling", icon: <AiOutlineSketch /> },
    { id: "03", name: "Evaluation", icon: <GiMedievalBarracks /> },
    { id: "04", name: "Presentation", icon: <HiPresentationChartLine /> },
  ];

  const [classNamay, setClassNamay] = useState("textile-design-service");
  const location = useLocation();
  const [serviceData, setServiceData] = useState(true);
  const [spinner, setSpinner] = useState(true);

  const makeBlur = () => {
    setClassNamay("textile-design-service blur");
  };

  const removeBlur = () => {
    setClassNamay("textile-design-service");
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

        <h1 className="service-name">Textile And Design Services</h1>

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
                <div className={`textile-process-${i + 1}`}>
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

export default TextileDesignService;
