import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
