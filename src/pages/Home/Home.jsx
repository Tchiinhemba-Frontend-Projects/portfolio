import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { BiEnvelope, BiMedal } from "react-icons/bi";
import { FiServer } from "react-icons/fi";
import { MdMonitor, MdVerified } from "react-icons/md";
import { FaLinkedinIn, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { ImWordpress } from "react-icons/im";
import { BsMedium } from "react-icons/bs";

import { Education, ServiceCard, Skill, WorksCard } from "../../components";
import profile from "../../assets/images/profile.jpeg";
import profile2 from "../../assets/images/profile2.jpeg";
import oportunity from "../../assets/images/oportunity.png";

import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import work4 from "../../assets/images/work4.png";
import work5 from "../../assets/images/work5.png";
import work6 from "../../assets/images/work6.png";
import work7 from "../../assets/images/work7.png";
import work8 from "../../assets/images/work8.png";
import work9 from "../../assets/images/work9.png";
import work10 from "../../assets/images/work10.png";
import work11 from "../../assets/images/work11.png";
import work12 from "../../assets/images/work12.png";


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

  let projects = [
    {
      link: "https://targeting.ao",
      image: work1,
      tittle: "Targeting"
    },
    {
      link: "https://stenifarma.ao",
      image: work2,
      tittle: "Stenifarma"
    },
    {
      link: "https://somosmikos.com",
      image: work3,
      tittle: "Mikos"
    },
    {
      link: "https://oxygen-dun.vercel.app",
      image: work4,
      tittle: "Oxigen"
    },
    {
      link: "https://gomedia.co.ao/inicio",
      image: work5,
      tittle: "Gomedia"
    },
    {
      link: "https://sanlam.ao",
      image: work6,
      tittle: "Sanlam"
    },
    {
      link: "https://imosol.co.ao",
      image: work7,
      tittle: "Imosol"
    },
    {
      link: "https://notadigital.company",
      image: work8,
      tittle: "NOT"
    },
    {
      link: "https://kixicredito.ao",
      image: work9,
      tittle: "Kixicredito"
    },
    {
      link: "https://kyndalla.com",
      image: work10,
      tittle: "Kyndalla"
    },
    {
      link: "https://economia.tech",
      image: work11,
      tittle: "economia.tech"
    },
    {
      link: "https://bigonepatriota.ao",
      image: work12,
      tittle: "Big One Patriota"
    }, 
  ]

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
                Desenvolvedor de software
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
                Descarregar Currículo
              </a>
            </div>
          </div>
        </section>

        <section
          className={`${styles["about"]} ${styles["section"]}`}
          id="about"
        >
          <span className={styles["section-subtitle"]}>Minha Introdução</span>
          <h2 className={styles["section-title"]}>Sobre Mim</h2>

          <div className={`${styles["about__container"]} ${styles["bd-grid"]}`}>
            <div className={styles["about__data"]}>
              <p className={styles["about__description"]}>
                Olá eu sou o Eládio, um jovem de {age} anos, amante de
                tecnologia, curioso e autodidata. Sempre dispostos a aprender
                coisas novas, enfrentar novos desafios e focado em construir uma
                carreira de sucesso.
              </p>
              <img src={profile2} alt="" className={styles["about__img"]} />
            </div>

            <div>
              <div className={styles["about__information"]}>
                <h3 className={styles["about__information-title"]}>
                  Informação
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
                  Experiência
                </h3>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Desenvolvedor Web
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Grupo Zwela (atual)
                    </span>
                  </div>
                </div>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Desenvolvedor Frontend
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      Bukaapp - 8 meses
                    </span>
                  </div>
                </div>

                <div className={styles["about__information-data"]}>
                  <MdVerified className={styles["about__information-icon"]} />
                  <div>
                    <span className={styles["about__information-subtitle"]}>
                      Freelancer
                    </span>
                    <span
                      className={styles["about__information-subtitle-small"]}
                    >
                      4 anos como freelancer
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
          <span className={styles["section-subtitle"]}>Por Que Eu</span>
          <h2 className={styles["section-title"]}>Minhas habilidades</h2>

          <div
            className={`${styles["skills__container"]} ${styles["bd-grid"]}`}
          >
            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Frontend</h3>

              <Skill nameSkill="HTML/CSS" xp={92} />
              <Skill nameSkill="javascript" xp={79} />
              <Skill nameSkill="React.js" xp={60} />
              <Skill nameSkill="react native" xp={25} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Backend</h3>

              <Skill nameSkill="node.js" xp={40} />
              <Skill nameSkill="mongodb" xp={28} />
              <Skill nameSkill="express" xp={38} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>WordPress</h3>
              <Skill nameSkill="Plataforma Wordpress" xp={90} />
              <Skill nameSkill="Google Analytics" xp={70} />
              <Skill nameSkill="Woocommerce" xp={80} />
              <Skill nameSkill="Ads" xp={40} />
            </div>

            <div className={styles["skills__content"]}>
              <h3 className={styles["skills__subtitle"]}>Outras</h3>
              <Skill nameSkill="SEO" xp={60} />
              <Skill nameSkill="Newsletter" xp={60} />
              <Skill nameSkill="Servidores Linux" xp={54} />
            </div>
          </div>
        </section>

        <section className={`${styles["education"]} ${styles["section"]}`}>
          <span className={styles["section-subtitle"]}>Qualificação</span>
          <h2 className={styles["section-title"]}>Algumas Certificações</h2>

          <div
            className={`${styles["education__container"]} ${styles["bd-grid"]}`}
          >

            <Education
              year={2022}
              institute="Hacker Rank"
              course="Certificação CSS"
            />
            <Education
              year={2020}
              institute="Digital Innovation One"
              course="Desenvolvedor Web (BootCamp)"
            />
            <Education
              year={2019}
              institute="Politécnico de Benguela"
              course="Eletrônica Industrial e Automação"
            />
          </div>
        </section>

        <section
          className={`${styles["services"]} ${styles["section"]}`}
          id="services"
        >
          <span className={styles["section-subtitle"]}>O Que Ofereço</span>
          <h2 className={styles["section-title"]}>Meus Serviços</h2>

          <div
            className={`${styles["services__container"]} ${styles["bd-grid"]}`}
          >
            <ServiceCard
              icon={<MdMonitor />}
              title="Desenvolvedor Frontend"
              description="Crio sites estáticos e responsivos com HTML, CSS, JavaScript, etc..."
            />

            <ServiceCard
              icon={<FiServer />}
              title="Desenvolvedor Backend"
              description="Sou novo na área, mas já tenho algo para dar. E sempre tento fazer o meu melhor."
            />

            <ServiceCard
              icon={<ImWordpress />}
              title="Desenvolvedor WordPress"
              description="Possuo experiência com WordPress desde a criação de sites, blogues, até lojas virtuais."
            />

            <ServiceCard
              icon={<FaPencilAlt />}
              title="Criador de Conteúdo"
              description="Escrevo alguns blog posts focados em tecnologia na plataforma Medium."
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
                Oportunidade de trabalho para mim?
              </h2>
              <p className={styles["project__description"]}>
                Sou um desenvolvedor com alguma experiência, se você estiver
                interessado em mim, por favor me diga qualquer coisa.
              </p>
              <a
                href="#contact"
                className={`${styles["button"]} ${styles["button__light"]}`}
              >
                Contactar
              </a>
            </div>

            <img src={oportunity} alt="" className={styles["project__img"]} />
          </div>
        </section>

        <section
          className={`${styles["works"]} ${styles["section"]}`}
          id="works"
        >
          <span className={styles["section-subtitle"]}>Meu Portfolio</span>
          <h2 className={styles["section-title"]}>Alguns Projetos</h2>

          <div className={`${styles["works__container"]} ${styles["bd-grid"]}`}>
            {projects.map((value, index) => {
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
          <span className={styles["section-subtitle"]}>Contate-me</span>
          <h2 className={styles["section-title"]}>Entrar Em Contato</h2>

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
                  placeholder="Nome"
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
                placeholder="Assunto"
                className={styles["contact__input"]}
              />
              <textarea
                name="message"
                cols="0"
                rows="10"
                placeholder="Mensagem"
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
                value="https://tchiinhemba.vercel.app/thank"
              />

              <button
                type="submit"
                value="Send Message"
                className={`${styles["button"]} ${styles["contact__button"]}`}
              >
                Enviar
              </button>
            </form>

            <div>
              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>Me ligue</h3>
                <span className={styles["contact__text"]}>+244931509802</span>
              </div>

              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>E-mail</h3>
                <span className={styles["contact__text"]}>
                  tchiinhemba@gmail.com
                </span>
              </div>

              <div className={styles["contact__info"]}>
                <h3 className={styles["contact__subtitle"]}>Localização</h3>
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
