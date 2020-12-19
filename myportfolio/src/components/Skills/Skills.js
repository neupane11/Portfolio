import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {skills} from "./SkillsData"
import { DiGit, DiMongodb,DiNodejs,DiHeroku,DiJavascript,DiLinux,DiWindows } from "react-icons/di";
import { FaBootstrap, FaCss3,FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact} from 'react-icons/fa';

const Skills=()=> {
    return (
        <div className="pt-3 pb-3 Skills" id="skills">
             <h1 className="text-center color-blue">TECH SKILLS</h1>
             <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                        <li><FaHtml5 color="red" size="50px"/>HTML5</li>
                        <li><FaBootstrap color="red" size="50px"/>Bootstrap</li>
                        <li><FaCss3 color="red" size="50px"/>CSS</li>
                        <li><FaReact color="red" size="50px"/>React</li>
                    </ul>
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <ul>
                        <li><DiNodejs color="red" size="50px"/><span>NodeJS</span></li>
                        
                    </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <ul>
                        <li><DiHeroku color="red" size="50px"/>Heroku</li>
                        
                    </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <ul>
                        <li><DiJavascript color="red" size="50px"/>Javascript</li>
                        <li><FaPython color="red" size="50px"/>Python</li>
                        
                        <li><FaJava color="red" size="50px"/>Java</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <ul>
                    <li><DiMongodb color="red" size="50px"/>MongoDB</li>
                    
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <ul>
                    <li><DiGit color="red" size="50px"/>Git</li>
                    
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Others</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                <ul>
                    <li><FaGithub color="red" size="50px"/>Github</li>
                    <li><DiLinux color="red" size="50px"/>Linux</li>
                    <li><DiWindows color="red" size="50px"/>Windows</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
        </div>
    )
}
export default Skills;