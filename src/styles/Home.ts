import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const Header = styled.header`
  transition: all 0.3s;
`;

export const About = styled.section`
    min-height: 100vh;

    }

    .textContainer {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 4rem;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        line-height: 4rem;

        span {
            margin: 0;
            padding: 0;
            color: #0075FF;
        }
    }

    p {
        font-weight: 600;
        font-style: italic;
    }

    img {
        width: 100%;
    }

    .container { 
        @media screen and (max-width: 767px) {
            display: flex;
        flex-direction: column; 
        }

        @media screen and (max-width: 500px) {
        padding: 7rem 0.5rem;  
            
        display: flex;
        flex-direction: column; 
        
        h1 {
            font-size: 3rem;
            line-height: 2.8rem;
        }        
    }
`;

export const AboutSecondPart = styled.section`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 77%,
    rgba(0, 117, 255, 1) 100%
  );
  width: 100%;
  padding: 7rem 0;

  .container {
    display: flex;
    flex-direction: column;
    padding: 7rem 15rem;
    min-height: 70vh;
    text-align: center;
  }

  h2 {
    color: #0075ff;
    font-weight: bold;
    font-size: 4rem;
  }

  p {
    font-weight: 800;
    text-align: start;
    font-size: 1.15rem;
  }

  h4 {
    font-weight: bold;
    font-size: 2.5rem;
    text-align: start;
    color: #0075ff;
    text-transform: uppercase;
    margin-top: 1.5rem;
  }

  .numbersOfMyCarrerContainer {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    .text {
      text-align: center;

      p {
        text-align: center;
        font-size: 2.2rem;
        span {
        }
      }

      h1 {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        color: #0075ff;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 1537px) {
    .container {
      padding: 7rem 0;
    }
  }

  @media screen and (max-width: 540px) {
    .container {
      padding: 0 0.5rem 8rem;
    }

    h2 {
      font-size: 3rem;
    }

    h4 {
      font-size: 2rem;
    }

    .numbersOfMyCarrerContainer {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 380px) {
    .container {
      padding: 0 0.5rem 8rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    h4 {
      font-size: 1.7rem;
    }
  }
`;

export const Services = styled.section`
  background-color: #0075ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 7rem 0;

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px #000;
  }

  .cardsContainer {
    padding: 0 7rem;
  }

  @media screen and (max-width: 1280px) {
    .cardsContainer {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .cardsContainer {
      padding: 0;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 550px) {
    .container {
      padding: 4rem 0;
    }

    h1 {
      font-size: 3rem;
    }

    .cardsContainer {
      padding: 0;
      gap: 2rem;
    }
  }
`;

export const Skills = styled.section`
  min-height: 80vh;
  background: linear-gradient(
    180deg,
    rgba(0, 117, 255, 1) 0%,
    rgba(255, 255, 255, 1) 29%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15rem 0;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #0075ff;
  }

  h2 {
    margin-top: -1.5rem;
    font-size: 2.5rem;
    font-weight: 40;
    color: #0075ff;
  }

  .skillsContainer {
    margin-top: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1535px) {
    padding: 13rem 0 5rem;

    background: linear-gradient(
      180deg,
      rgba(0, 117, 255, 1) 0%,
      rgba(255, 255, 255, 1) 7%
    );
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      margin-top: 0;
      line-height: 2.2rem;
    }
  }
`;

export const Projects = styled.section`
  min-height: 70vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 15%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15rem 0 5rem;
  transition: all 0.3s;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #0075ff;
  }

  h2 {
    margin-top: -1.5rem;
    font-size: 2.5rem;
    font-weight: 200;
    color: #0075ff;
  }

  .projectsCntainer {
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1535px) {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 0, 0, 1) 7%
    );
  }
`;

export const Contact = styled.section`
  min-height: 70vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 117, 255, 1) 15%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15rem 0 5rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
  }

  h2 {
    margin-top: -1.5rem;
    font-size: 2.5rem;
    font-weight: 200;
    color: #fff;
  }

  .contactContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .formContainer {
    width: 55%;
    height: 100%;
  }

  .infoAboutMe {
    width: 40%;
    background-color: #fff;
    padding: 2rem 2rem;
    border-radius: 50px;

    .title {
      text-align: left;
      text-shadow: 2px 2px 2px #000;
      font-weight: bold;
      color: #007bff;
      margin-top: 1.5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      height: max-content;
      gap: 1rem;
      margin-top: 0.5rem;

      .infoContainer {
        background-color: #212121;
        border-radius: 20px;
        justify-content: space-around;
        padding: 0.8rem 2rem;
        width: 100%;
        min-height: 4rem;

        .imageContainer {
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: fit-content;
            height: 2rem;
          }
        }

        h3 {
          width: 90%;
          color: #007bff;
          font-weight: bold;
          font-size: 1.4rem;
          text-align: start;
        }
      }
    }
  }

  @media screen and (max-width: 1535px) {
    .infoAboutMe {
      width: fit-content;

      .content {
        .infoContainer {
          h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1279px) {
    .contactContainer {
      flex-direction: row;
      gap: 4;
    }

    .formContainer {
      width: fit-content;
    }

    .infoAboutMe {
      width: fit-content;

      .content {
        .infoContainer {
          h3 {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .contactContainer {
      flex-direction: column;
    }

    .formContainer {
      width: 100%;
    }

    .infoAboutMe {
      width: fit-content;
      margin-top: 2rem;

      .content {
        .infoContainer {
          h3 {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 548px) {
    .contactContainer {
      flex-direction: column;
    }

    .formContainer {
      width: 100%;
    }

    .infoAboutMe {
      width: 100%;
      margin-top: 2rem;

      .content {
        .infoContainer {
          h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 468px) {
    h2 {
      margin-top: 0rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 424px) {
    .contactContainer {
      flex-direction: column;
    }

    .formContainer {
      width: 100%;
    }

    .infoAboutMe {
      width: 100%;
      margin-top: 2rem;

      .content {
        .infoContainer {
          h3 {
            font-size: 0.7rem;
          }
        }
      }
    }
  }
`;

export const Footer = styled.section`
  background: linear-gradient(
    180deg,
    rgba(0, 117, 255, 1) 0%,
    rgba(0, 117, 255, 0.2) 120%
  );

  .mediaContainer {
  }
`;
