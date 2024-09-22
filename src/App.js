// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet } from 'react-router-dom';
import AnimatedRoutes from './component/AnimatedRoutes';
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
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;