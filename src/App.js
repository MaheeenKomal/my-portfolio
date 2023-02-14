import './App.css';
import {Header} from './components/Header';
import {About} from './components/About';
import {Skill} from './components/Skill';
import {Resume} from './components/Resume';
import {Portfolio} from './components/Portfolio';
import {Footer} from './components/Footer';
// import {Navbar} from './components/Navbar';
function App () {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <About />
      <Skill />
      <Resume />
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;
