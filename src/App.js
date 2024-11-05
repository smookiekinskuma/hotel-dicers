import { BrowserRouter, Outlet } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';
import './CSS/Home.css';


function App() {
  
  return (
    <BrowserRouter>
      <AnimatedRoutes /> {/* <--Seperated For Motion application */}
      <Outlet/>
    </BrowserRouter>
  )
}

export default App;