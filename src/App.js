import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Qualification from './components/Qualification';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App mx-auto max-w-7xl px-2 sm:px-6 md:px-4 lg:px-8">
      <Navbar />
      <About />
      <Certifications />
      <Experience />
      <Qualification />
    </div>
  );
}

export default App;
