import { Helmet } from "react-helmet";
import "./services.scss";

const Services = (props) => {
  return (
    <>
      <Helmet>
        {props?.sourcingService?.map((t) => (
          <meta name="description" content={t.service_description} />
        ))}
        {props?.sourcingService?.map((t) => (
          <meta name="keywords" content={t.service_name} />
        ))}
      </Helmet>
      <div className="services">
        <div className="container">
          <p className="text-center mb-5">
            {props.mainParagraph && props.mainParagraph}
          </p>
          <div className="row">
            {props.sourcingService &&
              props.sourcingService.map((s) => (
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="service-card">
                    {s.icon}
                    <h3>{s.service_name}</h3>
                    <p>{s.service_description}</p>
                    {/* <span>
                  {s.type} <BsArrowRightShort />
                </span> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
