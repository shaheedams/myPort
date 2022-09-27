import Flip from "react-reveal/Flip";
import { LightSpeed } from "react-reveal";

const Skills = () => {
  const skills = [
    {
      id: 12,
      skill: "HTML",
      img: "images/html.png",
    },
    {
      id: 23,
      skill: "CSS",
      img: "images/css.png",
    },
    {
      id: 35,
      skill: "JavaScript",
      img: "images/js.png",
    },
    {
      id: 51,
      skill: "Bootstrap",
      img: "%PUBLIC_URL%/images/bootstrap.png",
    },
    {
      id: 61,
      skill: "React js",
      img: "images/react.png",
    },
  ];
  return (
    <div className="section">
      <div className="homeContainer skillsContaier">
        <LightSpeed left>
          <h1 className="name">
            <span className="hilight">S</span>kills
          </h1>
        </LightSpeed>
        <Flip left>
          <p className="subTitle">
            <span className="hilight">I</span>mplementation of apps and landing
            pages from concept through deployment.
          </p>
        </Flip>
        <div className="skills">
          {skills.map((e) => {
            return (
              <Flip key={e.id} top>
                <div
                  className="card"
                  style={{ width: "8rem", height: "10rem", paddingTop:'20px' }}
                >
                  <img src={e.img} style={{width:'80%'}} className="card-img-top" alt=""></img>
                  <div className="card-body">
                    <p className="card-text hilight">{e.skill}</p>
                  </div>
                </div>
              </Flip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
