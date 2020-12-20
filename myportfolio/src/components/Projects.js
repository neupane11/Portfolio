import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
  } from '@merc/react-timeline';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import {Parallax} from 'react-parallax';
import Zoom from "react-reveal/Zoom";

import imagesss from '../assets/img/background.webp';

import { FaBootstrap, FaCss3,FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact} from 'react-icons/fa';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const  Projects=()=> {
    return (
        <div style={{padding:'10rem'}}className=" pt-3 pb-3 projects" id="projects">
            <h1 style={{paddingTop:'5rem'}} className="text-center color-blue ">PROJECTS</h1>
            <hr className="hrclass"></hr>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                icon={<FaReact color="00d8ff"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">MERN</h3>
                <h4 className="vertical-timeline-element-subtitle">Expense Tracker</h4>
                <p>
                  Full Stack application using React and Mongodb
                </p>
                <div className="d-flex justify-content-between flex-column mt-1">
                          <div>
                            <Accordion>
                              <Card>
                                <Accordion.Toggle
                                  as={Card.Header}
                                  eventKey="0"
                                  className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                  <Card.Body>
                                    <strong>Description</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your Todos</li>
                                      <li>Powered by React and Material UI</li>
                                      <li>Respoisive Design</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li><FaHtml5 color="e34f26" size="50px"/>HTML5</li>
                                    <li><FaBootstrap color="red" size="50px"/>Bootstrap</li>
                                    <li><FaCss3 color="red" size="50px"/>CSS</li>
                                    <li><FaReact color="00d8ff" size="50px"/>React</li>
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                              href="https://akjha96.github.io/Todo-List-React/"
                              target="_blank"
                              
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                              href="https://github.com/akjha96/Todo-List-React"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            <UrlButton
                              href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                              target="_blank"
                            >
                              WATCH VIDEO
                            </UrlButton>
                          </div>
                          </div>
              </VerticalTimelineElement>


          {/*project 2 */}
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                icon={<FaReact color="00d8ff"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">MERN</h3>
                <h4 className="vertical-timeline-element-subtitle">Expense Tracker</h4>
                <p>
                  Full Stack application using React and Mongodb
                </p>
                <div className="d-flex justify-content-between flex-column mt-1">
                          <div>
                            <Accordion>
                              <Card>
                                <Accordion.Toggle
                                  as={Card.Header}
                                  eventKey="0"
                                  className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                  <Card.Body>
                                    <strong>Description</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your Todos</li>
                                      <li>Powered by React and Material UI</li>
                                      <li>Respoisive Design</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li><FaHtml5 color="e34f26" size="50px"/>HTML5</li>
                                    <li><FaBootstrap color="red" size="50px"/>Bootstrap</li>
                                    <li><FaCss3 color="red" size="50px"/>CSS</li>
                                    <li><FaReact color="00d8ff" size="50px"/>React</li>
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                              href="https://akjha96.github.io/Todo-List-React/"
                              target="_blank"
                              
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                              href="https://github.com/akjha96/Todo-List-React"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            <UrlButton
                              href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                              target="_blank"
                            >
                              WATCH VIDEO
                            </UrlButton>
                          </div>
                          </div>
              </VerticalTimelineElement>

            {/*project 3 */}

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                icon={<FaReact color="00d8ff"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">MERN</h3>
                <h4 className="vertical-timeline-element-subtitle">Expense Tracker</h4>
                <p>
                  Full Stack application using React and Mongodb
                </p>
                <div className="d-flex justify-content-between flex-column mt-1">
                          <div>
                            <Accordion>
                              <Card>
                                <Accordion.Toggle
                                  as={Card.Header}
                                  eventKey="0"
                                  className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                  <Card.Body>
                                    <strong>Description</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your Todos</li>
                                      <li>Powered by React and Material UI</li>
                                      <li>Respoisive Design</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li><FaHtml5 color="e34f26" size="50px"/>HTML5</li>
                                    <li><FaBootstrap color="red" size="50px"/>Bootstrap</li>
                                    <li><FaCss3 color="red" size="50px"/>CSS</li>
                                    <li><FaReact color="00d8ff" size="50px"/>React</li>
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                              href="https://akjha96.github.io/Todo-List-React/"
                              target="_blank"
                              
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                              href="https://github.com/akjha96/Todo-List-React"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            <UrlButton
                              href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                              target="_blank"
                            >
                              WATCH VIDEO
                            </UrlButton>
                          </div>
                          </div>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        
    )
}
export default Projects;