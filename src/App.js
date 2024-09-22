import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './component/AnimatedRoutes';

function App() {
  
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
