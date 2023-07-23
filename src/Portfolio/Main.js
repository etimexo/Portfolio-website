import React from "react";
import "../Portfolio/Main.css";
import { useEffect } from "react";
import Typical from "react-typical";
import myImage from "../assets/teo.png"

export default function Main() {
  useEffect(() => {
    const toggler = document.querySelector(".toggler");
    const side = document.querySelector(".side");

    const togglerFunction = () => {
      toggler.classList.toggle("active");
      side.classList.toggle("active");
    };
    toggler.addEventListener("click", togglerFunction);
    return () => {
      toggler.removeEventListener("click", togglerFunction);
    };
  }, []);

  const handleClickOutside = (event) => {
    const target = event.target;
    const side = document.querySelector(".side");
    const toggler = document.querySelector(".toggler");
    const isNavMenuClicked =
      target.classList.contains("side") || target.closest(".side");
    const isTogglerClicked =
      target.classList.contains("toggler") || target.closest(".toggler");
    if (!isNavMenuClicked && !isTogglerClicked) {
      toggler.classList.remove("active");
      side.classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <main>
      <nav>
        <div className="logo">TEO</div>
        <div className="toggler">T</div>
        <div className="side">
          <ul>
            <li className="nav-item">
              <a href="https://www.google.com" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.google.com" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.google.com" className="nav-link">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.google.com" className="nav-link">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.google.com" className="nav-link">
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="sec-1">
        <h4>Hello, I am</h4>
        <h1>Elijah Obisesan</h1>
        <h6>(Also known as GentleDove & TEO)</h6>
        <div className="typical">
          <span>
            <Typical
              loop={Infinity}
              steps={[
                "A front-end developer",
                1500,
                "A lover of tech",
                1500,
                "An aspiring machine learning engineer",
                1500,
              ]}
            />
          </span>
        </div>
        <p>
          Being a passionate front-end developer with a keen eye
          for creating stunning and user-friendly websites. With a focus on
          responsive design and seamless user experiences.
          {/* I craft digital solutions that leave a lasting impact on visitors. My proficiency in
          HTML, CSS, and JavaScript, along with expertise in popular frameworks
          like React and Bootstrap, empowers me to turn ideas into reality
          efficiently.
          "Hi, I'm [Your Name], a passionate front-end developer with a keen eye for creating stunning and user-friendly websites. With a focus on responsive design and seamless user experiences, I craft digital solutions that leave a lasting impact on visitors. My proficiency in HTML, CSS, and JavaScript, along with expertise in popular frameworks like React and Bootstrap, empowers me to turn ideas into reality efficiently.

I love transforming concepts into visually captivating and interactive websites that not only represent your brand but also drive results. Whether you need a custom website, a dynamic web application, or an engaging UI/UX, I'm here to bring your vision to life.

Don't just take my word for it - check out my portfolio to see some of the projects I've had the pleasure to work on. If you're looking to collaborate on a project or have any questions, feel free to reach out. Let's build something amazing together!"

Remember, your "what I do" section should be a reflection of your personality, skills, and passion for front-end development. Keep it genuine, and it will resonate with your audience, attracting potential clients, employers, or collaborators to explore more about your work. */}
        </p>
        <div className="profile-pic">
          <img src={myImage} alt="My profile"/>
        </div>
      </section>
    </main>
  );
}