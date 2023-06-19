import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };
  return (
    <div>
      <h1 className="heading-22">
        Best way to grow your <br />
        local business
      </h1>
      <div className="text-block-23">
        Artificial Intelligence powered easy-to-use tools to get more customers
        &amp; give them a <br />
        better experience
      </div>

      <form style={{ textAlign: "center", color: "gray" }}>
        <input className="enteryouremail" placeholder="ENTER YOU EMAIL" />
        <button className="getdemo">GET DEMO</button>
      </form>

      <div>
        <img
          className="fourpic"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp"
        />
      </div>

      <div>
        <h2 className="heading-49">
          Trusted by 100,000+ local businesses globally
        </h2>
      </div>
      <div className="sevenpics">
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp" />
      </div>

      <div className="userPage">
        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp"
              />
            </div>

            <div>
              <p className="ptagsimon">Simon Page</p>
              <p className="simontag">Owner, Mamagato Restaurant</p>
            </div>
          </div>
          <div>
            <p className="simontext">
              “In 2022 so far we are hitting our best months in customers &
              revenue even in an economic downturn"
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">40%</p>
            <p className="simonaverage">
              Average net profit
              <br />
              increase
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Reviews
            </a>
            <a href="#" className="product-used">
              Listings
            </a>
            <a href="#" className="product-used">
              Referrals
            </a>
          </div>
        </div>

        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp"
              />
            </div>

            <div>
              <p className="ptagsimon">Daniel Wilson</p>
              <p className="simontag">
                Marketing head, The Air
                <br />
                Conditioning Company
              </p>
            </div>
          </div>
          <div>
            <p className="simontext" style={{ marginTop: "-14px" }}>
              “Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are
              getting more leads from Google”
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">200%</p>
            <p className="simonaverage">
              New review
              <br />
              growth
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Reviews
            </a>
            <a href="#" className="product-used">
              Listings
            </a>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Customer Manager
            </a>
          </div>
        </div>

        <div className="simmonpage">
          <div className="simondisplay">
            <div>
              <img
                style={{ width: "80px" }}
                className="simon"
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp"
              />
            </div>

            <div>
              <p style={{ marginLeft: "40px" }} className="ptagsimon">
                Debbie Rose
              </p>
              <p style={{ marginLeft: "40px" }} className="simontag">
                Owner, Jiva luxury Spa
              </p>
            </div>
          </div>
          <div>
            <p className="simontext">
              “Effective text & email marketing campaign on SalesCaptain helped
              us make additional $150k in two weeks”
            </p>
          </div>
          <div className="simonprofit">
            <p className="simonpercentage">$150k</p>
            <p className="simonaverage">
              Generated with marketing
              <br />
              campaign
            </p>
          </div>
          <div className="products">
            <h5 className="products1">Products used:</h5>
            <a href="#" className="product-used">
              Marketing
            </a>
            <a href="#" className="product-used">
              Webchat
            </a>
            <a href="#" className="product-used">
              Review
            </a>
            <a href="#" className="product-used">
              Messaging
            </a>
            <a href="#" className="product-used">
              Competition & Insights
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="heading-49">
          Tools to take your business to next level
        </h1>
      </div>

      <div>
        <div className="userPage">
          <div className="simmonpage1">
            <div>
              <h3 className="attract">Attract</h3>
              <p className="customers">Attract more customers</p>
            </div>
            <div>
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg"
                  />
                </div>
                <div>
                  <p className="review">Reviews</p>
                  <p className="reviewtag">
                    Improve ratings & get chosen more.
                  </p>
                </div>
              </div>
              <hr style={{ width: "90%", color: "white" }} />
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg"
                  />
                </div>
                <div>
                  <p className="review">Listings</p>
                  <p className="reviewtag">Improve listings & get seen more.</p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg"
                  />
                </div>
                <div>
                  <p className="review">Marketing</p>
                  <p className="reviewtag">
                    Reach out to customers on text & email.
                  </p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg"
                  />
                </div>
                <div>
                  <p className="review">SmartPages</p>
                  <p className="reviewtag">Engage more with our AI SEO.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="simmonpage1">
            <div>
              <h3 className="attract">Engage</h3>
              <p className="customers">Convert leads to customers</p>
            </div>
            <div>
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg"
                  />
                </div>
                <div>
                  <p className="review">WebChat</p>
                  <p className="reviewtag">
                    Convert leads on website chat with our AI.
                  </p>
                </div>
              </div>
              <hr style={{ width: "90%", color: "white" }} />
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg"
                  />
                </div>
                <div>
                  <p className="review">Messaging</p>
                  <p className="reviewtag">
                    Engage with customers across all channels.
                  </p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg"
                  />
                </div>
                <div>
                  <p className="review">Referrals</p>
                  <p className="reviewtag">Let your customers refer you.</p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg"
                  />
                </div>
                <div>
                  <p className="review">Payments</p>
                  <p className="reviewtag">
                    Modernize your integrated payment tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="simmonpage1">
            <div>
              <h3 className="attract">Elevate</h3>
              <p className="customers">Provide a delightful experience</p>
            </div>
            <div>
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg"
                  />
                </div>
                <div>
                  <p className="review">Captain AI</p>
                  <p className="reviewtag">Your AI assistant to drive growth</p>
                </div>
              </div>
              <hr style={{ width: "90%", color: "white" }} />
              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg"
                  />
                </div>
                <div>
                  <p className="review">Feedback & survey</p>
                  <p className="reviewtag">
                    Listen to your customers & delight them.
                  </p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg"
                  />
                </div>
                <div>
                  <p className="review">Competition & Insights</p>
                  <p className="reviewtag">
                    Learn about your competitors & insights.
                  </p>
                </div>
              </div>

              <hr style={{ width: "90%", color: "white" }} />

              <div className="simondisplay">
                <div>
                  <img
                    style={{ width: "50px" }}
                    className="simon"
                    src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg"
                  />
                </div>
                <div>
                  <p className="review">Customer Manager</p>
                  <p className="reviewtag">
                    Manage all your customer data & activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="heading-48">
          SalesCaptain is designed for your business
        </h1>
        <p className="paragraph-15">Select your industry to see how it works</p>
      </div>
      <div className="fourcardsdirector">
        <div className="cardone">
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Healthcare</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7c6aace717f0cd9c6b_Group%2018674.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Dental</h4>
            </a>
          </div>

          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ee724d71235537f0b_Group%2018681.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Home Services</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d9f7f1bb4a89eedec_Group%2018675.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Retail</h4>
            </a>
          </div>
        </div>

        <div className="cardtwo">
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7ddd5081b753e27b8c_Group%2018676.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Hospitality</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d132cbe948c251a1b_Group%2018677.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Automotive</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e919312d89de_Group%2018678.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Restaurants</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e13ffea380326cf92_Group%2018679.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Wellness</h4>
            </a>
          </div>
        </div>

        <div className="cardthree">
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e8642e9d49c2d89dd_Group%2018680.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Professional Services</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b11439eedef_Group%2018682.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Care Services</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7eee175fd8089febf1_Group%2018683.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Financial Services</h4>
            </a>
          </div>
          <div className="card1">
            <a href="/dental" className="link-block-2 services w-inline-block">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7e9f7f1b73679eedee_Group%2018684.svg"
                loading="lazy"
                width="59"
                alt=""
                className="image-40"
              />
              <h4 className="heading-15">Recreational Services</h4>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="heading-48">Make your business stand out with us</h1>
      </div>
      <div className="poster1">
        <div className="posterone">
          <h1 className="heading-488">
            Get discovered by
            <br />
            more customers
          </h1>
          <p className="paragraph-155">
            Higher reviews & better listings make
            <br />
            you more discoverable to people
            <br />
            organically
          </p>
          <a href="#" class="link-8">
            Get started
          </a>
        </div>
        <div>
          <img
            width={"55%"}
            className="asset1"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109-p-800.webp"
            alt="poster"
          />
        </div>
      </div>
      <div className="poster2">
        <div>
          <img
            width={"55%"}
            className="asset2"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718-p-800.webp"
            alt="poster"
          />
        </div>
        <div className="postertwo">
          <h1 className="heading-488">
            Faster conversion
            <br />
            with our Captain AI
          </h1>
          <p className="paragraph-155">
            Automate web chat, messaging, reviews
            <br />& feedbacks with our AI assistant
          </p>
          <a href="#" class="link-8">
            Get started
          </a>
        </div>
      </div>

      <div className="poster1">
        <div className="posterone">
          <h1 className="heading-488">
            Marketing that
            <br />
            works for you
          </h1>
          <p className="paragraph-155">
            Run highly effective & targeted
            <br />
            campaigns on text & emails and put
            <br />
            your customer data to use
          </p>
          <a href="#" class="link-8">
            Get started
          </a>
        </div>
        <div>
          <img
            width={"55%"}
            className="asset1"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp"
            alt="poster"
          />
        </div>
      </div>

      <div className="poster2">
        <div>
          <img
            width={"55%"}
            className="asset2"
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222-p-800.webp"
            alt="poster"
          />
        </div>
        <div className="postertwo">
          <h1 className="heading-488">Training & Support</h1>
          <p className="paragraph-155">
            Talk to a dedicated relationship manager
            <br />
            to get the help you need. No wait time, a<br />
            dedicated line just for you.
          </p>
          <a href="#" class="link-8">
            Get started
          </a>
        </div>
      </div>

      <div>
        <h1 className="heading-49">Expert Insights and Resources</h1>
        <p className="paragraph-15">
          Get the latest business intelligence relevant to your industry,
          designed to help you grow.
        </p>
      </div>

      <div className="basiccard">
        <div>
          <a href="/blog-post-1" className="blogpost1">
            <img
              className="heroimage"
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp"
              loading="lazy"
              alt=""
            />
            <div className="basictext">
              Google My Business Basics: How to get
              <br />
              more customers from GMB.
            </div>
            <p className="basicp">
              Customers want to find local proprietors on
              <br />
              search engines and nearly 90 percent of that
              <br />
              traffic goes to Google.
            </p>
          </a>
        </div>
        <div>
          <a href="/blog-post-1" className="blogpost1">
            <img
              className="heroimage"
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
              loading="lazy"
              alt=""
            />
            <div className="basictext">
              How to use Google's Business
              <br />
              Messaging tool to get new customers
            </div>
            <p className="basicp">
              Today’s leading businesses aren’t just being
              <br />
              found - they’re engaging the moment they’re
              <br />
              discovered.
            </p>
          </a>
        </div>
        <div>
          <a href="/blog-post-1" className="blogpost1">
            <img
              className="heroimage"
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp"
              loading="lazy"
              alt=""
            />
            <div className="basictext">
              6 Ways to Increase Your Website
              <br />
              Traffic and Leads
            </div>
            <p className="basicp">
              More than 61% of marketers have reported
              <br />
              that attracting traffic to their
              <br />
              biggest challenge.
            </p>
          </a>
        </div>
      </div>
      <div>
        <a href="/resources" className="link-9">
          View All Resources
        </a>
      </div>

      <div className="section-12 wf-section">
        <div className="container-25 w-container">
          <h1 className="heading-19">Ready to grow?</h1>
          <p className="paragraph-19">
            See why 100,000+ businesses trust us. Book a personalized demo to
            see
            <br />
            how SalesCaptain provides you the right tools to grow your business.
          </p>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              action="https://calendly.com/salescaptain/demo_meet"
              method="get"
              className="form"
              aria-label="Email Form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="text-field w-input"
                maxLength="256"
                name="Email-4"
                data-name="Email 4"
                placeholder="ENTER YOUR EMAIL"
                id="Email-4"
                required
              />
              <input
                type="submit"
                value="GET DEMO"
                data-wait=""
                className="submit saas w-button"
              />
            </form>
            <div
              className="w-form-done"
              tabIndex="-1"
              role="region"
              aria-label="Email Form success"
            ></div>
            <div
              className="w-form-fail"
              tabIndex="-1"
              role="region"
              aria-label="Email Form failure"
            ></div>
          </div>

          <div className="div-block-184">
            <div className="div-block-182">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"
                loading="lazy"
                width="229"
                alt=""
              />
              <div className="text-block-8">500+ Reviews</div>
            </div>
            <div className="div-block-183">
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp"
                loading="lazy"
                width="80"
                alt=""
                className="image-178"
              />
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp"
                loading="lazy"
                width="141"
                alt=""
                className="image-179"
              />
              <img
                src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp"
                loading="lazy"
                width="213"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
