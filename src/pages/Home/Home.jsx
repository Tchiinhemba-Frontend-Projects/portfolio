import React from "react";
import styles from "./Home.module.scss";
import { AiFillGithub, AiFillPhone, AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { BiEnvelope, BiMedal } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export function Home() {
  return (
    <React.Fragment>
      <main className={styles["l-main"]}>
        <section className={styles["home"]} id="home">
          <div className={`${styles["home__container"]} ${styles['bd-grid']}`}>
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
                  href="https://www.instagram.com/tchiinhemba/"
                  target="_blank"
                  className={styles["home__social-link"]}
                >
                  <AiOutlineInstagram />
                </a>
              </div>
              <a
                download="Resume-Eladio-Claudio"
                href="assets/pdf/Resume-Eládio-Cláudio.pdf"
                className={` ${styles['button']} ${styles["home__button"]}`}
              >
                Get Resume
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles["about"]} ${styles['section']}`} id="about">
          <span className={styles["section-subtitle"]}>My intro</span>
          <h2 className={styles["section-title"]}>About Me</h2>

          <div className={`${styles["about__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["about__data"]}>
              <p className={styles["about__description"]}>
                Hello, I’m Eládio Tchiinhemba, I’m a programmer, in my spare time
                I’m Iron Man, a determined person, confident and always willing
                to do whatever it takes to get what I want.
              </p>
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className={styles["about__img"]}
              />
            </div>

            <div>
              <div className={styles["about__information"]}>
                <h3 className={styles["about__information-title"]}>Information</h3>

                <div className={styles["about__information-data"]}>
                  <i className="bx bx-user about__information-icon"></i>
                  <span>Eládio Tchiinhemba</span>
                </div>

                <div className={styles["about__information-data"]}>
                  <AiFillPhone />
                  <span>+244931509802</span>
                </div>

                <div className={styles["about__information-data"]}>
                  <BiEnvelope />
                  <span>tchiinhemba@gmail.com</span>
                </div>
              </div>

              <div className={styles["about__information"]}>
                <h3 className={styles["about__information-title"]}>Experience</h3>

                <div className={styles["about__information-data"]}>
                  <BiMedal />
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
                  <MdVerified />
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

        <section className={`${styles["skills"]} ${styles['section']}`} id="skills">
          <span className={styles["section-subtitle"]}>Why Chose Me</span>
          <h2 className={styles["section-title"]}>My Skills</h2>

          <div className={`${styles["skills__container"]} ${styles['bd-grid']}`}>
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Frontend</h3>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>HTML/CSS</span>
                <span className={styles["skills__number"]}>60%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__html']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>Javascript</span>
                <span className={styles["skills__number"]}>35%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__js']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>React</span>
                <span className={styles["skills__number"]}>20%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__react']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>Angular</span>
                <span className={styles["skills__number"]}>25%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__angular']}`}></span>
              </div>
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Backend</h3>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>Node js</span>
                <span className={styles["skills__number"]}>14%</span>
                <span className={styles["skills__bar"]}></span>
                <span className={`${styles["skills__bar"]} ${styles['skills__node']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>MongoDb</span>
                <span className={styles["skills__number"]}>10%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__mongodb']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>C</span>
                <span className={styles["skills__number"]}>8%</span>
                <span className={`${styles["skills__bar"]} ${styles['skills__c']}`}></span>
              </div>

              <div className={styles["skills__data"]}>
                <span className={styles["skills__name"]}>Sql</span>
                <span className={styles["skills__number"]}>23%</span>
                <span className={`${styles["skills__bar"]} ${styles['section']}`}></span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["education"]} ${styles['section']}`}>
          <span className={styles["section-subtitle"]}>Qualification</span>
          <h2 className={styles["section-title"]}>Some Certifications</h2>

          <div className={`${styles["education__container"]} ${styles['bd-grid']}`}>
            <div className={styles["education__content"]}>
              <div>
                <h3 className={styles["education__year"]}>2020</h3>
                <span className={styles["education__university"]}>
                  Digital Innovations One
                </span>
              </div>

              <div className={styles["education__time"]}>
                <span className={styles["education__rounder"]}></span>
                <span className={styles["education__line"]}></span>
              </div>

              <div>
                <h3 className={styles["education__race"]}>
                  Course Certificate
                </h3>
                <span className={styles["education__specialty"]}>
                  HTML Web Developer (BootCamp)
                </span>
              </div>
            </div>

            <div className={styles["education__content"]}>
              <div>
                <h3 className={styles["education__year"]}>2020</h3>
                <span className={styles["education__university"]}>
                  Fundação Bradesco
                </span>
              </div>

              <div className={styles["education__time"]}>
                <span className={styles["education__rounder"]}></span>
                <span className={styles["education__line"]}></span>
              </div>

              <div>
                <h3 className={styles["education__race"]}>
                  Course Certificate
                </h3>
                <span className={styles["education__specialty"]}>
                  Object Oriented Programming (OOP)
                </span>
              </div>
            </div>

            <div className={styles["education__content"]}>
              <div>
                <h3 className={styles["education__year"]}>2020</h3>
                <span className={styles["education__university"]}>
                  Digital Innovation One
                </span>
              </div>

              <div className={styles["education__time"]}>
                <span className={styles["education__rounder"]}></span>
                <span className={styles["education__line"]}></span>
              </div>

              <div>
                <h3 className={styles["education__race"]}>
                  Course Certificate
                </h3>
                <span className={styles["education__specialty"]}>
                  Programming Logic
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["services"]} ${styles['section']}`} id="services">
          <span className={styles["section-subtitle"]}>What I Offer</span>
          <h2 className={styles["section-title"]}>My Services</h2>

          <div className={`${styles["services__container"]} ${styles['bd-grid']}`}>
            <div className={styles["services__content"]}>
              <i className="bx bx-minus-front services__icon"></i>
              <h3 className={styles["services__title"]}>
                Frontend development
              </h3>
              <p className={styles["services__description"]}>
                I'm new to the area, but I already have something to give. And I
                always try to do my best.
              </p>
            </div>
            <div className={styles["services__content"]}>
              <i className="bx bx-server services__icon"></i>
              <h3 className={styles["services__title"]}>Backend development</h3>
              <p className={styles["services__description"]}>
                I'm new to the area, but I already have something to give. And I
                always try to do my best.
              </p>
            </div>
            <div className={styles["services__content"]}>
              <i className="bx bx-pencil services__icon"></i>
              <h3 className={styles["services__title"]}>Content Writing</h3>
              <p className={styles["services__description"]}>
                I'm new to the area, but I already have something to give. And I
                always try to do my best.
              </p>
            </div>
            <div className={styles["services__content"]}>
              <i className="bx bxl-wordpress services__icon"></i>
              <h3 className={styles["services__title"]}>
                WordPress Development
              </h3>
              <p className={styles["services__description"]}>
                I'm new to the area, but I already have something to give. And I
                always try to do my best.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles['project']} ${styles['section']}`}>
          <div className={`${styles['project__container']} ${styles['bd-grid']}`}>
            <div className={styles["project__data"]}>
              <h2 className={`${styles['section-title']} ${styles['project__title']}`}>
                Do you have a job opportunity for me?
              </h2>
              <p className={styles["project__description"]}>
                I am a newbie and looking to be adopted by a software company,
                if you are interested in me, please tell me anything.
              </p>
              <a href="#contact" className={`${styles['button']} ${styles['button__light']}`}>
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

        <section className={`${styles['works']} ${styles['section']}`} id="works">
          <span className={styles["section-subtitle"]}>My Portfolio</span>
          <h2 className={styles["section-title"]}>Some Projects</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>


            
            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://eladioclaudio.github.io/"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 1</span>
              </div>
            </div>



            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://github.com/eladioclaudio/happy"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 2</span>
              </div>
            </div>



            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://buukando.github.io"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 3</span>
              </div>
            </div>

            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://eladioclaudio.github.io/portfolio/"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 4</span>
              </div>
            </div>

            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://eladioclaudio.github.io/netflix_clone/"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 5</span>
              </div>
            </div>

            <div className={styles["works__img"]}>
              <img src="https://source.unsplash.com/random" alt="" />

              <div className={styles["works__data"]}>
                <a
                  href="https://eladioclaudio.github.io/instagram_clone/"
                  target="_blank"
                  className={styles["works__link"]}
                >
                  <AiOutlineLink />
                </a>
                <span className={styles["works__title"]}>Project 6</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles['contact']} ${styles['section']}`} id="contact">
          <span className={styles["section-subtitle"]}>Contact Me</span>
          <h2 className={styles["section-title"]}>Get In Touch</h2>

          <div className={`${styles['contact__container']} ${styles['bd-grid']}`}>
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
                  className={`${styles['contact__input']} ${styles['textValue']}`}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`${styles['contact__input']} ${styles['textValue']}`}
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
                className={`${styles['contact__input']} ${styles['textValue']}`}
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
                className={`${styles['button']} ${styles['contact__button']}`}
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
