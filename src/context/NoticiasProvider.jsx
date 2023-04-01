import { useState, useEffect, createContext } from "react";
import axios from 'axios'


const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState([])
    const [ paginacion, setPaginacion ] = useState(1)
    const [ totalNoticias, setTotalNoticias ] = useState(0)


    useEffect(() => {
      
        const consultarApi = async () =>{
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            
            const { data } = await axios(url)
            
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPaginacion(1)
        }
        consultarApi()
    }, [categoria])

    useEffect(() => {
      
        const consultarApi = async () =>{
            
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${paginacion}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            
            const { data } = await axios(url)
            
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarApi()
    }, [paginacion])

    const handleChangePaginacion = (e,valorActual) =>{
        setPaginacion(valorActual)
    }
    

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePaginacion,
                paginacion
            }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext