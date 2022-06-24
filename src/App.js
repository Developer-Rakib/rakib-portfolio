import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import MySkills from './Components/MySkills/MySkills';
// import Testimonial from './Components/Testimonial/Testimonial';
import { Toaster } from 'react-hot-toast';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <div id="menu" class="fas fa-bars"></div>
      <Home></Home>
      <About></About>
      <MySkills></MySkills>
      <Portfolio></Portfolio>
      <Education></Education>
      <Blogs></Blogs>
      <Contact></Contact>
      <a style={{color:'var(--primary)', fontSize:'40px'}} href="#home" class="top">
        <BsFillArrowUpSquareFill></BsFillArrowUpSquareFill>
      </a>
    </div>
  
  );
}

export default App;
