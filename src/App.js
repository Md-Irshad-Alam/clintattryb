import logo from './logo.svg';
import './App.css';
import AllRouter from './Componants/AllRouter/AllRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <AllRouter/>
    </div>
  );
}

export default App;
