import React from "react"
import './App.css';
import {Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Particles from 'react-particles-js';
 
//import Slide from "react-reveal/Slide";
//import parrallaximage from "./assets/img/backgroundparallax.webp"
//import oceanimage from "./assets/img/ocean.jpeg"
//components
import Mynavbar from "./components/Mynavbar";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Titlemessage from "./components/Titlemessage";
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer"
import Testomonies from "./components/Testomonies";
import {particlesOptions} from "./ParticlesJS"



function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Mynavbar/>
      
      <Titlemessage/>
      
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
       <Landingpage/>
     <div>
      <Parallax
        blur={{min: -30,max:30}}
        strength={500}
        >
      <div>
        <Container className="container-box rounded">
          <Fade left>
            <About/>
          </Fade>
        </Container>
      </div>
      </Parallax>
      </div>
    <Experience/>


      <div>
      <Parallax
        blur={{min: -30,max:30}}
        strength={500}
        >
      <div>
        <Fade right>
          <Skills/>
        </Fade>
        </div>
      </Parallax>
      </div>

    <Projects/>
    <Testomonies/>
    
    <Footer/>
  </div>
  );
}

export default App;
