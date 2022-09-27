import Flip from "react-reveal/Flip";
import { LightSpeed } from "react-reveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project: "Creschat",
      img: "/images/school.png",
      link: "https://creschat.herokuapp.com",
    },
    {
      id: 2,
      project: "Tesla Clone",
      img: "/images/brand.png",
      link: "https://shaheedams.github.io/Tesla-Clone",
    },
    {
      id: 3,
      project: "Swiggy menu clone",
      img: "/images/delivery.png",
      link: "https://shaheedams.github.io/swiggyClone",
    },
    {
      id: 4,
      project: "E-commerce website",
      img: "/images/online.png",
      link: "https://shaheedams.github.io/pickbazar",
    },
  ];
  return (
    <div className="section">
      <div className="homeContainer projectContaier">
        <LightSpeed left>
          <h1 className="name">
            <span className="hilight">P</span>rojects
          </h1>
        </LightSpeed>
        
        <div className="projects" style={{marginTop:'10px'}}>
          {projects.map((e) => {
            return (
              <Flip key={e.id} left>
                <a
                  href={e.link}
                  target="_blank"
                >
                  <div
                    className="card"
                    style={{
                      width: "8rem",
                      height: "11rem",
                      paddingTop: "20px",
                    }}
                  >
                    <img
                      src={e.img}
                      className="card-img-top"
                      style={{ width: "80%" }}
                    ></img>
                    <div className="card-body">
                      <p className="card-text hilight">{e.project}</p>
                    </div>
                  </div>
                </a>
              </Flip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
