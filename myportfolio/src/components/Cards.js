import React from "react";
import Fade from "react-reveal/Fade";
import {
  DiGit,
  DiMongodb,
  DiNodejs,
  DiHeroku,
  DiJavascript,
  DiLinux,
  DiWindows,
} from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
const Cards = () => {
  return (
    <div className="aboutclass">
      <h1
        style={{ paddingTop: "5rem" }}
        className="text-center font-details-b pb-4"
      >
        SKILLS
      </h1>

      <div class="row-cards">
        <div class="column-cards">
          <div class="card-cards focus">
            <h1>Front-end</h1>
            <hr></hr>
            <ul>
              <li>
                <FaHtml5 color="red" size="50px" />
                HTML5
              </li>
              <li>
                <FaBootstrap color="rgb(86, 61, 124) " size="50px" />
                Bootstrap
              </li>
              <li>
                <FaCss3 color="red" size="50px" />
                CSS
              </li>
              <li>
                <FaReact color="RGB(97, 219, 251)" size="50px" />
                React
              </li>
              <li>
                <FaVuejs color="green" size="50px" />
                VueJS
              </li>
            </ul>
          </div>
        </div>

        <div class="column-cards focus">
          <div class="card-cards focus">
            <h1>Back-end</h1>
            <hr></hr>
            <ul>
              <li>
                <DiNodejs color="RGB(108, 194, 74)" size="100px" />
                <span>NodeJS</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="column-cards focus">
          <div class="card-cards focus">
            <h1>Hosting</h1>
            <hr></hr>
            <ul>
              <li>
                <DiHeroku color="RGB(103, 98, 166)" size="50px" />
                Heroku
              </li>
            </ul>
          </div>
        </div>
        <div class="column-cards">
          <div class="card-cards focus">
            <h1>Programing Languages</h1>
            <hr></hr>
            <ul>
              <li>
                <DiJavascript color="RGB(240, 219, 79)" size="50px" />
                Javascript
              </li>
              <li>
                <FaPython color="RGB(75, 139, 190)" size="50px" />
                Python
              </li>

              <li>
                <FaJava color="rgb(248, 152, 32) " size="50px" />
                Java
              </li>
            </ul>
          </div>
        </div>

        <div class="column-cards focus">
          <div class="card-cards focus">
            <h1>Database</h1>
            <hr></hr>
            <ul>
              <li>
                <DiMongodb color="green" size="50px" />
                MongoDB
              </li>
            </ul>
          </div>
        </div>

        <div class="column-cards focus">
          <div class="card-cards focus">
            <h1>Version Control</h1>
            <hr></hr>
            <ul>
              <li>
                <DiGit color="blue" size="50px" />
                Git
              </li>
            </ul>
          </div>
        </div>

        <div class="column-cards focus">
          <div class="card-cards focus">
            <h1>Other</h1>
            <hr></hr>
            <ul>
              <li>
                <FaGithub color="RGB (65, 131, 196)" size="50px" />
                Github
              </li>
              <li>
                <DiLinux color="RGB(216, 1, 80)" size="50px" />
                Linux
              </li>
              <li>
                <DiWindows color="RGB (0,164,239)" size="50px" />
                Windows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
