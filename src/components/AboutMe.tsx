import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import '../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="profile-container">
        <img
          src="https://i.pinimg.com/736x/09/0f/09/090f09ca57b6264780fd37fdfa63475f.jpg" // Substitua pela nova URL
          alt="me"
          className="profile-image"
        />
      </div>

      <h1 className="about-header">
        <span className="font-bold">Olá, meu nome é Luiz.</span> Sou um{" "}
        <span className="font-bold">desenvolvedor freelancer</span>{" "}
        <span className="underline">React</span>.
      </h1>

      <div className="social-links">
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/luiz-osvaldo-9438a9272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="github-link"
          href="https://github.com/Djhoud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
