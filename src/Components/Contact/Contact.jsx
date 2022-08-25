import './Contact.css';
import Chef from '../../images/chef/c1.jpg'

function Contact(){
  return(
    <>
      <div className="contact" id='Contact'>
        <h1><span>Contact </span>Us</h1>
        <div className="cont-flex">
          <div className="left-cont">
            <img src={Chef} alt ="Img" />
          </div>
            <div className="right-conta">
      
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <button className="Contact-btn">Send</button>
              
            </div>
        </div>
      </div>
    </>
  )
}



export default Contact;              