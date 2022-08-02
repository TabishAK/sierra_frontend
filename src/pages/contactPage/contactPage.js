import Navbar from "./../../components/navbar/navbar";
import { useState, useEffect } from "react";
import "./contactPage.scss";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaFax, FaMailBulk } from "react-icons/fa";
import Footer from "./../../components/footer/footer";
import HorseLoader from "../../components/Loader/horseLoader";
import SierraLoader from "./../../components/Loader/sierraLoader";
import { Helmet } from "react-helmet";
import axios from "axios";
import Joi from "joi-browser";
const ContactPage = (props) => {
  const [classNamay, setClassNamay] = useState("contact-page");
  const [spinner, setSpinner] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  var SignUpFormSchema = {
    name: Joi.string().min(3).max(20).required().label("Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    message: Joi.string().max(300).required().label("Message"),
  };

  useEffect(() => {
    setSpinner(true);
    axios
      .get(`${process.env.REACT_APP_AMAZON_SERVER_LINK}contact/`)
      .then((response) => {
        setContactData(response.data);
        console.log(response.data);
        setSpinner(false);
      });
  }, []);

  const makeBlur = () => {
    setClassNamay("contact-page blur");
  };

  const removeBlur = () => {
    setClassNamay("contact-page");
  };

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitContactForm = (e) => {
    e.preventDefault();

    const result = Joi.validate(formData, SignUpFormSchema);
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setError("");

      axios
        .post(
          process.env.REACT_APP_AMAZON_SERVER_LINK +
            "contact/send-message-to-email",
          formData
        )
        .then((response) => {
          alert.success("Your Message has been sent!");
          setFormData({
            first_name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => setError(error.response.data));
    }
    console.log(formData);
  };

  return spinner ? (
    <SierraLoader />
  ) : (
    <>
      <Helmet>
        <title>Sierra Textiles - Contact</title>
        <meta
          name="description"
          content="B-75/280, Street # 3, Sector “A”, Kashmir Colony, Karachi"
        />
        <meta name="description" content="021-35393334" />
        <meta name="description" content="sales@sierratextiles.com.pk" />

        <meta
          name="keywords"
          content="B-75/280, Street # 3, Sector “A”, Kashmir Colony, Karachi, sales@sierratextiles.com.pk "
        />
      </Helmet>
      <div className={classNamay}>
        <Navbar
          st={props.st}
          openRightMenu={props.openRightMenu}
          makeBlur={makeBlur}
          removeBlur={removeBlur}
        />
        <div className="container icon-section">
          <center>
            <h1>Let's Connect!</h1>
          </center>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <MdLocationOn />
              <h5 className="mt-4">OUR MAIN OFFICE</h5>
              <p className="mt-3">{contactData?.address}</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <FaPhone />
              <h5 className="mt-4">PHONE NUMBER</h5>
              <p className="mt-3">
                {contactData?.phone_1}
                <br /> {contactData?.phone_2}
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <FaMailBulk />
              <h5 className="mt-4">MAIL</h5>
              <p className="mt-3">{contactData?.email}</p>
            </div>
          </div>
          <hr
            style={{
              position: "relative",
              marginTop: "3rem",
              background: "gainsboro",
              height: 0,
            }}
          />
        </div>

        <div className="container form-map">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 query-form">
              <h3>GET A FREE CASE EVALUATION TODAY!</h3>
              <h5>AVAILABLE 24 HOURS A DAY!</h5>
              <div className="form-contact-us">
                <input
                  name="name"
                  value={formData.name}
                  type="text"
                  placeholder="Enter your name."
                  onChange={handleForm}
                />
                <input
                  name="email"
                  value={formData.email}
                  type="text"
                  placeholder="Enter valid email address"
                  onChange={handleForm}
                />

                <textarea
                  className="mt-2"
                  name="message"
                  value={formData.message}
                  type="text"
                  placeholder="Enter your message here.."
                  onChange={handleForm}
                />
                <p className="mt-3">{error}</p>
              </div>

              <button
                style={{
                  padding: "5px 16px",
                  border: "none",
                  borderRadius: 8,
                  color: "white",
                  background: "#d3a657e3",
                }}
                onClick={submitContactForm}
              >
                Submit{" "}
              </button>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14483.865553126687!2d67.04890373320953!3d24.83082304383428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d06cd9f7009%3A0xad205beeb5db3161!2sSierra%20Textile!5e0!3m2!1sen!2s!4v1645707003474!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
