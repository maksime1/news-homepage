import { FooterContainer } from "./Style";
import PcImg from "../images/image-retro-pcs.jpg";
import KeyboardImg from "../images/image-top-laptops.jpg";
import ControllerImg from "../images/image-gaming-growth.jpg";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div className="pc-div">
          <img src={PcImg} alt="pc-img" />
          <div className="text">
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="keyboard_div">
          <img src={KeyboardImg} alt="keyboard-img" />
          <div className="text">
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="controller_div">
          <img src={ControllerImg} alt="controller-img" />
          <div className="text">
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}
