import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Recipe from './Components/Recipe/Recipe.jsx';
import Review from './Components/Review/Review.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Recipe />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}
