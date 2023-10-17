import lidGif from "../Img/lid.gif";
import { Link } from "react-scroll";


export default function Banner() {
  return (
    <div className="banner">
      <section id="Home" className="coverText">
        <div className="textContainer">
          <p data-text="Cover your drink,">Cover your drink,</p>
          <p data-text="Spill less,">Spill less,</p>
          <p data-text="Keep warm.">Keep warm.</p>
        </div>
        <img className="lid" src={lidGif} alt="Lid GIF"></img>
      </section>
        <div className="buttons-container">
        <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Products"
            className="text-lg font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3 text-white align-middle"
          >
            View Products
          </Link>
      </div>
   </div>
  );
}
