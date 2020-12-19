import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../assets/img/profile.jpeg'
import Socialmediaicon from './Socialmediaicon';


const  About=()=> {
    return (
    <div id="about">
        <div className="about">
            <h1 style={about}>ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                    {/*left side of coulmn image*/}
                        <Row className="justify-content-left mb-2 mr-2">
                            <Image className="profile" src={profile} thumbnail fluid/>
                        </Row>

                    </Col>
                    {/*right side of column */}
                    <Col xs={12} md={6}>
                        {/*description */}
                        <Row className="align-items-start p-2 details rounded" >
                            My name is <b>Sandip Neupane</b>
                            computer science student at coloradomesa university
                            safnksa;nfs;anf'sadf
                            asdfnsakjdfnskj;fnsa
                            dfa;fas;kdfn
                            sdfsfs<b></b>
                            sdfsdf
                            sfsdf
                            <br>
                            </br>
                            sdfsa
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )
}

const about={
    textAlign:"center",
    fontStyle:"bold"
}

export default About;