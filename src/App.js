//import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

//import css
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
