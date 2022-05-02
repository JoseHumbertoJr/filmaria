import './filme.css';
import { useParams } from 'react-router';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'

export default function Filme(){
    const {id} = useParams();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNot, setPageNot] = useState(true);
    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            if(response.data.length === 0){
                setPageNot(false);
            }
            setFilme(response.data);
            setLoading(false);
        }
        loadFilme();
    },[id]);
    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando o Filme...</h1>
            </div>
        )
    }
    else if(!loading && !pageNot){
        return(
            <div className='filme-info'>
                <h1>Pagina não encontrada!</h1>
                <Link to="/">VOLTAR</Link>
            </div>
        )
    }
    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const temFilme = filmesSalvos.some((filmesSalvos)=>filmesSalvos.id === filme.id);
        if(temFilme){
            toast.warn('Você já adicionou antes!');
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
    }
    return(
        <article className='article' key={filme.id}>
            <h1>{filme.nome}</h1>
            <img className='filme' src={filme.foto}></img>
            <h2>Sinopse</h2>
            <p>{filme.sinopse}</p>
            <div>
                <button onClick={salvaFilme}>SALVAR</button>
                <button>
                    <a target="_blank" href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}>TRAILER</a>
                </button>
            </div>
        </article>
    )
}