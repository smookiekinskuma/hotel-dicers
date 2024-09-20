import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';

import Bar from './pages/Bar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Room from './pages/Room';
import Event from './pages/Event';
import Inquiries from './pages/Inquiries';
import Admin from './pages/Admin';
import Guestbook from './pages/adminpages/Guestbook';
import Roombook from './pages/adminpages/Roombook';
import Venuebook from './pages/adminpages/Venuebook';
import Staffbook from './pages/adminpages/Staffbook';
import Formbook from './pages/adminpages/Formbook';
import Inboxbook from './pages/adminpages/Inboxroom';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Event" element={<Event />} />        
          <Route path="/Inquiries" element={<Inquiries />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin" element={<Admin />}>
            <Route path="/Admin/Guest" element={<Guestbook />} />
            <Route path="/Admin/Room" element={<Roombook />} />
            <Route path="/Admin/Venue" element={<Venuebook />} />
            <Route path="/Admin/Staff" element={<Staffbook />} />
            <Route path="/Admin/Form" element={<Formbook />} />
            <Route path="/Admin/Inbox" element={<Inboxbook />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

   </> 
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
