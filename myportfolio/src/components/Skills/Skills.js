import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

const Skills = () => {
  return (
    <div id="skills">
      <h1
        style={{ paddingTop: "5rem" }}
        className="text-center font-details-b pb-4"
      >
        TECH SKILLS
      </h1>
      <Fade right>
        <CardDeck className="carddeck">
          <Row xs={3} md={3} lg={3} className="d-flex justify-content-around">
            {/* Frontend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2 skillscard">
                <Card.Body>
                  {/* Frontend */}
                  <Card.Title className="text-center  card-title">
                    Frontend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Backend */}
            <Col>
              <Card className="focus mt-2 mb-2 skillscard">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Backend
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                      <li>
                        <DiNodejs color="RGB(108, 194, 74)" size="100px" />
                        <span>NodeJS</span>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Hosting Platforms */}
            <Col>
              <Card className="focus mt-2 mb-2  skillscard">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Hosting Platforms
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                      <li>
                        <DiHeroku color="RGB(103, 98, 166)" size="50px" />
                        Heroku
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Programming Languages */}
            <Col>
              <Card className="focus mt-2 mb-2 skillscard ">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Programming Languages
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Database */}
            <Col>
              <Card className="focus mt-2 mb-2 skillscard">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Database
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                      <li>
                        <DiMongodb color="green" size="50px" />
                        MongoDB
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Version Control */}
            <Col>
              <Card className="focus mt-2 mb-2 skillscard">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Version Control
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                      <li>
                        <DiGit color="blue" size="50px" />
                        Git
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Version Control */}
            <Col>
              <Card className="focus mt-2 mb-2 skillscard">
                <Card.Body>
                  <Card.Title className="text-center  card-title">
                    Others
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </Fade>
    </div>
  );
};
export default Skills;
