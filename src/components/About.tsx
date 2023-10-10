import "./About.scss";
import { aboutMe } from "../lib/text";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-ctn">
        <SectionHeading className="about-headline">About Me</SectionHeading>
        <div id="design-element"></div>
        <p id="about-content">{aboutMe.content}</p>
      </div>
    </div>
  );
}

export default About;
