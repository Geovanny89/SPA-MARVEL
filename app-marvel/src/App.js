import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import './App.css'

function App() {
  
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} /> 

      </Routes>

    </div>
  );
}

export default App;
