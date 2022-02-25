import "./newsLetterSub.scss";
import "antd/dist/antd.css";
import { Input } from "antd";
const { Search } = Input;
const NewsLetterSub = () => {
  return (
    <div className="container newsletter-subscription">
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Discover the latest news, from new product launches and events, to
        inspiring updates.
        <br /> All information will be used by The Romo Group only and will not
        be passed on to third parties.
      </p>

      <center>
        <Search
          style={{ width: "25%", marginBottom: "2rem" }}
          placeholder="Subscribe to our newsletter"
          enterButton="Subcribe"
          size="large"
        />
      </center>
    </div>
  );
};

export default NewsLetterSub;
