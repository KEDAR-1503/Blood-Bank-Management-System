import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <img id="logo" src="assets/img/apple-touch-icon.png" />
          <h1 className="logo me-auto">
            <a href="index.html">
              Blood Donate<span>.</span>
            </a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <Link to={"/logintype"}>
            <a className="get-started-btn scrollto">Login</a>
          </Link>
        </div>
      </header>

      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>Be Grateful and Donate Blood</h1>
              <h2>Save Life and be a Real Hero</h2>
              <a href={"/findblood"} className="btn-get-started">
                Find Blood
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="https://www.aabb.org/images/default-source/default-album/logos/aabb-logo.svg?sfvrsn=4d385588_6"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://www.seekpng.com/png/detail/19-198763_american-red-cross-international-committee-of-the-red.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://www.eraktkosh.in/BLDAHIMS/hisglobal/bbpublic/images/Rakt5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/3760/nhsbt-left-align_scaled.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://innovate.mygov.in/wp-content/themes/hackathon-wordpress-theme-master/assets/images/mygov-logo.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="http://nbtc.naco.gov.in/images/nbtc-logo.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://www.mayoclinic.org/~/media/386AC346D62D46A4944E0923CAF00D28.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div className="content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                  <h3>There are benefits of donating blood</h3>
                  <p>
                    After donating blood, the body works to replenish the blood
                    loss. This stimulates the production of new blood cells and
                    in turn, helps in maintaining good health.
                  </p>
                  <a href="#" className="about-btn">
                    <span>About us</span>{" "}
                    <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-receipt"></i>
                      <h4>A free Health Check-up</h4>
                      <p>
                        In order to give blood, you’re required to undergo a
                        health screening. A trained staff member performs this
                        checkup.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bx bx-cube-alt"></i>
                      <h4>Reveal potential health problems</h4>
                      <p>
                        While it isn’t the same thing as a trip to the doctor,
                        donating blood can be another way to keep an eye on your
                        cardiovascular health.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-images"></i>
                      <h4>Emotional and Physical health Improved</h4>
                      <p>
                        Reduce stress,improve your emotional well-being,benefit
                        your physical health,help get rid of negative
                        feelings,provide a sense of belonging and reduce
                        isolation.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bx bx-shield"></i>
                      <h4>Reduce harmful iron stores</h4>
                      <p>
                        One in every two hundred people in the U.S. is affected
                        by a condition called hemochromatosis and most don’t
                        even know it, according to Patenaude. Hemochromatosis is
                        a disease that causes an iron overload and is labeled as
                        the most common genetic disease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hospitals Affiliated</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg ">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                We help the blood banks to manage their blood stock. Keep the
                details of the donor, so that they can contact them on need.
                Users can directly enquire about blood type by putting city and
                state details to find the blood.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-briefcase"></i>
                  <h4>
                    <a href="#">Inventory Management</a>
                  </h4>
                  <p>
                    We help in managing the details of the of the blood received
                    , Blood that has to be thrown away after it expiry.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-card-checklist"></i>
                  <h4>
                    <a href="#">All data is organized</a>
                  </h4>
                  <p>
                    The admin has access to all the functionalities of the
                    application and all the details of the donor so that he can
                    contact in need.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-bar-chart"></i>
                  <h4>
                    <a href="#">Hospitals can view Inventory</a>
                  </h4>
                  <p>
                    Hospitals have access to the inventory to view the amount of
                    blood available in the particular bank.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-binoculars"></i>
                  <h4>
                    <a href="#">User can Enquire</a>
                  </h4>
                  <p>
                    By adding the details of the city and state user can get the
                    details of the nearest blood bank.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0"></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <ul className="faq-list accordion" data-aos="fade-up">
              <li>
                <a
                  data-bs-toggle="collapse"
                  className="collapsed"
                  data-bs-target="#faq1"
                >
                  Why should people donate blood?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Safe blood saves lives. Blood is commonly used for women
                    with complications of pregnancy, such as ectopic pregnancies
                    and haemorrhage before, during or after childbirth, children
                    with severe anaemia often resulting from malaria or
                    malnutrition, accident victims and surgical and cancer
                    patients.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  className="collapsed"
                >
                  How much blood will be taken? Will I have enough?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    In most countries, the volume of blood taken is 450
                    millilitres, less than 10% of your total blood volume (the
                    average adult has 4.5 to 5 litres of blood). In some
                    countries, a smaller volume is taken. Your body will replace
                    the lost fluid within about 36 hours.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  className="collapsed"
                >
                  Who can give blood, and how often?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    The criteria for donor selection may vary from country to
                    country, but blood can be donated by most people who are
                    healthy and do not have an infection that can be transmitted
                    through their blood.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  className="collapsed"
                >
                  What happens when I give blood?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Whether it is the first time you give blood or you are a
                    regular donor, the blood service must make sure that you
                    will come to no harm by donating blood. It must also check
                    that your blood will be safe for the person who receives it.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  className="collapsed"
                >
                  Who may donate blood?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Donors should be between the ages of 18 and 65, weigh at
                    least 50 kg and not have donated blood within the previous
                    12 weeks (for males). The criteria, which are applied before
                    a person can be accepted as a blood donor, are very strict.
                    Not everyone can be a blood donor. This is designed to
                    protect the health of the donor as well as the health of the
                    patient who receives the blood.
                  </p>
                </div>
              </li>

              <li>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq6"
                  className="collapsed"
                >
                  Is there anything special I need to do before donating?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eat at your regular mealtimes and drink plenty of fluid
                    before you donate blood. Have a snack at least four hours
                    before you donate, but do not eat too much right before the
                    donation. Before you leave the blood donor clinic after your
                    blood donation, have some tea, coffee or a soft drink to
                    help replace the blood volume (approximately 450 ml) which
                    has been reduced as a result of your donation.Avoid taking
                    aspirin or aspirin-like anti-inflammatory medication in the
                    72 hours prior to your donation, because aspirin inhibits
                    the function of blood platelets. If you have taken aspirin
                    within this period, your blood platelet component cannot be
                    transfused to a patient.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                You can contact us for more information about blood donation. We
                help blood banks to organize their inventory. We help user to
                find the blood the in urgent times.
              </p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>
                        Canara Engineering College,Benjanapadavu,Dakshina
                        Kannada
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>bloodbandmng@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>+91 5589 55488 55 ,+91 6678 254445 41</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form role="form" className="php-email-form">
                  <div className="row">
                    <div className="col form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  Contacn info<span>.</span>
                </h3>
                <p>
                  Canara Engineering College,Benjanapadavu,Dakshina Kannada
                  <strong>Phone:</strong> +91 5589 55488 55
                  <strong>Email:</strong> bloodbankmng@gmail.com
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Blood Bank Inventory</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Donor details</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Hospital details</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Find Blood</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Inventory Management</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  You can subscribe to our news letter to get some new facts
                  about blood donation
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Blood Bank Management</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a>Rohan and Kedar</a>
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Landing;
