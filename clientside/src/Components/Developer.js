import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";

export default function Developer() {
  return (
    <>
      <div className="container mx-auto my-10 d-flex ">
        <div className="links bg-light d-flex flex-column ">
          <a
            role="button"
            className="btn btn-info mx-4 my-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/"
          >
            <GrLinkedin /> LinkedIn
          </a>
          <a
            role="button"
            className="btn btn-info mx-4 my-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/"
          >
            <GrGithub />
            Github
          </a>
          <a
            role="button"
            className="btn btn-info mx-4 my-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://leetcode.com/"
          >
            <SiLeetcode />
            Leetcode
          </a>
          <a
            role="button"
            className="btn btn-info mx-4 my-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox"
          >
            <CgMail />
            Mail
          </a>
        </div>
      </div>
    </>
  );
}
