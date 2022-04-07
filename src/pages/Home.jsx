import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Pagination } from '@material-ui/lab';
import api from "../services/api";
import Header from "../components/Cabecalho/Header";
import Section from "../components/Home/Container";
import { createBrowserHistory } from 'history';
import { useParams } from "react-router-dom";


// Estilos
const ConteudoMain = styled.div
    `
        display: flex;
        flex-direction: column;
            
    `;
const Container = styled.section
    `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:space-around;
        gap:5px;
        margin:32px;
        background-color:"#E5E5E5";
    `;
const PaginationAlign = styled.div
    `
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        padding-top:20px;
    `;
const LastPage = styled.button
    ` 
        font-size:16px;
        color:#5C16C5;
        cursor:pointer;
        
    `;
const List = styled.li
    `
        width:180px;
        display:flex;
        flex-direction:row;
        margin-top:20px;
    `;

const Ancora = styled.a
    `
        display:flex;
        flex-direction:column;
        justify-content:space-around;

    `;
const Img = styled.img
    `
        width:176px;
        height:264px;
        border-radius:4px;
    `;
const Titulo = styled.h4
    `
        font-size:16px;
        font-style:normal;
        font-weight:700;
    `;
const DataLancamento = styled.p
    `
        font-size:14px;
        font-style:normal;
        font-weight:700;
        color:#646464;    
    `;

// Imagen dos Filmes
const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';


function Home(props) {
    const [listMovies, setListMovies] = useState([]);


    let { id } = useParams()
    if (id === undefined) {
        id = 1;
    }


    GetMovieList(id);


    function GetMovieList(page) {


        useEffect(() => {
            api.get(`/movie/popular?page=${page}`).then(resp => {
                setListMovies(resp.data.results)
            })
            .catch(error => {
                console.log(error)
            });
        }, [page]);
    }

    function PageDetails(id) {
        const history = createBrowserHistory();
        history.push(`/Detalhes/${id}`);
        history.go();

    }


    // const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        event.preventDefault();
        const history = createBrowserHistory();
        history.push(`/${value}`);
        history.go();
    }




    return (
        <>

            <Header />
            <Section />
            <ConteudoMain>
                <Container >
                    {listMovies.map(movie => {

                        return (
                            <List key={movie.id}>

                                <Ancora onClick={(e) => { PageDetails(movie.id) }}>
                                    <Img src={`${imgUrl}${movie.poster_path}`} alt="results.title" />
                                    <Titulo> {movie.title}</Titulo>
                                    <DataLancamento>{movie.release_date}</DataLancamento>
                                </Ancora>

                            </List>
                        )
                    })}
                </Container>

                <PaginationAlign>
                    <Pagination onChange={handleChange} count={10} color="primary"  />
                    <LastPage>Ultima</LastPage>
                </PaginationAlign>



            </ConteudoMain>
        </>
    )
}

export default Home;