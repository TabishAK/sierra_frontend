import "./our-process.scss";

const OurProcess = (props) => {
  return (
    <div className="our-process">
      <h1>Our Process</h1>

      <div className="container">
        <p>
          At Loyal Textiles we are all the time concerned about the way we
          create wealth, the way we conduct our business and we try to be not
          just legally compliant but much more than that. At Loyal Textiles we
          are all the time concerned about the way we create wealth, the way we
          conduct our business and we try to be not just legally compliant but
          much more than that.
        </p>
        <div className="row">
          {props.sourcingProcess.map((sp) => (
            <div className="col-xl-3 col-lg-3 col-md-6 with">
              <div className="circle">{sp.icon}</div>
              <div className="line"></div>
              <div className="process process-1">
                <h1>{sp.id}</h1>
                <h3>{sp.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
