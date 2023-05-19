import styled from "styled-components";

export const Container = styled.div`
    .share {
        display: flex;
  flex-direction: row;
  gap: 0.4em;
  transition: .4s ease-in-out;

  .btn1 {
    position: relative;
  width: 3em;
  height: 3em;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: .4s all;
  }

  .btn1 .whatsapp {
  margin-top: 0.1em;
}

.account {
  width: 100%;
}

.btn1 .tooltiptext1 {
  visibility: hidden;
  width: 6em;
  height: 8em;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  border-radius: 10px;
  padding: 1em;
  position: absolute;
  left: -1.5em;
  top: -8em;
  z-index: 1;
  transition: .1s ease-in-out;
}

.btn1 .tooltiptext1 .card {
  width: 4em;
  height: 4em;
}

.btn1 .tooltiptext1 .account {
  margin-top: 1em;
}

.btn1 .tooltiptext1 .username {
  font-size: 0.6em;
  position: absolute;
  margin-top: 1.6em;
  font-weight: bold;
}

.btn1:hover .tooltiptext1 {
  transform: translateY(-1em);
  visibility: visible;
}

.btn1:hover {
  
}

.btn1:hover .whatsapp {
  fill: white;
}

.btn2 {
  position: relative;
  width: 3em;
  height: 3em;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: .4s all;
}

.btn2 .linkedin {
  margin-top: .25em;
  margin-left: .1em;
}

.btn2 .tooltiptext2 {
  visibility: hidden;
  width: 6em;
  height: 8em;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  border-radius: 10px;
  padding: 1em;
  position: absolute;
  left: -1.5em;
  top: -8em;
  z-index: 1;
  transition: .1s ease-in-out;
}

.btn2 .tooltiptext2 .card {
  width: 4em;
  height: 4em;
}

.btn2 .tooltiptext2 .account {
  margin-top: 1em;
}

.btn2 .tooltiptext2 .username {
  font-size: 0.6em;
  margin-top: 1.6em;
  font-weight: bold;
}

.btn2:hover .tooltiptext2 {
  transform: translateY(-1em);
  visibility: visible;
}

.btn2:hover {
  
}

.btn2:hover .linkedin {
  fill: white;
}

.btn3 {
  position: relative;
  width: 3em;
  height: 3em;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: .4s all;
}

.btn3 .tooltiptext3 {
  visibility: hidden;
  width: 6em;
  height: 8em;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  border-radius: 10px;
  padding: 1em;
  position: absolute;
  left: -1.5em;
  top: -8em;
  z-index: 1;
  transition: .1s ease-in-out;
}

.btn3 .tooltiptext3 .card {
  width: 4em;
  height: 4em;
}

.btn3 .tooltiptext3 .account {
  margin-top: 1em;
}

.btn3 .tooltiptext3 .username {
  font-size: 0.6em;
  margin-top: 1.6em;
  font-weight: bold;
}

.btn3:hover .tooltiptext3 {
  transform: translateY(-1em);
  visibility: visible;
}

.btn3:hover {
  
}

.btn3:hover .git {
  fill: white;
}

  

        img {
            width: 1.8rem;
        }
    }
`