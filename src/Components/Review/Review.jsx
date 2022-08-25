import './Review.css';
import Rev1 from '../../images/testimonials/t1.jpg';
import Rev2 from '../../images/testimonials/t2.jpg';
import Rev3 from '../../images/testimonials/t3.jpg';
import Rev4 from '../../images/testimonials/t4.jpg';

function Review(){
  return(
    <>
      <div className="rev-cont" id='Review'>
        <h1> Our Customer <span>Review</span></h1>
        <div className="rev-card">
          <div className="container-card">
            <img src={Rev1} alt="Img" />
              <h3>John Doe</h3>
            <p>This restaurant provides best indian food. This restaurant also provide the food for online or delivery system.</p>
          </div>  
          <div className="container-card">
            <img src={Rev2} alt="Img" />
              <h3>John Doe</h3>
            <p>This restaurant provides best indian food. This restaurant also provide the food for online or delivery system.</p>
          </div>  
          <div className="container-card">
            <img src={Rev3} alt="Img" />
              <h3>John Doe</h3>
            <p>This restaurant provides best indian food. This restaurant also provide the food for online or delivery system.</p>
          </div>  
          <div className="container-card">
            <img src={Rev4} alt="Img" />
              <h3>John Doe</h3>
            <p>This restaurant provides best indian food. This restaurant also provide the food for online or delivery system.</p>
          </div>  
        </div> 
      </div>
    </>
  )
}


export default Review;