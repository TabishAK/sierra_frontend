import React from "react";

import ContactPage from "./../pages/contactPage/contactPage";
import Careers from "./../pages/careers/careers";
import VideoLibrary from "./../pages/video-library/video-library";
import Leadership from "./../pages/leadership/leadership";
import Facilities from "./../pages/facilities/facilities";
import SourcingAndDevelopment from "./../pages/sourcing-and-development/sourcing-and-development";
import ProductionAndQuality from "./../pages/production-and-quality/production-and-quality";
import TextileDesignService from "./../pages/textile-design-service/textile-design-service";
import DigitalMerchandisingService from "./../pages/digital-merchandising-service/digital-merchandising-service";
import NotFound from "./../pages/not-found/not-found";
import logo2 from "./../images/logo_updated/eff_logos4.png";
import logo from "./../images/logo_updated/eff_logos2.png";
import Brouchers from "./../pages/brouchers/brouchers";
import AboutEFF from "./../pages/about_eff/about_eff";
import Home from "./../pages/home/home";
import SpecificProducts from "./../pages/specificProducts/specificProducts";
import Products from "./../pages/products/products";
import { Route, Switch } from "react-router-dom";

const Routes = ({
  display,
  openRightMenu,
  closeRightMenu,
  selectProduct,
  selectedSubCategory,
  selectedProd,
}) => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              st={{
                gradient: "gradient",
                color: "white",
                logo: logo2,
                position: "absolute",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />

        <Route
          exact
          path="/brouchers"
          component={() => (
            <Brouchers
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/about"
          component={() => (
            <AboutEFF
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        {/* <Route
          exact
          path="/leadership"
          component={() => (
            <Leadership
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        /> */}
        {/* <Route
          exact
          path="/facilities"
          component={() => (
            <Facilities
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        /> */}
        <Route
          exact
          path="/video-library"
          component={() => (
            <VideoLibrary
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />
        <Route
          exact
          path="/contact_us"
          component={() => (
            <ContactPage
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />

        <Route
          exact
          path="/not-found"
          component={() => (
            <NotFound
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />

        <Route
          exact
          path="/careers"
          component={() => (
            <Careers
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          exact
          path="/sourcing-and-development"
          component={() => (
            <SourcingAndDevelopment
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          exact
          path="/production-and-quality"
          component={() => (
            <ProductionAndQuality
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          exact
          path="/textile-design-service"
          component={() => (
            <TextileDesignService
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />

        <Route
          exact
          path="/digital-merchandising-service"
          component={() => (
            <DigitalMerchandisingService
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />

        <Route
          exact
          path="/:product_name"
          component={() => (
            <Products
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              selectProduct={selectProduct}
              display={display}
            />
          )}
        />
        {/* <Route
          exact
          path="/:product_name/:type"
          component={() => (
            <SpecificProducts
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              selectedSubCategory={selectedSubCategory}
              selectedProd={selectedProd}
            />
          )}
        /> */}
      </Switch>
    </div>
  );
};

export default Routes;
