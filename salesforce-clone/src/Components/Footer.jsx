import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer wf-section">
      <div className="container-11 w-container">
        <div className="footer-flex-container">
          <a href="#" className="footer-logo-link">
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d85afd15788d0263af7b58_full_logo_white.webp"
              alt=""
              className="footer-image"
            />
          </a>
          <div className="div-block-8">
            <h2 className="footer-heading">Products</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Marketing
                </a>
              </li>
            </ul>
            <a href="#" className="footer-link">
              WebBoost
            </a>
            <a href="#" className="footer-link">
              Referrals
            </a>
            <a href="#" className="footer-link">
              Payments
              <br />
              <span className="text-span-4"></span>
            </a>
          </div>
          <div className="div-block-8">
            <h2 className="footer-heading invisible">Products</h2>
            <a href="#" className="footer-link">
              WebChats
            </a>
            <a href="#" className="footer-link">
              Messaging
            </a>
            <a href="#" className="footer-link">
              Captain AI
            </a>
            <a href="#" className="footer-link">
              Feedback &amp; Survey
              <br />
            </a>
            <a href="#" className="footer-link">
              Competitions &amp;
              <br />
              Insights
            </a>
            <a href="#" className="footer-link">
              Customer Manager
            </a>
          </div>
          <div className="div-block-9">
            <h2 className="footer-heading">
              <strong>Industry</strong>
            </h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Dental
                </a>
              </li>
            </ul>
            <a href="#" className="footer-link">
              Home Services
            </a>
            <a href="#" className="footer-link">
              Retail
            </a>
            <a href="#" className="footer-link">
              Hospitality
            </a>
            <a href="#" className="footer-link">
              Automotive
            </a>
            <a href="#" className="footer-link">
              Restaurants
            </a>
            <a href="#" className="footer-link">
              Wellness
            </a>
            <a href="#" className="footer-link">
              Professional
              <br />
              Services
            </a>
          </div>
          <div className="div-block-10">
            <h2 className="footer-heading">Partner</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a
                  href="mailto:partner@salescaptain.com"
                  className="footer-link"
                >
                  Become a Partner
                </a>
              </li>
            </ul>
            <div className="div-block-11">
              <h2 className="footer-heading">
                <strong>Company</strong>
              </h2>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a
                    href="mailto:support@salescaptain.com"
                    className="footer-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a href="mailto:hr@salescaptain.com" className="footer-link">
                Careers
              </a>
              <a href="mailto:pr@salescaptain.com" className="footer-link">
                Press
              </a>
              <a href="mailto:partner@salescaptain.com" className="footer-link">
                Partners
              </a>
              <a href="mailto:legal@salescaptain.com" className="footer-link">
                Legal
              </a>
            </div>
          </div>
          <div className="div-block-10">
            <h2 className="footer-heading">
              <strong>US Headquarters</strong>
            </h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  447 Broadway,
                  <br />
                  2nd Floor,
                  <br />
                  New York 10013
                </a>
              </li>
            </ul>
            <h2 className="footer-heading">
              <strong>India office</strong>
            </h2>
            <a href="#" className="footer-link">
              1467 Janani HSR
              <br />
              Layout Bengaluru
              <br />
              Karnataka 560102
            </a>
            <h2 className="footer-heading">
              <strong>London office</strong>
            </h2>
            <a href="#" className="footer-link">
              79 - 81 Borough Rd
              <br />
              London England
              <br />
              400706
            </a>
          </div>
        </div>
      </div>
      <div className="sociallogo">
        <div className="sociallogo1">
          <a
            href="https://www.facebook.com/SalesCaptainHQ/"
            target="_blank"
           
          >
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d1036bf0791c31e8b_Group%2017124.svg"
              loading="lazy"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://twitter.com/SalesCaptainInc"
            target="_blank"
           
          >
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585ec5d9c15c1e77be28_Group%2017127.svg"
              loading="lazy"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://www.instagram.com/salescaptainhq/"
            target="_blank"
       
          >
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585d612c975d00d3f286_Group%2017130.svg"
              loading="lazy"
              alt=""
              className="socialmedia"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/salescaptainhq"
            target="_blank"
      
          >
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af585e3249a91eabae0c8e_Group%2017132.svg"
              loading="lazy"
              alt=""
              className="socialmedia"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
