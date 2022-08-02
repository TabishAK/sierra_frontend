import { GiTie } from "react-icons/gi";
import "./jobOpening.scss";
import { useState, useRef, useEffect } from "react";
import Signin_Signup from "./../signin_signup/signin_signup";
import { useDispatch, useSelector } from "react-redux";
import ApplyForm from "./../applyForm/applyForm";
import Cookie from "cookie-universal";
import axios from "axios";
import { addToken } from "../../services/slices/tokenSlice";

const JobOpening = (props) => {
  const [isShowApplyForm, setIsShowApplyForm] = useState(false);
  const [jobPost, setJobPost] = useState();

  const cookies = Cookie();
  const dispatch = useDispatch();
  const ref = useRef();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token === null) {
      axios
        .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/getToken")
        .then(function (response) {
          if (response.data.token) {
            cookies.set("eff_customer", response.data.token);
            dispatch(addToken(response.data.token));
            console.log("Successfully Captured Token");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("Not Captured Token");
        });
    }

    const checkIfClickedOutside = (e) => {
      if (isShowApplyForm && ref.current && !ref.current.contains(e.target)) {
        setIsShowApplyForm(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isShowApplyForm]);

  const [jobOpenings] = useState([
    {
      jobPost: "Graphic Designer",
      briefDecription: "UI/UX",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
    {
      jobPost: "Web Designer",
      briefDecription: "MERN Stack",
      jobLocation: "Atlanta, Georgia",
      jobType: "Part Time",
    },
    {
      jobPost: "Print Designer",
      briefDecription: "Bootexpert",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
    {
      jobPost: "CAD Designer",
      briefDecription: "Color Seperation Work",
      jobLocation: "Atlanta, Georgia",
      jobType: "Internship",
    },
    {
      jobPost: "Film Maker",
      briefDecription: "Video Artist",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
  ]);

  const closeSigninModal = () => {
    setIsShowApplyForm(false);
  };

  const handleApplyForm = (jp) => {
    setIsShowApplyForm(true);
    setJobPost(jp);
  };

  return (
    <>
      <div className="job-openings">
        <h1 className="job-opening-heading">Job Openings</h1>
        <center>
          <div className="seperator">
            <hr />
            <GiTie
              style={{
                fontSize: "3rem",
                textAlign: "center",
                position: "relative",
                top: -4,
              }}
            />
            <hr />
          </div>

          <div class="container contain">
            <ul class="responsive-table">
              <div className="for-apply" ref={ref}>
                <ApplyForm
                  setIsShowApplyForm={setIsShowApplyForm}
                  token={token}
                  jobPost={jobPost}
                  isShowApplyForm={isShowApplyForm}
                  closeSigninModal={closeSigninModal}
                />
              </div>
              <li class="table-header">
                <div class="col col-1">Designation</div>
                <div class="col col-2">Location</div>
                <div class="col col-3">Job Type</div>
                <div class="col col-4">Apply</div>
              </li>

              {props.jobs &&
                props.jobs.map((job) => (
                  <li class="table-row">
                    <div class="col col-1" data-label="Designation">
                      <h5> {job.job_name}</h5>
                      <p> {job.designation_name}</p>
                    </div>
                    <div class="col col-2" data-label="Location">
                      <h5>{job.area}</h5>
                      <p>{job.country}</p>
                    </div>
                    <div class="col col-3" data-label="Job Type">
                      <h5>{job.job_type}</h5>
                    </div>
                    <div class="col col-4" data-label="">
                      <span
                        style={{
                          cursor: "pointer",
                          background: "#d9b473",
                          padding: "8px 18px",
                          fontFamily: "Raleway",
                          borderRadius: 8,
                          color: "white",
                          fontWeight: 500,
                        }}
                        onClick={() => handleApplyForm(job.jobPost)}
                      >
                        Apply
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* <table className="mt-5">
            <div className="for-apply" ref={ref}>
              <ApplyForm
                setIsShowApplyForm={setIsShowApplyForm}
                token={token}
                jobPost={jobPost}
                isShowApplyForm={isShowApplyForm}
                closeSigninModal={closeSigninModal}
              />
            </div>
            {props.jobs &&
              props.jobs.map((job) => (
                <tr>
                  <td className="job-post">
                    <h5> {job.job_name}</h5>
                    <p> {job.designation_name}</p>
                  </td>
                  <td>
                    <h5>{job.area}</h5>
                    <p>{job.country}</p>
                  </td>
                  <td className="job-type">
                    <span
                      style={{
                        background: "#d9b473",
                        padding: "8px 18px",
                        fontFamily: "Raleway",
                        borderRadius: 8,
                        color: "white",
                        fontWeight: 500,
                      }}
                    >
                      {job.job_type}
                    </span>

                    {!token ? (
                      <Signin_Signup
                        label="Apply"
                        style={{
                          background: "transparent",
                          marginLeft: "0%",
                          color: "#000000",
                          fontSize: 15,
                          marginTop: "5%",
                          fontWeight: 500,
                          border: "none",
                          boxShadow: "none",
                        }}
                      />
                    ) : (
                      <h5 onClick={() => handleApplyForm(job.jobPost)}>
                        Apply
                      </h5>
                    )}
                  </td>
                </tr>
              ))}
          </table> */}
        </center>
      </div>
    </>
  );
};

export default JobOpening;
