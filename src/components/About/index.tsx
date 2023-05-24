import React from "react";
import AboutAnimation from "./AboutAnimation";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="text-xl w-fit">
          <p>Olá, seja bem-vindo(a) ao meu site.</p>
          <p className="mt-4">
            Sou desenvolvedor Front-end e uso ReactJs para criar aplicações web.
          </p>
          <p className="mt-4">
            Tenho experiência com Typescript, Redux, NextJs, Context-api,
          </p>
          <p>React Hooks e outras ferramentas.</p>
          <p className="mt-4">
            Sou apaixonado por aprender novas tecnologias e criar experiências
          </p>
          <p>incríveis na web.👋</p>
        </div>

        <div>
          <AboutAnimation />
        </div>
      </div>
    </>
  );
};

export default About;
