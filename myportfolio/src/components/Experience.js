import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const  Experience=()=> {
    return (
        
        <div id="experience">
          
            <h1 style={{paddingTop:'5rem'}} className="text-center font-details-b pb-4">Experience</h1>
            
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="09/2019 - present"
                
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">IT-Student Service</h3>
                <h4 className="vertical-timeline-element-subtitle">Colorado Mesa University</h4>
                <p>
                  Front desk staff Technology Help Desk 
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
                                    
                                    <strong>What I DID?</strong>
                                    <ul className="list-styles pt-1">
                                    The major responsibilities were WIFI support, username and password support, online portal management, Deploying new systems around the campus, Printer support, Customer service.

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
                date="09/2019 - present"
                
                iconStyle={{ background: 'white', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Peer-Tutor</h3>
                <h4 className="vertical-timeline-element-subtitle">Colorado Mesa University</h4>
                <p>
                  Tutor of Math and Computer Science
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
                              
                                    <strong>What I DID?</strong>
                                    <ul className="list-styles pt-1">
                                    Guiding student and peer learning, Familiarizing students with course materials, Guiding Students with Specific Learning Strategies, Stress and Time Management Counseling.

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