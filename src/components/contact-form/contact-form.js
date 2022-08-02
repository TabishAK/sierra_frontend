import "./contact-form.scss";
const ContactForm = (props) => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h1 className="our-capabilities">Our Capabilities</h1>
            <p>{props.capabilities && props.capabilities}</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h2 className="contact-us" style={{ textTransform: "uppercase" }}>
              Contact Us
            </h2>

            <form>
              {/* <label>Name</label> */}
              <input placeholder="Name" name="" />
              {/* <label>Email</label> */}
              <input placeholder="Email" name="" />
              {/* <label>Phone no</label> */}
              <input placeholder="Phone no" name="" />
              {/* <label>Message</label> */}
              <textarea placeholder="Message" name="" />
              <button className="btn btn-sm mt-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
