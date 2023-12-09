import React from 'react';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navigation/Navbar';
import "./App.css";
import { ABOUT, CONTACT, DEMO } from './constants';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const [isActive, setIsActive] = React.useState({
    demo: true,
    about: false,
    contact: false,
  });

  const activeHandler = (clicked) =>{
    switch (clicked) {
      case DEMO:
        setIsActive({
          demo: true,
          about: false,
          contact: false,
        });
        break;
      case ABOUT:
        setIsActive({
          demo: false,
          about: true,
          contact: false,
        });
        break;
      case CONTACT:
        setIsActive({
          demo: false,
          about: false,
          contact: true,
        });
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Navbar activeHandler={activeHandler} isActive={isActive}/>
      {isActive.demo && <Dashboard />}
      {isActive.about && <About />}
      {isActive.contact && <Contact />}
    </div>
  )
}

export default App;
