import React from "react";
import styles from "./Home.module.scss";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineLink,
} from "react-icons/ai";
import { BiEnvelope, BiMedal } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { ImWordpress } from "react-icons/im";
import { BsMedium } from "react-icons/bs";

import { Education, ServiceCard, Skill, WorksCard } from "../../components";

export function Home() {
  return (
    <React.Fragment>
      <main className={styles["l-main"]}>
        <section className={styles["home"]} id="home">
          <div className={`${styles["home__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["home__data"]}>
              <div className={styles["home__img"]}>
                <img src="https://source.unsplash.com/random" alt="" />
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
                Get Resume
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
                Hello, I’m Eládio Tchiinhemba, I’m a programmer, in my spare
                time I’m Iron Man, a determined person, confident and always
                willing to do whatever it takes to get what I want.
              </p>
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className={styles["about__img"]}
              />
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
                  <BiMedal className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      3 Year Freelancer
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Experience
                    </span>
                  </div>
                </div>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      3 Projects
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Completed
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
          <span className={styles["section-subtitle"]}>Why Chose Me</span>
          <h2 className={styles["section-title"]}>My Skills</h2>

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Frontend</h3>

              <Skill nameSkill="react.js" xp={58} />
              <Skill nameSkill="javascript" xp={69} />
              <Skill nameSkill="css/sass" xp={80} />
              <Skill nameSkill="react native" xp={25} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Backend</h3>

              <Skill nameSkill="node.js" xp={40} />
              <Skill nameSkill="mongodb" xp={28} />
              <Skill nameSkill="express" xp={38} />
              <Skill nameSkill="SQL" xp={23} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Wordpress</h3>
              <Skill nameSkill="Wordpress Plataform" xp={80} />
              <Skill nameSkill="Google Analytics" xp={70} />
              <Skill nameSkill="SEO" xp={70} />
              <Skill nameSkill="Ads" xp={70} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Others</h3>
              <Skill nameSkill="SQL" xp={70} />
            </div>
          </div>
        </section>

        <section className={`${styles["education"]} ${styles["section"]}`}>
          <span className={styles["section-subtitle"]}>Qualification</span>
          <h2 className={styles["section-title"]}>Some Certifications</h2>

          <div
            className={`${styles["education__container"]} ${styles["bd-grid"]}`}
          >
            <Education year={2020} institute="Digital Innovation One" course="HTML Web Developer (BootCamp)"/>
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
              icon={<ImWordpress />}
              title="WordPress Development"
              description="I'm new to the area, but I already have something to give. And I always
        try to do my best."
            />
            <ServiceCard icon={<ImWordpress />} />
            <ServiceCard icon={<ImWordpress />} />
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
                Do you have a job opportunity for me?
              </h2>
              <p className={styles["project__description"]}>
                I am a newbie and looking to be adopted by a software company,
                if you are interested in me, please tell me anything.
              </p>
              <a
                href="#contact"
                className={`${styles["button"]} ${styles["button__light"]}`}
              >
                Contact Me
              </a>
            </div>

            <img
              src="https://source.unsplash.com/random"
              alt=""
              className={styles["project__img"]}
            />
          </div>
        </section>

        <section
          className={`${styles["works"]} ${styles["section"]}`}
          id="works"
        >
          <span className={styles["section-subtitle"]}>My Portfolio</span>
          <h2 className={styles["section-title"]}>Some Projects</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>
            <WorksCard
              link="https://google.com"
              title="Project"
              bgPath="https://source.unsplash.com/random"
            />
            <WorksCard
              link="https://google.com"
              title="Project"
              bgPath="https://source.unsplash.com/random"
            />
            <WorksCard
              link="https://google.com"
              title="Project"
              bgPath="https://source.unsplash.com/random"
            />
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
              action="https://formsubmit.co/elladioclaudio@gmail.com"
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
                placeholder="Subject"
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
                value="https://eladioclaudio.vercel.app/thank"
              />

              <button
                type="submit"
                value="Send Message"
                className={`${styles["button"]} ${styles["contact__button"]}`}
              >
                Send
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
