import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
  const navigate = useNavigate();
  
  const navigateSignin = () =>{
    navigate('/signIn')
  }
    return(
        <div id="landingPage">
          <div className="heading">
            <div id="text">
              <h1 id='get'>get</h1>
              <h1 id='certify'>certify</h1>
              <h1 id='andGetNoticed'>and get noticed</h1>
              <button id="get-started" onClick={navigateSignin}>get started</button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nemo reiciendis repellendus soluta nam quis impedit ab, porro quaerat explicabo facilis eum corrupti odit voluptas libero laudantium incidunt perspiciatis. Sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores voluptatum, doloribus dolore similique ab autem eaque minima aliquid quidem asperiores facere facilis. Id repellendus sapiente sed quasi blanditiis quos.</p>
            </div>
            <img src="vecteezy_man-in-front-of-computer-monitor-flat-vector-illustraiton_7686736.jpg" alt=""/>
          </div>
        </div>
    )
}