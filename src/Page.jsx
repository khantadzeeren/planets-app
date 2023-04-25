import { useParams , Link} from "react-router-dom";
import data from "./data.json";
import menu from "./assets/icon-hamburger.svg";
import source from "./assets/icon-source.svg";
import { useState } from "react";

function Page() {
  const { name } = useParams();
  const planetObject = data.find((planet) => planet.name === name);
  console.log(planetObject);

  const [choice, setChoice] = useState("overview");

  const structure = () => {
    setChoice("structure");
  };
  const overview = () => {
    setChoice("overview");
  };
  const surface = () => {
    setChoice("surface");
  };

  return (
    <div>
      <div className="start">
        <p className="headline"> THE PLANETS </p>
        <img className="menu" src={menu} alt="" />
      </div>
      <div className="names">
        <Link to="/planet/Mercury" ><button  className="sameplanets">mercury</button></Link>  
        <Link to="/planet/Venus" ><button  className="sameplanets">venus</button></Link>          
        <Link to="/planet/Earth" ><button className="sameplanets">earth</button></Link>          
        <Link to="/planet/Mars" ><button className="sameplanets">mars</button></Link>          
        <Link to="/planet/Jupiter" ><button className="sameplanets">jupiter</button></Link>          
        <Link to="/planet/Saturn" ><button className="sameplanets">saturn</button></Link>          
        <Link to="/planet/Uranus" ><button className="sameplanets">uranus</button></Link>          
        <Link to="/planet/Neptune" ><button className="sameplanets">neptune</button></Link>          
      </div>
      <hr className="hr1" />
      <div className="choise">
        <button onClick={overview} className="btn">
          OVERVIEW
        </button>
        <button onClick={structure} className="btn">
          {" "}
          Structure
        </button>
        <button onClick={surface} className="btn">
          Surface{" "}
        </button>
      </div>
      <hr className="hr2" />
      <div className="img1div">
        <img
          className="img1"
          src={
            choice == "overview"
              ? planetObject.images.planet
              : choice == "structure"
              ? planetObject.images.internal
              : choice == "surface"
              ? planetObject.images.geology
              : ""
          }
          alt=""
        />
      </div>
      <div className="big">
        <div>
          <div className="namediv">
            <p className="name">{planetObject.name}</p>
          </div>
          <div className="descriptiondiv">
            <p className="description">
              {" "}
              {choice == "overview"
                ? planetObject.overview.content
                : choice == "structure"
                ? planetObject.structure.content
                : choice == "surface"
                ? planetObject.geology.content
                : ""}
            </p>
          </div>

          <div className="srcdiv">
            <p className="src">Source</p>
            <a
              className="src2"
              href={
                choice == "overview"
                  ? planetObject.overview.source
                  : choice == "structure"
                  ? planetObject.structure.source
                  : choice == "surface"
                  ? planetObject.geology.source
                  : ""
              }
            >
              Wikipedia
            </a>
            <img src={source} alt="" />
          </div>
        </div>

        <div className="choice2">
          <button onClick={overview} className="btn">
            OVERVIEW
          </button>
          <button onClick={structure} className="btn">
            {" "}
            Internal Structure
          </button>
          <button onClick={surface} className="btn">
          Surface Geology
          </button>
        </div>
      </div>

      <div className="bottom">
        <div className="same">
          <p className="same1">ROTATION TIME</p>
          <p className="sametime">{planetObject.rotation}</p>
        </div>
        <div className="same">
          <p className="same1">REVOLUTION TIME</p>
          <p className="sametime">{planetObject.revolution}</p>
        </div>
        <div className="same">
          <p className="same1">RADIUS</p>
          <p className="sametime">{planetObject.radius}</p>
        </div>
        <div className="same diff">
          <p className="same1">AVERAGE TEMP.</p>
          <p className="sametime">{planetObject.temperature}</p>
        </div>
      </div>
    </div>
  );
}
export default Page;
