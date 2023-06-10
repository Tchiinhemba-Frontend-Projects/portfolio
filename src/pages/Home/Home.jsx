import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import {
  AiFillGithub,
  AiFillPhone,
  BiEnvelope,
  BiMedal,
  FiServer,
  MdVerified,
  MdMonitor,
  FaLinkedinIn,
  FaPencilAlt,
  FaUserCircle,
  ImWordpress,
  BsMedium,
} from "react-icons/all";

import { Education, ServiceCard, Skill, WorksCard } from "../../components";
import { FrontendContent } from "../../api";
import profile from "../../assets/images/profile.jpeg";
import profile2 from "../../assets/images/profile2.jpeg";
import oportunity from "../../assets/images/oportunity.png";

export function Home() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-GLX1L8ZMZF");
  }, []);

  const age = new Date().getFullYear() - 2000;

  const { worksList, certification } = FrontendContent();

  return (
    <React.Fragment>
      <main className={styles["l-main"]}>
        <section className={styles["home"]} id="home">
          <div className={`${styles["home__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["home__data"]}>
              <div className={styles["home__img"]}>
                <img src={profile} alt="" />
              </div>

              <h1 className={styles["home__title"]}>Eládio Tchiinhemba</h1>
              <span className={styles["home__profession"]}>
                Software Developer
              </span>

              <div className={styles["home__social"]}>
                <a
                  href="https://www.linkedin.com/in/tchiinhemba/"
                  target="_blank"
                  className={styles["home__social-link"]}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/tchiinhemba"
                  target="_blank"
                  className={styles["home__social-link"]}
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://tchiinhemba.medium.com"
                  target="_blank"
                  className={styles["home__social-link"]}
                >
                  <BsMedium />
                </a>
              </div>
              <a
                download="Resume-Eladio-Claudio"
                href="assets/pdf/Resume-Eládio-Cláudio.pdf"
                className={` ${styles["button"]} ${styles["home__button"]}`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section
          className={`${styles["about"]} ${styles["section"]}`}
          id="about"
        >
          <span className={styles["section-subtitle"]}>My intro</span>
          <h2 className={styles["section-title"]}>About Me</h2>

          <div className={`${styles["about__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["about__data"]}>
              <p className={styles["about__description"]}>
                Hello, I'm Eladio, a young man of {age} years, lover of
                technology, curious and self-taught. always willing to learn new
                things, facing new challenges and focused on building a
                successful career.
              </p>
              <img src={profile2} alt="" className={styles["about__img"]} />
            </div>

            <div>
              <div className={styles["about__information"]}>
                <h3 className={styles["about__information-title"]}>
                  Information
                </h3>

                <div className={styles["about__information-data"]}>
                  <FaUserCircle className={styles["about__information-icon"]} />
                  <span>Eládio Tchiinhemba</span>
                </div>

                <div className={styles["about__information-data"]}>
                  <AiFillPhone className={styles["about__information-icon"]} />
                  <span>+244931509802</span>
                </div>

                <div className={styles["about__information-data"]}>
                  <BiEnvelope className={styles["about__information-icon"]} />
                  <span>tchiinhemba@gmail.com</span>
                </div>
              </div>

              <div className={styles["about__information"]}>
                <h3 className={styles["about__information-title"]}>
                  Experience
                </h3>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Web Developer
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Grupo Zwela (current)
                    </span>
                  </div>
                </div>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Frontend Developer
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Bukaapp - 8 months
                    </span>
                  </div>
                </div>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Expressers
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["skills"]} ${styles["section"]}`}
          id="skills"
        >
          <span className={styles["section-subtitle"]}>Why Choose Me</span>
          <h2 className={styles["section-title"]}>My expertise Area</h2>

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Frontend</h3>

              <Skill nameSkill="HTML/CSS" xp={5} />
              <Skill nameSkill="JavaScript" xp={4} />
              <Skill nameSkill="React.js" xp={2} />
              <Skill nameSkill="React native" xp={1} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Backend</h3>

              <Skill nameSkill="Linux Server" xp={3} />
              <Skill nameSkill="Node.js" xp={1} />
              <Skill nameSkill="Mongodb" xp={1} />
              <Skill nameSkill="Express" xp={1} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>WordPress</h3>
              <Skill nameSkill="WordPress Platform" xp={3} />
              <Skill nameSkill="Google Analytics" xp={2} />
              <Skill nameSkill="Woocomerce" xp={3} />
              <Skill nameSkill="ADS" xp={1} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Others</h3>
              <Skill nameSkill="Github" xp={5} />
              <Skill nameSkill="SEO" xp={1} />
              <Skill nameSkill="Git" xp={5} />
            </div>
          </div>
        </section>

        <section className={`${styles["education"]} ${styles["section"]}`}>
          <span className={styles["section-subtitle"]}>Qualification</span>
          <h2 className={styles["section-title"]}>My Education</h2>

          <div
            className={`${styles["education__container"]} ${styles["bd-grid"]}`}
          >
            {certification.map((value, index) => {
              return (
                <Education
                  year={value.year}
                  institute={value.institute}
                  course={value.tittle}
                  title={value.diploma}
                />
              );
            })}
          </div>
        </section>

        <section
          className={`${styles["services"]} ${styles["section"]}`}
          id="services"
        >
          <span className={styles["section-subtitle"]}>What I Offer</span>
          <h2 className={styles["section-title"]}>My Services</h2>

          <div
            className={`${styles["services__container"]} ${styles["bd-grid"]}`}
          >
            <ServiceCard
              icon={<MdMonitor />}
              title="Frontend Development"
              description="I create responsive websites and web applications with React technology"
            />

            <ServiceCard
              icon={<FiServer />}
              title="Backend Development"
              description="I'm new to the area, but I already have something to give. And I always try to do my best."
            />

            <ServiceCard
              icon={<ImWordpress />}
              title="WordPress Development"
              description="I have experience in WordPress development, creating websites, blogs, even online stores."
            />

            <ServiceCard
              icon={<FaPencilAlt />}
              title="Content Creator"
              description="I write some tech-focused blog posts on the Medium platform."
            />
          </div>
        </section>

        <section className={`${styles["project"]} ${styles["section"]}`}>
          <div
            className={`${styles["project__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["project__data"]}>
              <h2
                className={`${styles["section-title"]} ${styles["project__title"]}`}
              >
                Do you have a project in mind?
              </h2>
              <p className={styles["project__description"]}>
                If you have a project that you want to carry out, do not
                hesitate and tell me what it is, and what services I can offer
                you, contact me directly here.
              </p>
              <a
                href="#contact"
                className={`${styles["button"]} ${styles["button__light"]}`}
              >
                Contact Me
              </a>
            </div>

            <img src={oportunity} alt="" className={styles["project__img"]} />
          </div>
        </section>

        <section
          className={`${styles["works"]} ${styles["section"]}`}
          id="works"
        >
          <span className={styles["section-subtitle"]}>My Portfolio</span>
          <h2 className={styles["section-title"]}>Recent Works</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>
            {worksList.map((value, index) => {
              return (
                <WorksCard
                  link={value.link}
                  title={value.tittle}
                  bgPath={value.image}
                />
              );
            })}
          </div>
        </section>

        <section
          className={`${styles["contact"]} ${styles["section"]}`}
          id="contact"
        >
          <span className={styles["section-subtitle"]}>Contact Me</span>
          <h2 className={styles["section-title"]}>Get In Touch</h2>

          <div
            className={`${styles["contact__container"]} ${styles["bd-grid"]}`}
          >
            <form
              action="https://formsubmit.co/tchiinhemba@gmail.com"
              method="POST"
              className={styles["contact__form"]}
            >
              <div className={styles["contact__inputs"]}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={`${styles["contact__input"]} ${styles["textValue"]}`}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`${styles["contact__input"]} ${styles["textValue"]}`}
                  required
                />
              </div>

              <input
                type="text"
                name="_subject"
                placeholder="Project"
                className={styles["contact__input"]}
              />
              <textarea
                name="message"
                cols="0"
                rows="10"
                placeholder="Message"
                className={`${styles["contact__input"]} ${styles["textValue"]}`}
              ></textarea>

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="your custom message"
              />
              <input
                type="hidden"
                name="_next"
                value="https://tchiinhemba.com/thank"
              />

              <button
                type="submit"
                value="Send Message"
                className={`${styles["button"]} ${styles["contact__button"]}`}
              >
                Send Message
              </button>
            </form>

            <div>
              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>Call me</h3>
                <span className={styles["contact__text"]}>+244931509802</span>
              </div>

              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>E-mail</h3>
                <span className={styles["contact__text"]}>
                  tchiinhemba@gmail.com
                </span>
              </div>

              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>Location</h3>
                <span className={styles["contact__text"]}>
                  Rua E, Edificio C15, 2-3
                </span>
                <span className={styles["contact__text"]}>
                  Kilamba - Luanda
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
