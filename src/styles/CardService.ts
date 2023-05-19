import styled from "styled-components";

export const Container = styled.section`
    background-color: #fff;
    color: #000;
    width: 20rem;
    justify-content: center;
    align-items: center;
    padding: 4rem 1.5rem;
    border-radius: 2rem;

    img {
        margin: 0 auto;
        width: fit-content;
        height: 7rem;
    }

    h2 {
        border-top: 10px solid #0075ff;
        border-bottom: 10px solid #0075ff;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
    }   


    .box {
        margin: 2rem auto 0;
  width: 45px;
  height: 45px;
  background: #0075ff;
  border-radius: 25px;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
}

.box:hover {
  width: 160px;
  background: linear-gradient(to right, #0075ff, #fff);
}

.box:hover .arrow {
  display: none;
}

.box .text {
  display: none;
}

.box:hover .text {
  display: flex;
  font-size: 16px;
  font-weight: 550;
  color: black;
  letter-spacing: 0.6px;
  animation: anima 0.6s ease;
  font-weight: bolder;
  font-size: 1.2rem;
}

@keyframes anima {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.box:active {
  background: linear-gradient(to right, #0075ff, #fff);
}

`