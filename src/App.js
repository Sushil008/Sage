import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Navbar from "./components/Navbar";
import Home from './routes/Home';


export default function App() {
    return (
      <div className="App">
       <Routes>
        <Route/>

        </Routes>
          <Navbar/>    
          <Home/>  
      </div>
    );
}
 