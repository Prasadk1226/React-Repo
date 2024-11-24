import React from "react";
import "./style.css";
import profilepic from "./assets/images/profile-pic.jpg"
import neesongs from "./assets/images/Neesongs.png"
import chess from "./assets/images/chess grid.png"
import keyboard from "./assets/images/keyboard.png"
import project from "./assets/images/Project1.png"


function body() {
  return (
    <>
      <div className="inner-container">
        <div className="flex-container img-container">
          <div>
            <img className="profile-img" src={profilepic} alt="" width="650" height="550" style={{marginTop:"75px",marginLeft:"55px", borderRadius:"30%"}} />
          </div>
        </div>
        <div className="flex-container1 text-container">
          <div className="flex-text">
            <p className="h3">Hello everyone!</p>
            <p className="h1">I am Prasad.</p>
            <p className="h4">An aspiring Frontend Developer</p>
            <a href="#i">
              <button className="van1 van" type="button">
                Resume
              </button>
            </a>
            <a href="whatsapp:7660940155">
              <button className="van1 van" type="button">
                WhatsApp
              </button>
            </a>
            <br />
            {/* Uncomment below if needed */}
            {/* <a
              target="_blank"
              rel="noreferrer"
              title="Click to open LinkedIn Account"
              href="https://www.linkedin.com/in/prasad-kancheti-776b54241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BQ%2BDQMqaQsqt%2BxGd5Md%2BxA%3D%3D"
              className="icon1"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              title="Click to open GitHub Account"
              href="https://github.com/Prasadk1226"
              className="icon1"
            >
              <i className="fa-brands fa-square-github"></i>
            </a> */}
          </div>
        </div>
      </div>
      <div className="inner-container2" id="aboutme">
        <div className="inner-box2">
          <p className="h2" style={{ color: "antiquewhite" }}>
            Get to know more About me...
          </p>
          <br />
          <p className="h4 para-text">
            Hello! I'm K. Prasad, a passionate and creative front-end developer
            from Ravipadu, Narasaraopet. With a background in English Literature
            and experience as an English teacher and an accountant, I bring a
            unique perspective to my work in web development.
            <br />
            <br />
            I have mastered HTML, CSS, JavaScript, and Bootstrap, and I love
            creating beautiful and functional user interfaces. I am an
            enthusiastic learner, currently focusing on honing my skills to
            become a top-tier front-end developer. My goal is to craft intuitive
            and engaging web experiences.
            <br />
            <br />
            In addition to my technical skills, I am an active participant in
            debates, essay writing, and speech competitions, which has enhanced
            my communication abilities. Outside of coding, I enjoy playing
            basketball and exploring new technologies on the internet.
            <br />
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
      <div className="inner-container3" id="skills">
        <p className="h1 skill-title">Skills and Technologies</p>
        <div className="inner-box3">
          <div className="card3">
            <i className="fa-brands fa-html5"></i>
            <p className="h5">
              I have mastered HTML and created static webpages, gaining a solid
              understanding of content structuring and HTML elements. My
              experience includes developing user-friendly interfaces and
              ensuring accessibility and readability. This proficiency in HTML
              provides a strong foundation for my front-end development journey.
            </p>
          </div>
          <div className="card3">
            <i className="fa-brands fa-css3-alt"></i>
            <p className="h5">
              Coming to CSS I have mastered CSS and created visually appealing,
              responsive webpages. My experience includes effectively styling
              HTML elements, controlling and designing complex layouts, and
              ensuring cross-device compatibility and responsiveness. My
              proficiency in CSS is a vital part of my front-end development
              expertise.
            </p>
          </div>
          <div className="card3">
            <i className="fa-brands fa-bootstrap"></i>
            <p className="h5">
              Bootstrap, creating visually appealing, responsive webpages with
              efficient layouts. My expertise ensures user-friendly interfaces
              and enhances overall user experience in front-end development.
            </p>
          </div>
          <div className="card3">
            <i className="fa-brands fa-square-js"></i>
            <p className="h5">
              I possess strong proficiency in JavaScript and React.js, enabling
              me to create dynamic, interactive, and efficient web applications.
              With expertise in advanced JS concepts, reusable React components,
              state management, and API integration, I deliver seamless user
              experiences. My skills in optimizing performance and leveraging
              React's ecosystem prepare me for tackling complex front-end
              challenges.
            </p>
          </div>
        </div>
      </div>
      <div className="inner-container4" id="projects">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="false"
        >
          <p className="h4 car-title"> Here are some of my Projects. </p>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={neesongs}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block text">
                <h5> Naa Songs Cloned as Nee Songs</h5>
                <p>Created a naa Songs clone using HTML and simple CSS.</p>
                <a
                  href="https://prasadk1226.github.io/Day-4-Nee-Songs/"
                  className="carousel-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live-View</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={chess}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block text">
                <h5>Chess-Board</h5>
                <p>
                  Created a responsive chess board using grid in HTML & CSS.
                  Added a hover effect that looks super sool.
                </p>
                <a
                  href="https://prasadk1226.github.io/Day21-Chessboard-using-grid/"
                  className="carousel-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live-View</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={keyboard}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block text">
                <h5>Keyboard</h5>
                <p>
                  Created a responsive Keyboard using grid in HTML & CSS. Added
                  a hover effect that looks pleasing to eyes.
                </p>
                <a
                  href="https://prasadk1226.github.io/Day21-Chessboard-using-grid/"
                  className="carousel-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live-View</button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={project}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-md-block text">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <a
                  href="https://prasadk1226.github.io/Project-work/index.html"
                  className="carousel-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live-View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default body;
