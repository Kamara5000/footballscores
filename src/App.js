
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './routes/home';
import Competition from './routes/competition';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route path="/competition/:name" element={<Competition/>}/>  
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
