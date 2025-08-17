import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './HomeComponent/Navbar';
import Home from './HomeComponent/Home';
import Footer from './HomeComponent/Footer';
import About from './HomeComponent/About';
import Contact from './HomeComponent/Contact';
import Service from './HomeComponent/Service';
import Gallery from './HomeComponent/Gallery';
import Frontpic from './HomeComponent/Frontpic';
function App() {
  return (
       <BrowserRouter>
  <Navbar/>
{/* <Scroll/> */}
<Routes>
  
   <Route path="/" element={<Home/>}/>
 <Route path="contact" element={<Contact/>}/>
  <Route path="service" element={<Service/>}/>
  <Route path="about" element={<About/>}/> 
  <Route path="gallery" element={<Gallery/>}/> 
  <Route path="frontpic" element={<Frontpic/>}/> 
</Routes>
<Footer/>
</BrowserRouter> 
  );
}

export default App;
