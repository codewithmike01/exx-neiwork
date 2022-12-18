import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterContainer } from './Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <section className="footer_wrapper">
        <div className="footer_EXX_Block">
          <h3>EXX Blockchain</h3>
          <p>
            EXX builds on the efficacy of Ethereum, it is faster, powerful and
            more secured
          </p>
        </div>

        <div className="footer_link_section">
          <h3>General</h3>
          <ul>
            <li>
              <a href="none" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Contact us
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Brand Kits
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                News & Updates
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className="footer_link_section">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="none" target="_blank">
                Documentation
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Block Explorer
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Brand Kits
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>

        {/* Apply */}
        <div className="footer_link_section">
          <h3>Apply</h3>
          <ul>
            <li>
              <a href="none" target="_blank">
                Dev. Incubator
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Career
              </a>
            </li>

            <li>
              <a href="none" target="_blank">
                Ambassador
              </a>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div className="footer_link_section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="none" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Medium
              </a>
            </li>

            <li>
              <a href="none" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <a href="none" target="_blank">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer_sub_section">
        <hr />

        <div className="footer_sub_wrapper">
          <ul className="footer_sub_links">
            <li>
              <NavLink to="#">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="#">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="#">Disclaimer</NavLink>
            </li>
          </ul>

          <p className="footer_sub_remark">With love 💙 from Exxample, Inc</p>
        </div>
      </section>
    </FooterContainer>
  );
};

export default Footer;
