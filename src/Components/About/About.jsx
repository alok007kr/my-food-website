import './About.css';
import Img1 from '../../images/brands/b1.png';
import Img2 from '../../images/brands/b2.png';
import Img3 from '../../images/brands/b3.png';
import Img4 from '../../images/brands/b4.png';
import Img5 from '../../images/brands/b5.png';

function About(){
  return(
    <>
      <div className="about" id='About'>
        <h2>Trusted By 70+ Companies</h2>
        <div className="about-sec">
        <img src={Img1} alt="brand" />
        <img src={Img2} alt="brand" />
        <img src={Img3} alt="brand" />
        <img src={Img4} alt="brand" />
        <img src={Img5} alt="brand" />
      </div>
      </div>
    </>
  )
}

export default About;