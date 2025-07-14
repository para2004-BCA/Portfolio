import React from "react";
import "./Project.css";

function Project() {
  return (
    <section className="project-section" >
      <h1>Projects</h1>
      <div className="project-card">
        <div className="project-content">
          <div className="project-text">
            <h3>Travel-Friendly Room Booking App (MERN Stack)</h3>
            <p>
              A web application that allows users to request room bookings, and owners to accept or reject them via a dashboard. It includes user authentication, booking status updates, and calendar and map integration.
            </p>
            <a href="https://github.com/para2004-BCA/Travel-Friendly" target="_blank" rel="noreferrer">
              🔗 Source Code
            </a>
            <br />
            <a href="https://travel-friendly.onrender.com" target="_blank" rel="noreferrer">
              🚀 Live Demo
            </a>
          </div>
          <div className="project-image">
            <img src="/images/project1.png" alt="Travel App Preview" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <div className="project-text">
            <h3>ZERODHA INVESTMENT APPLICATION (MERN Stack)</h3>
            <p>
              A simplified clone of the Zerodha investment platform that allows users to register, log in, and view a list of 
sample stocks. The project includes user authentication and securely stores user data in MongoDB. The app 
simulates a real-world investment dashboard. 
            </p>
            <a href="https://github.com/para2004-BCA/Zerodha-Invest-App" target="_blank" rel="noreferrer">
              🔗 Source Code
            </a>
            <br />
            <a href="https://zerodha-invest-app-frontend.onrender.com " target="_blank" rel="noreferrer">
              🚀 Live Demo
            </a>
          </div>
          <div className="project-image">
            <img src="/images/zerodha.png" alt="Travel App Preview" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <div className="project-text">
            <h3>Simon Says Game</h3>
            <p>
             A browser-based color memory game inspired by the classic "Simon Says" toy. The game lights up buttons in a 
random sequence, and the player must repeat the same sequence by clicking the buttons in order. With each 
level, the pattern gets longer, increasing the challenge to test the player’s memory and focus..  
            </p>
            <a href="https://github.com/para2004-BCA/SIMON-SAYS-GAME " target="_blank" rel="noreferrer">
              🔗 Source Code
            </a>
            <br />
            {/* <a href="https://zerodha-invest-app-frontend.onrender.com " target="_blank" rel="noreferrer">
              🚀 Live Demo
            </a> */}
          </div>
          <div className="project-image">
            <img src="/images/project2.png" alt="Travel App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
