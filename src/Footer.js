import React from "react";

export default function Footer(){
    return (
      <div className="footer text-center">
        <small>
          <a
            href="https://github.com/NatachaFerreira/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
            title="Code on github"
          >
            Open-source code
          </a>
          , designed and built by &nbsp;
          <a
            href="https://youthful-babbage-936314.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Natacha Ferreira's Portfolio"
          >
            Natacha Ferreira
          </a>
        </small>
      </div>
    );
}