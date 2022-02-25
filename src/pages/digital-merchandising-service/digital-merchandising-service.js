import Navbar from "../../components/navbar/navbar";
import "./digital-merchandising-service.scss";
import { useState, useEffect } from "react";
import SierraLoader from "./../../components/Loader/sierraLoader";
import Services from "../../components/services/services";
import InfoPanelImageSection from "../../components/info-panel-image-section/info-panel-image-section";
import OurProcess from "./../../components/our-process/our-process";
import Footer from "../../components/footer/footer";
import ContactForm from "./../../components/contact-form/contact-form";
import { BiImage } from "react-icons/bi";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaCreativeCommonsSampling } from "react-icons/fa";
import { TiSocialFlickr, TiTick } from "react-icons/ti";
import { GiArchiveResearch, GiMissileLauncher } from "react-icons/gi";
import { SiMicrostrategy } from "react-icons/si";
import { useLocation } from "react-router-dom";
import processImage from "../../images/4.jpg";
import axios from "axios";

const DigitalMerchandisingService = (props) => {
  const sourcingService = [
    {
      id: "01",
      serviceName: "Image optimization",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",
      type: "innovation",
      icon: <BiImage />,
    },
    {
      id: "02",
      serviceName: "Videography",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "technology",
      icon: <AiFillVideoCamera />,
    },
    {
      id: 3,
      serviceName: "Creative Images",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <FaCreativeCommonsSampling />,
    },
    {
      id: 4,
      serviceName: "Social Media Marketing",
      description:
        "Yarns, Fabrics, Garments and other Home textiles products are manufactured and exported to 49 different countries across the globe every year.",

      type: "automotive",
      icon: <TiSocialFlickr />,
    },
  ];

  const sourcingProcess = [
    { id: "01", name: "Research", icon: <GiArchiveResearch /> },
    { id: "02", name: "Strategy", icon: <SiMicrostrategy /> },
    { id: "03", name: "Launch", icon: <GiMissileLauncher /> },
    { id: "04", name: "Evaluate", icon: <TiTick /> },
  ];

  const [classNamay, setClassNamay] = useState("digital-merchandising-service");
  const [serviceData, setServiceData] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const location = useLocation();

  const makeBlur = () => {
    setClassNamay("digital-merchandising-service blur");
  };

  const removeBlur = () => {
    setClassNamay("digital-merchandising-service");
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
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <h1 className="service-name">Digital Merchandising Service</h1>
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
              <div className={`merchandising-process-${i + 1}`}>
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
  );
};

export default DigitalMerchandisingService;
