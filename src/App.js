import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bar from './pages/Bar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Room from './pages/Room';
import Event from './pages/Event';
import Inquiries from './pages/Inquiries';
import Admin from './pages/Admin';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Event" element={<Event />} />        
          <Route path="/Inquiries" element={<Inquiries />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

   </> 
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
