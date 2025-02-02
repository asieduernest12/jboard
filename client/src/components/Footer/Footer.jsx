import React from "react";
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" >
      <section className="contact-info">
        <div>
          {/* <h1>Call</h1> */}
          <span>COPYRIGHT 2021 / NATNAEL HAILE</span>
        </div>
        {/* <div id='email-address' >
          <h1>Email</h1>
          <a href="mailto:haile.natnael@natnaeldev.com">haile.natnael@natnaeldev.com</a>
        </div> */}
      </section>
      <section className="contact-link">
        <ul className="footer-social">
          <a
            href="https://www.linkedin.com/in/natnael-haile-b146b41bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="https://github.com/natnaelh14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub />
          </a>
          <a
            href="mailto:haile.natnael@natnaeldev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail />
          </a>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
