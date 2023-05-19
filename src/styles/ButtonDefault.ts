import styled from "styled-components";

export const Button = styled.button`
  
  text-decoration: none;
  position: relative;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  width: 12em;
  height: 4em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg,#03a9f4,#A1FCDF,#fff,#03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;


&:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

&:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg,#0075FF,#0075FF,#0075FF,#0075FF);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

&:hover::before {
  filter: blur(20px);
}

&:active {
  background: linear-gradient(90deg,#03a9f4,#A1FCDF,#fff,#03a9f4);
}

`