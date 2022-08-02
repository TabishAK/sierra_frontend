import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./not-found.scss";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const NotFound = (props) => {
  const [classNamay, setClassNamay] = useState("not-found");

  const makeBlur = () => {
    setClassNamay("not-found blur");
  };

  const removeBlur = () => {
    setClassNamay("not-found");
  };
  const history = useHistory();

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />

      <div className="container">
        <h1>Page 404 Not Found!</h1>
        <p>
          Perhaps you are searching for wrong URL or what you are trying to
          search is'nt available.
        </p>

        <h5 onClick={() => history.goBack()}>
          <MdArrowBackIos />
          Go to previous page
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
