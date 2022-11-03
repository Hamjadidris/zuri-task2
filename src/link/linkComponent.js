import React from "react";
import slack from "../assets/slack.svg";
import github from "../assets/Social icon.svg";
import { Link } from 'react-router-dom';


import "./link.css";

const linkComponent = () => {
  const slackName = "hamjad";
  return (
    <div className="links-container">
      <ul className="links">
        <li>
          <a href="#">Twitter Link</a>
        </li>
        <li>
          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
        </li>
        <li>
          <a id="books" href="http://books.zuri.team">
            Zuri Books
          </a>
        </li>
        <li>
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=<hamjad>"
          >
            Python Books
          </a>
        </li>
        <li>
          <a id="pitch" href="https://background.zuri.team">
            Backgroud Check for Coders
          </a>
        </li>
        <li>
          <a id="book__design" href="https://books.zuri.team/design-rules">
            Design Books
          </a>
        </li>
        <li>
          <Link to="/contact">
            <a id="contact" href="#">
              Contact Me
            </a>
          </Link>
        </li>
      </ul>
      <div className="socials">
        <img alt="slack" src={slack} />
        <img alt="github" src={github} />
      </div>
    </div>
  );
};

export default linkComponent;
