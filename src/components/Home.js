import Zoom from "react-reveal/Zoom";
import { Roll } from "react-reveal";

const Home = () => {
  return (
    <div className="section">
      <div className="homeContainer nameContaier">
        <Roll left>
          <h1 className="name">
            <span className="hilight">M</span>ohamed Shaheed A
          </h1>
        </Roll>
        <Zoom bottom>
          <p className="subTitle">
            <span className="hilight">I</span>am a Web developer
          </p>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
