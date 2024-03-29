import "./sidebar.scss";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import AnimateHeight from "react-animate-height";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Sideba = () => {
  const [subCategoriesOpen, setSubCategoriesOpen] = useState([]);
  const [mainCategoriesOpen, setMainCategoriesOpen] = useState([]);
  const [isServiceOpen, setIsServiceOpen] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 1155 });
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories
  );

  const mainCategories = useSelector(
    (state) => state.mainCategories.mainCategories
  );

  const [mainField] = useState([
    { name: "Products", isOpen: false },
    { name: "Services", isOpen: false },
    { name: "Be Inspired", isOpen: false },
    { name: "Company", isOpen: false },
  ]);

  function configureIsServiceOpen() {
    let ServiceArary = [...isServiceOpen];
    mainField.map(() => {
      ServiceArary.push(false);
    });
    setIsServiceOpen(ServiceArary);
  }

  function configureMainCategoriesOpen() {
    let MainCategoriesArary = [...mainCategoriesOpen];
    mainCategories.map(() => {
      MainCategoriesArary.push(false);
    });
    setMainCategoriesOpen(MainCategoriesArary);
  }

  function configureSubCategoriesOpen() {
    let SubCategoryArary = [...subCategoriesOpen];
    subCategories.map(() => {
      SubCategoryArary.push(false);
    });
    setIsServiceOpen(SubCategoryArary);
  }

  useEffect(() => {
    configureIsServiceOpen();
    configureMainCategoriesOpen();
    configureSubCategoriesOpen();
  }, []);

  const toggleService = (i) => {
    var MF = [...isServiceOpen];
    MF[i] = !MF[i];
    setIsServiceOpen(MF);
  };

  const toggleMainCategories = (i) => {
    var MF = [...mainCategoriesOpen];
    MF[i] = !MF[i];
    setMainCategoriesOpen(MF);
  };

  const toggleSubCategories = (i) => {
    var MF = [...subCategoriesOpen];
    MF[i] = !MF[i];
    setSubCategoriesOpen(MF);
  };

  return isMobile ? (
    <Menu>
      <li>
        {mainField.map((mf, mfIndex) => (
          <li className="main-field">
            <div onClick={() => toggleService(mfIndex)}>{mf.name}</div>

            <AnimateHeight
              duration={500}
              height={isServiceOpen[mfIndex] ? "auto" : 0}
            >
              {mainCategories.map((mc, mcIndex) =>
                mfIndex === 0 ? (
                  <li className="main-categories">
                    <div onClick={() => toggleMainCategories(mcIndex)}>
                      {mc.category_name}
                    </div>

                    <AnimateHeight
                      duration={500}
                      height={mainCategoriesOpen[mcIndex] ? "auto" : 0}
                      style={{
                        marginTop: "10px",
                        marginBottom: 10,
                      }}
                    >
                      {subCategories.map((sc, scIndex) =>
                        sc.mainCategory._id == mc._id ? (
                          <li className="sub-categories">
                            <div onClick={() => toggleSubCategories(scIndex)}>
                              <Link to={sc.subCategory_slug}>
                                {sc.subCategory_name}
                              </Link>
                            </div>
                          </li>
                        ) : (
                          ""
                        )
                      )}
                    </AnimateHeight>
                  </li>
                ) : (
                  ""
                )
              )}
              {mfIndex === 1 ? (
                <>
                  <li className="sub-categories">
                    <div>
                      <Link to="/sourcing-and-development">
                        Sourcing and Product Development
                      </Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/production-and-quality">
                        Production and Quality Control
                      </Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/textile-design-service">
                        Textile Design Services
                      </Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/digital-merchandising-service">
                        Digital Merchandising Services
                      </Link>
                    </div>
                  </li>
                </>
              ) : mfIndex === 2 ? (
                <>
                  <li className="sub-categories">
                    <div>
                      <Link to="/brouchers">Show Brouchers</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/video-library">Video Library</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/blogs">Blogs</Link>
                    </div>
                  </li>
                </>
              ) : mfIndex === 3 ? (
                <>
                  <li className="sub-categories">
                    <div>
                      <Link to="/about">About Us</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/leadership">Leadership</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/facilities">Facilities</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/careers">Careers</Link>
                    </div>
                  </li>
                  <li className="sub-categories">
                    <div>
                      <Link to="/contact_us">Contact Us</Link>
                    </div>
                  </li>
                </>
              ) : (
                ""
              )}
            </AnimateHeight>
          </li>
        ))}
      </li>
    </Menu>
  ) : (
    ""
  );
};

export default Sideba;
