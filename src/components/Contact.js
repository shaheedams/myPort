import Flip from "react-reveal/Flip";
import { LightSpeed } from "react-reveal";

const Contact = () => {
  const contacts = [
    {
      id: 11,
      name: "Mail",
      img: "%PUBLIC_URL%/images/gmail.png",
      link: "mailto:mohamedshaheed8055@gmail.com",
    },
    {
      id: 22,
      name: "Github",
      img: "%PUBLIC_URL%/images/github.png",
      link: "https://github.com/shaheedams",
    },
    {
      id: 33,
      name: "Resume",
      img: "%PUBLIC_URL%/images/cv.png",
      link: "/resume/Resume-Mohamed-Shaheed-A.pdf",
    },
  ];
  return (
    <div className="section">
      <div className="homeContainer contactsContaier">
        <LightSpeed left>
          <h1 className="name">
            <span className="hilight">C</span>ontacts
          </h1>
        </LightSpeed>
        <Flip left>
          <p className="subTitle">
            <span className="hilight">I</span>f you Want to Contact me ⬇️⬇️
          </p>
        </Flip>
        <div className="contacts">
          {contacts.map((e) => {
            return (
              <Flip key={e.id} right>
                <a href={e.link} target="_blank">
                  <div
                    className="card"
                    style={{
                      width: "8rem",
                      height: "10rem",
                      paddingTop: "20px",
                    }}
                  >
                    <img
                      src={e.img}
                      className="card-img-top"
                      style={{ width: "80%" }}
                    ></img>
                    <div className="card-body">
                      <p className="card-text hilight">{e.name}</p>
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

export default Contact;
