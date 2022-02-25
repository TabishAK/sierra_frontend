import { ImAirplane, ImLocation2 } from "react-icons/im";
import { FaBriefcaseMedical } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GiMoneyStack, GiCoffeeCup } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import "./eff_benefits.scss";

const Eff_Benefits = (props) => {
  return (
    <div class="pagecontainer">
      <div class="benefitscontainer container">
        <h2>Benefits of being Sierra Employee</h2>
        <div className="row">
          {props.benefits &&
            props.benefits.map((b, idx) => {
              return (
                <div className="col-xl-3 col-lg-4">
                  {idx === 0 ? (
                    <FaBriefcaseMedical />
                  ) : idx == 1 ? (
                    <ImAirplane />
                  ) : idx == 2 ? (
                    <BsFillHouseFill />
                  ) : idx == 3 ? (
                    <GiMoneyStack />
                  ) : idx == 4 ? (
                    <GiCoffeeCup />
                  ) : idx == 5 ? (
                    <RiShirtFill />
                  ) : idx == 6 ? (
                    <ImLocation2 />
                  ) : idx == 7 ? (
                    <ImLocation2 />
                  ) : (
                    ""
                  )}

                  <h3>{b.benefit_name}</h3>
                  <p>{b.benefit_details}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Eff_Benefits;
