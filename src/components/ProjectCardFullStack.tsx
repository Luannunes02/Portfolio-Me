import styled from "styled-components";
import React, { useState, useRef } from "react";
import Image from "next/image";

import GitHub from "../assets/gitjhub-1.png";

interface CardProps {
  gif?: any;
  img?: any;
  name: string;
  front: string;
  back: string;
  description: string;
  skills: any;
}

export default function ProjectCardFullStack({
  gif,
  name,
  front,
  back,
  description,
  skills,
  img,
}: CardProps) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <CardStyle>
      <div
        className="card mt-7"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="gif-container">
          <div className="hidden sm:block">
            <Image
              src={isPaused ? gif : img}
              alt={name}
              width={1920}
              height={1080}
              className="cover"
            />
          </div>
          <div className="sm:hidden">
            <Image
              src={gif}
              alt={name}
              width={1920}
              height={1080}
              className="cover"
            />
          </div>
        </div>
        <b></b>
        <div className="content">
          <p className="title">{name}</p>
          <div className="flex items-center gap-3 stacks-container">
            <h5>Tecnologias: </h5>
            <ul className="sci">
              {skills.map((skill: any) => {
                return (
                  <li key={skill}>
                    <Image
                      src={skill}
                      alt={name}
                      width={150}
                      height={150}
                      className="stacks"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-2 flex items-center gap-3 stacks-container justify-around">
            <a href={front} target="_blank">
              Front-end
              <button className="btnGit">
                <Image src={GitHub} alt="GitHub" />
              </button>
            </a>
            <a href={back} target="_blank">
              Back-end
              <button className="btnGit">
                <Image src={GitHub} alt="GitHub" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  max-width: 400px;

  .card {
    position: relative;
    width: 400px;
    height: 250px;
    background: #0075ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #0075ff);
  }

  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #000);
    filter: blur(30px);
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .card .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    z-index: 3;
    scale: 0.965;
    opacity: 1;
    transition: 0.5s;
  }

  .card:hover .cover {
    opacity: 0.7;
  }

  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

  .card:hover .content {
    transform: scale(1);
    bottom: 25px;
  }

  .content .title {
    position: relative;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 6rem;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
  }

  .sci li {
    list-style: none;
  }

  .sci li .stacks {
    width: 2rem;
    transition: all 0.3s;
    border-radius: 20px;
  }

  .sci li .stacks:hover {
    filter: brightness(1.3);
    cursor: pointer;
  }

  .content .btnAcess {
    background-color: #0075ff;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 20px;
    transition: all 0.3s;
    font-weight: bold;

    &:hover {
      filter: brightness(1.3);
    }
  }

  .content .stacks-container {
    h5 {
      text-shadow: 2px 2px 2px #000;
    }

    a {
      background-color: #0075ff;
      padding: 0.2rem 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border-radius: 0.7rem;
      font-weight: 600;
      transition: all 0.3s;
      opacity: 0.6;

      .btnGit {
        background-color: #000;
        padding: 0.3rem 0.3rem;
        border-radius: 20px;

        img {
          width: 1.5rem;
        }
      }

      &:hover {
        filter: brightness(1.2);
        opacity: 0.9;
      }
    }
  }

  .card-description {
    background-color: #0075ff;
    color: #fff;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 10rem;

    p {
      font-weight: 600;
      padding: 1.5rem 0.3rem 1rem;
      text-shadow: 2px 2px 1px #000;
      text-align: left;
    }
  }

  @media screen and (max-width: 650px) {
    .card .cover {
      opacity: 0.8;
    }

    .card .content {
      transform: scale(1);
      bottom: 25px;
    }
  }

  @media screen and (max-width: 500px) {
    max-width: 370px;

    .card {
      width: 370px;
      height: 250px;
    }
  }
`;
