import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Socialmediaicon from "./Socialmediaicon";
import Zoom from "react-reveal/Zoom";

//custom component
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: black;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const Titlemessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <Zoom>
            <div className="main text-center mb-3 ">
              Hi, I am
              <br />
              <span>
                <strong className="text-center font-details-b pb-4">
                  Sandip Neupane
                </strong>
              </span>
            </div>
          </Zoom>
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Software Developer",
                  "Learner",
                  "Traveler",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <Socialmediaicon />
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default Titlemessage;
