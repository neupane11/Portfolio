import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const  Experience=()=> {
    return (
        
        <div style={{padding:'10rem'}}className=" pt-3 pb-3 projects" id="projects">
            <h1 style={{paddingTop:'5rem'}} className="text-center color-blue ">Experience</h1>

            <hr className="hrclass"></hr>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                
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
                                What I DID
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                  <Card.Body>
                                    <strong>Description</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                    <hr />
                                    <strong>What I DID?</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your Todos</li>
                                      <li>Powered by React and Material UI</li>
                                      <li>Respoisive Design</li>
                                    </ul>
                                    <hr />
                                    
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          
                          </div>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
                
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
                                What I DID
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                  <Card.Body>
                                    <strong>Description</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                                    <hr />
                                    <strong>What I DID?</strong>
                                    <ul className="list-styles pt-1">
                                      <li>Keeps track of your Todos</li>
                                      <li>Powered by React and Material UI</li>
                                      <li>Respoisive Design</li>
                                    </ul>
                                    <hr />
                                    
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </div>
                          
                          </div>
              </VerticalTimelineElement>

              </VerticalTimeline>
        </div>
    )
}
export default Experience;