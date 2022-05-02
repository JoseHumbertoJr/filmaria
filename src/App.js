import './styles.css';
import Rotas from './rotas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000}/>
      <Rotas></Rotas>
    </div>
  );
}

export default App;
