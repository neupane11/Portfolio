import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../assets/img/profile.jpeg';
import Button from 'react-bootstrap/Button';
import Fade from "react-reveal/Fade";
//import Socialmediaicon from './Socialmediaicon';


const  About=()=> {
    return (
    <div id="about" className="aboutclass">
        
        <div className="about">
            <h1  className="text-center font-details-b pb-4 color-r">ABOUT ME</h1>
            
            <Fade left>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                    {/*left side of coulmn image*/}
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" src={profile} thumbnail fluid/>
                        </Row>

                    </Col>
                    {/*right side of column */}
                    <Col xs={12} md={6}>
                        {/*description */}
                        <Row className="align-items-start p-2 my-details rounded" >
                        Hi there! I am <strong>&nbsp;Sandip Neupane</strong>
                <br />A Computer Science Student at Colorado Mesa University. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and Mongodb as my tech stack.
                
                I will be graduating in December 2021 with Bachelor's Degree in Computer Science.
                
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                
                            
                    
                            <br>
                            </br>
                            
                            <br/>
                            <Col className="d-flex justify-content-center flex-wrap" >
                            <div>
                                <a href="https://drive.google.com/file/d/1evIeiUAq44vPrfddH_nIn-cWVOL7-isc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-success">Resume</Button>
                            </a>
                            </div>
                            
                            
                            <div>
                                <a href="mailto:sandip.neupane11@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-danger">Hire Me</Button>
                            </a>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </Fade>
        </div>
    </div>
    )
}



export default About;