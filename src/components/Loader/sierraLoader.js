import rotate from "../../images/logo_updated/rotate.png";

const SierraLoader = () => {
  return (
    <div className="sierra-loader">
      <img className="rotate" src={rotate} alt="" />
      <h1
        style={{
          fontFamily: "Noah Grotesque",
          fontSize: "24px",
          textTransform: "uppercase",
          position: "relative",
          left: "10px",
          top: "10px",
        }}
      >
        Loading ..
      </h1>
    </div>
  );
};

export default SierraLoader;
