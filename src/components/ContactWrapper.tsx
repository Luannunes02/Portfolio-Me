import React from "react";
import { Container } from "../styles/ContactWrapper";
import Image from "next/image";

import LuanPhoto from "@/assets/Luan.jpeg";
import LuanPhotoTwo from "@/assets/LuanPhotoTwo.jpeg";

interface SocialIMGS {
  whatsapp: any;
  linkedin: any;
  github: any;
}

export default function ContactWrapper({whatsapp, linkedin, github}: SocialIMGS) {
  return (
    <Container>
      <div className="share">
        <a
          href="https://api.whatsapp.com/send?phone=+55(61) 98465-3761&text=Olá Luan, cheguei aqui por meio do seu portfolio."
          target="_blank">
          <button className="btn1">
            <Image
              src={whatsapp}
              width={50}
              height={50}
              className="whatsapp"
              alt="whatsapp-logo"
            />
            <span className="tooltiptext1">
              <div className="card">
                <Image
                  src={LuanPhotoTwo}
                  width={400}
                  height={400}
                  className="account"
                  alt="whatsapp-logo"
                />
              </div>
              <div className="username">(61)98465-3761</div>
            </span>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/luan-nunes-esbaltar/"
          target="_blank">
          <button className="btn2">
            <Image
              src={linkedin}
              width={50}
              height={50}
              className="linkedin"
              alt="whatsapp-logo"
            />
            <span className="tooltiptext2">
              <div className="card">
                <Image
                  src={LuanPhoto}
                  width={400}
                  height={400}
                  className="account"
                  alt="whatsapp-logo"
                />
              </div>
              <div className="username">luan-nunes</div>
            </span>
          </button>
        </a>
        <a href="https://github.com/Luannunes02" target="_blank">
          <button className="btn3">
            <Image
              src={github}
              width={50}
              height={50}
              className="git"
              alt="whatsapp-logo"
            />
            <span className="tooltiptext3">
              <div className="card">
                <Image
                  src={LuanPhoto}
                  width={400}
                  height={400}
                  className="account"
                  alt="whatsapp-logo"
                />
              </div>
              <div className="username">Luannunes02</div>
            </span>
          </button>
        </a>
      </div>
    </Container>
  );
}
