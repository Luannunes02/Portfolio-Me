import React from "react";
import Image from "next/image";
import { Container } from "../styles/CardService";

interface Button {
  action?: any;
  img: any;
  text: string;
}

export default function CardServices({ text, img, action }: Button) {
  return (
    <Container>
      <Image src={img} alt={text} width={150} />
      <h2>{text}</h2>
      <div className="box">
        <div className="arrow right"></div>
        <a href="#Contact">
          <div className="text">Conversar</div>
        </a>
      </div>
    </Container>
  );
}
