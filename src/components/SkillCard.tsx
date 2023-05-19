import styled from "styled-components";
import React from "react";
import Image from "next/image";

interface CardProps {
  img?: any;
  color: string;
}

const primaryColor = ({ color }: CardProps) => color;

function SkillCard({ img, color }: CardProps) {
  return (
    <CardStyle color={color}>
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
          <Image
            src={`${img.src}`}
            alt={"logo-luan-white"}
            width={100}
            height={100}
          />
        </div>
      </div>
    </CardStyle>
  );
}

export default React.memo(SkillCard);

const CardStyle = styled.div`
  .card {
    width: 190px;
    height: 170px;
    transition: all 0.2s;
    position: relative;
    cursor: pointer;
  }

  img {
    border-radius: 50px;
  }

  .card-inner {
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover {
    transform: scale(1.04) rotate(1deg);
  }

  .circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(${primaryColor}, ${primaryColor});
    border-radius: 50%;
    position: absolute;
    animation: move-up6 2s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  .circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
  }

  @keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }
`;
