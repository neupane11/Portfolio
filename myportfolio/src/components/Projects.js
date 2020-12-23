import React from 'react';
import {
    
    UrlButton
   
  } from '@merc/react-timeline';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


import { FaBootstrap, FaNode, FaPython, FaReact,FaVuejs} from 'react-icons/fa';
import { DiMongodb,DiHeroku } from "react-icons/di";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const  Projects=()=> {
    return (
        <div id="projects" >
          <hr className="hrclass"></hr>
            <h1 style={{paddingTop:'5rem'}} className="text-center font-details-b pb-4">PROJECTS</h1>
            
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
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
                                    <strong>Description</strong> This is Expense tracker app that tracks your everyday transaction.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your income and expenses</li>
                                      <li>Powered by React and Node and Mongodb</li>
                                      <li>Have feature of user login</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li><FaReact color="00d8ff" size="50px"/>React</li>
                                    <li><FaNode color="00d8ff" size="50px"/>Node</li>
                                    <li><DiMongodb color="589636" size="50px"/>Mongodb</li>
                                    <li><FaBootstrap color="red" size="50px"/>Bootstrap</li>
                                    <li><DiHeroku color="6762a6" size="50px"/>Heroku</li>
                                    
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                              href="https://expense-tracker-mern-1.herokuapp.com/"
                              target="_blank"
                              
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                              href="https://github.com/neupane11/ExpenseTrackerApp-MERN-/tree/master"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                           
                          </div>
                          </div>
              </VerticalTimelineElement>


          {/*project 2 */}
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                icon={<FaPython color="00d8ff"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Hangman</h3>
                <h4 className="vertical-timeline-element-subtitle">Game</h4>
                <p>
                  Simple Hangman Game using Tkinter Python
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
                                    <strong>Description</strong> This is Hangman Game in which you are asked to guess the animal name. You are given 7 chance to guess
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Interactive GUI</li>
                                      <li>Powered by Tkinter Python</li>
                                      
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li><FaPython color="e34f26" size="50px"/>Python</li>
                                    
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            
                            <UrlButton
                              href="https://github.com/neupane11/Hangman-Game"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            <UrlButton
                              href="https://drive.google.com/file/d/1YTH7Gy4ChabzrNOof049uNwxVD8dacvs/view?usp=sharing"
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
                
                icon={<FaVuejs color="green"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Todos-App</h3>
                
                <p>
                  Client side Todo App.
                
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
                                    <strong>Description</strong> This is client side Todo app.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Allows you to list your todod item</li>
                                      <li>Allows you to delete from list</li>
                                      <li>Allows you to mark complete as you finish </li>
                                      <li>Powered by Vue</li>
                                      <li>Interactive user interface</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    
                                    <li><FaVuejs color="green" size="50px"/>VueJS</li>
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            
                            <UrlButton
                              href="https://github.com/neupane11/Todos-app"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            <UrlButton
                              href="https://drive.google.com/file/d/1spYdlMkFEHc0JDNu8tu4SlNNXLhzV3-a/view?usp=sharing"
                              target="_blank"
                            >
                              WATCH VIDEO
                            </UrlButton>
                          </div>
                          </div>
              </VerticalTimelineElement>

              {/*project 4 */}

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                icon={<FaPython color="blue"  />}
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Desktop Virtual Assistant</h3>
                
                <p>
                  Client side Todo App.
                
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
                                    <strong>Description</strong> This is Virtual Desktop Assistant like siri or alexa.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Able to understand certain commands</li>
                                      
                                      
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    
                                    <li><FaPython color="blue" size="50px"/>VueJS</li>
                                </ul>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            
                            <UrlButton
                              href="https://github.com/neupane11/DesktopVirtualAssistant"
                              target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                           
                          </div>
                          </div>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        
    )
}
export default Projects;