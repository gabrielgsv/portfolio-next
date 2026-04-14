import React from "react";
import AboutAnimation from "./AboutAnimation";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse items-center justify-center">
        <div className="md:text-xl w-fit text-justify">
          <p>Olá! Sou Gabriel Soares Vilela,</p>
          <p>desenvolvedor full-stack com mais de 6 anos de experiência.</p>
          
          <p className="mt-4">
            Trabalho com Node.js, NestJS, TypeScript, PostgreSQL,
          </p>
          <p>React, Next.js, Vue.js e Nuxt.js.</p>

          <p className="mt-4">
            Já passei por projetos bem diferentes, como sistemas financeiros, CRMs,
          </p>
          <p>
            plataforma de gestão florestal e até soluções com IA para gerenciamento de documentos.
          </p>
        </div>

        <div>
          <AboutAnimation />
        </div>
      </div>
    </>
  );
};

export default About;
