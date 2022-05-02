import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import api from '../../services/api';

function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  },[]);
  return (
    <div className="container">
      <h1>Home</h1>
      <div className='lista-filmes'>
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <h3>{filme.nome}</h3>
              <img src={filme.foto}></img>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
