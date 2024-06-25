import React from "react";

function Footer() {
  return (
    <footer className="footer section" id="contact">
      <div className="footer__content container">
        <p className="footer__heading">Contact</p>
        <p className="footer__text">
          Here are the links of my social accounts if u want to contact me, it would be pleasure to work with you.
        </p>
        <a href="mailto:huseynmurtuzov@gmail.com" className="footer__email"><span><i className="fa-solid fa-envelope"></i></span>huseynmurtuzov@gmail.com</a>
        <div className="footer__socials">
          <a href="https://www.instagram.com/murtuzov.huseyn/" target="_blank" className="footer__socials--item">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/murtuzovhuseyn/" target="_blank" className="footer__socials--item">
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/MirtizDev" target="_blank" className="footer__socials--item">
          <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
