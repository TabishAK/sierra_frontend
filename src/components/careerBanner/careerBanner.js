import "./careerBanner.scss";
const CareerBanner = (props) => {
  return (
    <div className="container-fluid background-careers">
      <div className="container">
        <div className="heading-for-career">
          <center>
            <h4 class="wordCarousel">
              <span>LOOKING FOR A </span>
              <div>
                <ul class="flip4">
                  <li>WORK?</li>
                  <li>JOB?</li>
                </ul>
              </div>
            </h4>

            <p>{props.paragraph}</p>

            <button
              className="mt-5"
              style={{
                padding: "12px 40px",
                border: "none",
                borderRadius: 8,
                color: "white",
                background: "#d3a657e3",
              }}
            >
              FIND A JOB{" "}
            </button>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CareerBanner;
