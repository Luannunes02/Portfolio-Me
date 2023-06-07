import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "intersection-observer";

import LuanLogoWhite from "@/assets/luan-logo-white.png";
import LuanEdit from "@/assets/LuanEdit.png";
import FullStackImage from "@/assets/fullstack.png";
import FrontEnd from "@/assets/front-end.png";
import MobileDevImage from "@/assets/mobile.png";
import Telefone from "@/assets/telefone 1.png";
import Localizacao from "@/assets/localizacao 1.png";
import Email from "@/assets/email 1.png";
import WhatsAppLogoBlue from "@/assets/whatsapp-azul 1.png";
import LinkedinLogoBlue from "@/assets/linkedin-azul 1.png";
import GitHubLogoBlue from "@/assets/github-azul 1.png";
import WhatsAppLogWhite from "@/assets/whatsapp-branco.png";
import LinkedinLogWhite from "@/assets/linkedin-branco.png";
import GitHubLogWhite from "@/assets/github-branco.png";

import Typescript from "@/assets/Skills/TYPESCRIPT.png";
import WordPress from "@/assets/Skills/wordpress.png";
import Bootstrap from "@/assets/Skills/bootstrap.png";
import Javascript from "@/assets/Skills/javascript.png";
import NextJs from "@/assets/Skills/nextjs.png";
import ReactLogo from "@/assets/Skills/react.png";
import ReactNative from "@/assets/Skills/reactnative1.png";
import Redux from "@/assets/Skills/redux.png";
import Sass from "@/assets/Skills/sass.png";
import StyledComponents from "@/assets/Skills/styled.png";
import Node from "@/assets/Skills/nodejs.png";
import Mongo from "@/assets/Skills/mongodb.png";

import ButtonHeader from "@/components/ButtonHeader";
import ButtonDefault from "@/components/ButtonDefault";
import CardServices from "@/components/CardServices";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardFullStack from "@/components/ProjectCardFullStack";
import ProjectCardMobile from "@/components/ProjectCardMobile";
import ContactForm from "@/components/ContactForm";

import ProjectsApi from "@/pages/api/projects-api.json";
const projects = ProjectsApi.projects;
import ProjectsApiFullStack from "@/pages/api/projects-api-fullstack.json";
const projectsFullStack = ProjectsApiFullStack.projects;
import ProjectsApiMobile from "@/pages/api/projects-api-mobile.json";
const projectsMobile = ProjectsApiMobile.projects;

import {
  About,
  Header,
  AboutSecondPart,
  Services,
  Skills,
  Projects,
  Contact,
  Footer,
} from "@/styles/Home";
import ContactWrapper from "@/components/ContactWrapper";

