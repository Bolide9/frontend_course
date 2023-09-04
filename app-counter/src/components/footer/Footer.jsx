import React from "react";
import CopyRigths from "./CopyRigths";
import SecondaryLogo from "./SecondaryLogo";
import FooterBarActions from "./FooterBarActions";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="secondary-container">
          <SecondaryLogo></SecondaryLogo>
          <FooterBarActions></FooterBarActions>
        </div>
        <CopyRigths></CopyRigths>
      </div>
    </footer>
  );
}

export default Footer;
