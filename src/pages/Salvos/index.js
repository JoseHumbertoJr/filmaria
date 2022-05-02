import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './salvos.css';
import { toast } from "react-toastify";

export default function Salvos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
        console.log(minhaLista.length);
    },[]);

    function deletar(id){
        let filtrarFilmes = filmes.filter((item)=>{
            return (item.id !== id);
        })
        toast.success("Filme removido com sucesso!");
        setFilmes(filtrarFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtrarFilmes));
    }
    return(
        <div id="meusFilmes">
            <h1>Filmes favoritos</h1>
            {filmes.length === 0 && <span>Você não possui nemhum filme salvo:(</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>
                                    <a>Ver Detalhes</a>
                                </Link>
                                <button onClick={()=> deletar(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}