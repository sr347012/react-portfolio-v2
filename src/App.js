import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Works from './components/Works';
import History from './components/History';
import About from './components/About';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Clients from './components/Clients';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Works />
      <History />
      <div className='skills-vs-clients'>
      <h3 >Skills </h3>
      <h5 style={{color:"whitesmoke", margin:"2%", padding:"2%"}}>vs </h5>
      <h3 >Clients</h3>
      </div>
      <div className='skills-clients'>
        <Skills />
        <div className='separator'></div>
        <Clients />        
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
