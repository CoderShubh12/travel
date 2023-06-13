
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Pricing from './components/Pages/Pricing';
import Navbar from './components/Home/Navbar';
import Room from './components/Pages/Rooms/Room';





function App() {

  return (
    <div className="App">
          {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pricing" element={<Pricing
        />}/>
        <Route path="/rooms" element={<Room
        />}/>


      </Routes>
      
    </div>
  );
}

export default App;
