import './Home.css';
import Berry from '../../images/berry.png';
import Leaf from '../../images/leaf.png';
import Shushi from '../../images/main-b.jpg';

function Home(){
  return(
    <>
      <div className="hero" id='Home'>
        <div className="left-hero">
          <h1>Welcome To Our <span>Indian </span>
          Restaurant.</h1>
          <p>It is great hotel to experience the indian food come with your family. To enjoy the indian food and indian desert and ofcourse indian cuisine. Here we will apply Api.</p>
          <button className="btn-home">Order Now</button>
        </div>
        <div className="right-hero">
          <img src={Shushi} alt="hero-img" />
        </div>
      </div>
    </>
  )
}

export default Home;