export default function Home() {
  const [isTransparent, setIsTransparent] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [projectsType, setProjectsType] = useState("web");
  const [currentNumber1, setCurrentNumber1] = useState(0);
  const [currentNumber2, setCurrentNumber2] = useState(0);
  const [currentNumber3, setCurrentNumber3] = useState(0);

  const handleTypeChange = (type: string) => {
    setProjectsType(type);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrollingDown(currentScroll > lastScroll);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrollingDown(currentScroll > lastScroll);
      lastScroll = currentScroll;
      const scrollPosition = window.pageYOffset;
      setIsTransparent(scrollPosition < 0.15 * window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateNumbers = () => {
    const targetNumber1 = 1;
    const targetNumber2 = 2;
    const targetNumber3 = 40;

    let step = 1;

    const interval = setInterval(() => {
      if (
        currentNumber1 >= targetNumber1 &&
        currentNumber2 >= targetNumber2 &&
        currentNumber3 >= targetNumber3
      ) {
        clearInterval(interval);
      } else {
        setCurrentNumber1((prevNumber) =>
          prevNumber < targetNumber1 ? prevNumber + step : prevNumber
        );
        setCurrentNumber2((prevNumber) =>
          prevNumber < targetNumber2 ? prevNumber + step : prevNumber
        );
        setCurrentNumber3((prevNumber) =>
          prevNumber < targetNumber3 ? prevNumber + step : prevNumber
        );
      }
    }, 100); // Intervalo de 100ms para "Projetos feitos"
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Executar a animação aqui
          setTimeout(() => animateNumbers(), 1000);
          //animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <main>
      <Header
        className={`bg-primary-color/100 fixed w-full z-10 transition-all duration-300 ${
          isScrollingDown ? "-translate-y-full" : ""
        }
        ${isScrollingDown ? "-translate-y-full" : ""} ${
          isTransparent ? "bg-primary-color/100" : "bg-primary-color/70"
        }
        `}>
        <nav className="container mx-auto flex flex-wrap sm:justify-between justify-around py-5 items-center">
          <div>
            <Image src={LuanLogoWhite} alt={"logo-luan-white"} width={150} />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-14 font-bold text-xl">
              <li>
                <a href="#About">
                  <ButtonHeader text="Sobre" />
                </a>
              </li>
              <li>
                <a href="#Services">
                  <ButtonHeader text="Serviços" />
                </a>
              </li>
              <li>
                <a href="#Skills">
                  <ButtonHeader text="Habilidades" />
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <ButtonHeader text="Projetos" />
                </a>
              </li>
              <li>
                <a href="#Contact">
                  <ButtonHeader text="Contato" />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="h-8 w-8 fill-current text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18v-2H3Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-primary-color/100 transition-all duration-300
           ${isScrollingDown ? "-translate-y-full" : ""} ${
            isTransparent ? "bg-primary-color/100" : "bg-primary-color/70"
          }
          `}>
          <ul className="flex flex-col space-y-4 font-bold text-xl py-4">
            <li>
              <a href="#About">Sobre</a>
            </li>
            <li>
              <a href="#Services">Serviços</a>
            </li>
            <li>
              <a href="#Skills">Habilidades</a>
            </li>
            <li>
              <a href="#Projects">Projetos</a>
            </li>
            <li>
              <a href="#Contact">Contato</a>
            </li>
          </ul>
        </div>
      </Header>

      <About id="About">
        <div className="container mx-auto flex-row pt-24 grid grid-cols-2 flex-wrap">
          <div className="flex align-center justify-center textContainer">
            <h1>
              Luan
              <span> Desenvolvedor FullStack</span>
            </h1>
            <p className="mt-5">
              Desenvolvedor FullStack, graduado em Análise e Desenvolvimento de
              Sistemas, apaixonado por desenvolvimento de aplicações web e
              mobile. Neste momento dedico uma parte significativa do meu tempo
              ao estudo de temas relacionados com a carreira de um desenvolvedor
              já vendi alguns sites e isso me deu um maior entendimento do
              mercado e atualmente participo de uma startup na qual estou me
              desenvolvendo ainda mais e ampliando meus conhecimentos
            </p>
            <div className="flex gap-10 mt-8 max-[600px]:gap-5 max-[600px]:justify-center">
              <ButtonDefault text="contato" id="Contact" />
              <ButtonDefault text="projetos" id="Projects" />
            </div>
            <div className="mt-6">
              <ContactWrapper
                whatsapp={WhatsAppLogoBlue}
                linkedin={LinkedinLogoBlue}
                github={GitHubLogoBlue}
              />
            </div>
          </div>
          <div>
            <Image src={LuanEdit} alt={"luan-image"} width={500} />
          </div>
        </div>
      </About>

      <AboutSecondPart id="AboutSecondPart">
        <div className="container mx-auto">
          <h2>Desenvolvedor FullStack</h2>
          <p>
            Com amplo conhecimento na área, já fiz diversos projetos pessoais e
            frequentemente estou estudando temas relacionados a área, já vendi
            alguns sites e isso me deu um maior entendimento do mercado e
            atualmente participo de uma startup na qual estou me desenvolvendo
            ainda mais e ampliando meus conhecimentos.
          </p>
          <h4>formado na área e com</h4>
          <div className="numbersOfMyCarrerContainer" ref={sectionRef}>
            <div className="text">
              <p>
                +<span>{currentNumber1}</span>
              </p>
              <h1>Ano na área</h1>
            </div>
            <div className="text">
              <p>
                +<span>{currentNumber2}</span>
              </p>
              <h1>Sites vendidos</h1>
            </div>
            <div className="text">
              <p>
                +<span>{currentNumber3}</span>
              </p>
              <h1>Projetos feitos</h1>
            </div>
          </div>
        </div>
      </AboutSecondPart>

      <Services>
        <div className="container mx-auto">
          <h1 id="Services">Posso atuar como</h1>
          <div className="flex flex-wrap justify-around cardsContainer">
            <CardServices img={FullStackImage} text="Desenvolvedor FullStack" />
            <CardServices img={FrontEnd} text="Desenvolvedor Front-end" />
            <CardServices img={MobileDevImage} text="Desenvolvedor Mobile" />
          </div>
        </div>
      </Services>

      <Skills>
        <div className="container mx-auto">
          <h1 id="Skills">TECNOLOGIAS</h1>
          <h2>QUE POSSUO CONHECIMENTO</h2>
          <div className="skillsContainer gap-10">
            <SkillCard img={Typescript} color="#0075FF" />
            <SkillCard img={ReactNative} color="#26d9fd" />
            <SkillCard img={NextJs} color="#000000" />
            <SkillCard img={ReactLogo} color="#61dafb" />
            <SkillCard img={Node} color="#666861" />
            <SkillCard img={Mongo} color="#54ad45" />
            <SkillCard img={WordPress} color="#21759b" />

            <SkillCard img={Redux} color="#754abc" />
            <SkillCard img={Javascript} color=" #f0dc4e" />
            <SkillCard img={Sass} color="#cd669a" />
            <SkillCard img={Bootstrap} color="#8912fc" />
            <SkillCard img={StyledComponents} color="#e6907b" />
          </div>
        </div>
      </Skills>

      <Projects>
        <div className="container mx-auto">
          <h1 id="Projects">PROJETOS</h1>
          <h2>E SITES QUE VENDI</h2>
          <div className="buttonContainer mt-5">
            <button
              className={`typeButton ${projectsType === "web" ? "active" : ""}`}
              onClick={() => handleTypeChange("web")}>
              Front-end
            </button>
            <button
              className={`typeButton ${
                projectsType === "fullstack" ? "active" : ""
              }`}
              onClick={() => handleTypeChange("fullstack")}>
              Fullstack
            </button>
            <button
              className={`typeButton ${
                projectsType === "mobile" ? "active" : ""
              }`}
              onClick={() => handleTypeChange("mobile")}>
              Mobile
            </button>
          </div>
          {projectsType === "web" && (
            <div className="flex projectsCntainer">
              {projects.map((project: any) => (
                <ProjectCard
                  key={project.id}
                  name={project.nome}
                  description={project.descricao}
                  gif={project.gif}
                  deploy={project.deploy}
                  github={project.githubLink}
                  skills={project.tecnologias}
                  img={project.capa}
                />
              ))}
            </div>
          )}

          {projectsType === "fullstack" && (
            <div className="flex projectsCntainer">
              {projectsFullStack.map((project: any) => (
                <ProjectCardFullStack
                  key={project.id}
                  name={project.nome}
                  gif={project.gif}
                  front={project.front}
                  back={project.back}
                  skills={project.tecnologias}
                  img={project.capa}
                  description={project.descricao}
                />
              ))}
            </div>
          )}

          {projectsType === "mobile" && (
            <div className="flex projectsCntainer">
              {projectsMobile.map((project: any) => (
                <ProjectCardMobile
                  key={project.id}
                  name={project.nome}
                  gif={project.gif}
                  gitHub={project.githubLink}
                  skills={project.tecnologias}
                  img={project.capa}
                  description={project.descricao}
                />
              ))}
            </div>
          )}
        </div>
      </Projects>

      <Contact>
        <div className="container mx-auto">
          <h1 id="Contact">CONTATO</h1>
          <h2>VAMOS NOS CONHECER!</h2>
          <div className="contactContainer grid-cols-2 mt-12">
            <div className="formContainer">
              <ContactForm />
            </div>
            <div className="infoAboutMe">
              <h2 className="title">Fique por dentro</h2>
              <div className="content">
                <div className="infoContainer flex gap-4 justify-center items-center">
                  <div className="imageContainer">
                    <Image
                      src={Localizacao}
                      alt="Guará, Brasília-DF, 71261-060"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h3>Guará, Brasília-DF, 71261-060</h3>
                </div>
                <div className="infoContainer flex gap-4 justify-center items-center">
                  <div className="imageContainer">
                    <Image
                      src={Email}
                      alt="nunesesbaltar.luan02@gmail.com"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h3>nunesesbaltar.luan02@gmail.com</h3>
                </div>
                <div className="infoContainer flex gap-4 justify-center items-center">
                  <div className="imageContainer">
                    <Image
                      src={Telefone}
                      alt="(61) 98465-3761"
                      width={300}
                      height={300}
                    />
                  </div>
                  <h3>(61) 98465-3761</h3>
                </div>
                <div className="flex justify-start ">
                  <ContactWrapper
                    whatsapp={WhatsAppLogoBlue}
                    linkedin={LinkedinLogoBlue}
                    github={GitHubLogoBlue}
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Contact>

      <Footer>
        <div className="container mx-auto flex flex-col justify-center items-center py-10">
          <Image src={LuanLogoWhite} alt={"logo-luan-white"} width={150} />
          <div className="flex justify-around w-full items-center">
            <p className="opacity-75 mt-5">© 2023 Luan Nunes</p>
            <div className="mediaContainer">
              <ContactWrapper
                whatsapp={WhatsAppLogWhite}
                linkedin={LinkedinLogWhite}
                github={GitHubLogWhite}
              />
            </div>
          </div>
        </div>
      </Footer>

      <a
        href="https://api.whatsapp.com/send?phone=+55(61) 98465-3761&text=Olá Luan, cheguei aqui por meio do seu portfolio."
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#25d366",
          color: "#FFF",
          borderRadius: "50px",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "1px 1px 2px #888",
          zIndex: 1000,
        }}
        target="_blank">
        <i style={{ marginTop: "16px" }} className="fa fa-whatsapp"></i>
      </a>
    </main>
  );
}
