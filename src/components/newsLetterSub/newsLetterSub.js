import React from "react";
import "./newsLetterSub.scss";
import "antd/dist/antd.css";
import { Input } from "antd";
import Joi from "joi-browser";
import axios from "axios";
import { useAlert } from "react-alert";

const { Search } = Input;

const NewsLetterSub = () => {
  const [searchInput, setSearchInput] = React.useState();
  const [error, setError] = React.useState();
  const [postLoading, setPostLoading] = React.useState(false);
  const alert = useAlert();

  const handleForm = (e) => {
    setSearchInput(e.target.value);
  };

  var SubscriptionFormSchema = {
    searchInput: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
  };

  const submitForm = async () => {
    const result = Joi.validate({ searchInput }, SubscriptionFormSchema);
    if (result.error) {
      setError(result?.error?.details[0]?.message);
    } else {
      setError("");
      setPostLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/subscribe", {
          email: searchInput,
        });
        if (response) {
          setPostLoading(false);
          setSearchInput("");
          alert.success("You have successfully subscribed!");
        }
      } catch (e) {
        setError(e?.response.data);
      }
    }
  };

  return (
    <div className="container newsletter-subscription">
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Discover the latest news, from new product launches and events, to
        inspiring updates.
        <br /> All information will be used by The Sierra Group only and will
        not be passed on to third parties.
      </p>

      <center>
        <Search
          style={{ width: "30%" }}
          placeholder="Subscribe to our newsletter"
          enterButton="Subcribe"
          onSearch={submitForm}
          name="subscribe"
          value={searchInput}
          loading={postLoading}
          onChange={handleForm}
          size="large"
        />
      </center>
      <p
        style={{
          color: "red",
          marginTop: 10,
        }}
      >
        {error}
      </p>
    </div>
  );
};

export default NewsLetterSub;
