import './Footer.css';

function Footer(){
  return(
    <>
      <div className="footer">
        <div className="social-cont">
          <div className="socialink-cont">
            <button>Facebook</button>
            <button>LinkedIn</button>
            <button>GitHub</button>
            <button>Instagram</button>
            <button>Whatsapp</button>
          </div>
        </div>  
        <div className="copyright">
          <p>Created By <span>Alok Kumar</span> || All Rights Reserved</p>
        </div>  
      </div>
    </>
  )
}

export default Footer;