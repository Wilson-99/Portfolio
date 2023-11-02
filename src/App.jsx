import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
