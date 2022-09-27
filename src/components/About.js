import Zoom from "react-reveal/Zoom";
import { LightSpeed } from "react-reveal";

const About = () => {
  return (
    <div className="section">
      <div className="homeContainer aboutContaier">
        <LightSpeed right>
          <h1 className="name">
            <span className="hilight">A</span>bout me
          </h1>
        </LightSpeed>
        <Zoom top>
          <p className="subTitle">
            <span className="hilight">H</span>ello, myself Mohamed Shaheed. Iam
            a <span className="hilight">BCA</span> graduate and self-taught web
            developer. I primarily focus on writing clean, elegant, and
            efficient code. Iam proficient in web development.Over the past, I
            have primarily worked as a intern that specialize in enterprise web
            applications.
          </p>
        </Zoom>
      </div>
    </div>
  );
};

export default About;
