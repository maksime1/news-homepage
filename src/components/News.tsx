import { NewsContainer } from "./Style";
import MainImg from "../images/image-web-3-mobile.jpg";
import MainImg2 from "../images/image-web-3-desktop.jpg";

export default function News() {
  return (
    <>
      <NewsContainer>
        <div className="">
          <img className="mobile_img" src={MainImg} alt="main_img" />
          <img className="dekstop_img" src={MainImg2} alt="" />
          <div className="texts">
            <div className="left">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="right">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="news_container">
          <h2>New</h2>
          <div>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <h3>Is VC Funding Drying Up?</h3>
            <span>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </span>
          </div>
        </div>
      </NewsContainer>
    </>
  );
}
