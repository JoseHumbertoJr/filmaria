import  {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Home/Filme';
import Salvos from './pages/Salvos';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/filme/:id" element={<Filme/>}></Route>
                <Route exact path="/favoritos" element={<Salvos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;