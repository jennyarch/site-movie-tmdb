import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import api from '../services/api';
import { useParams } from "react-router-dom";
import Header from '../components/Cabecalho/Header';
import Crew from '../components/Detalhes/Crew';
import Cast from '../components/Detalhes/Cast';
import Trailer from '../components/Detalhes/Trailer';
import Recomendations from "../components/Detalhes/Recomendations";


const Container = styled.section`
        display:flex;
        flex-direction:row;
        width:100%;
        height:600px;
        align-items:center;
        padding:20px;
        background-color:#2D0C5E;
        padding-left:100px;
        padding-top:100px;
        

        @media (max-width:480px){
            flex-direction:column;
            align-items:center;
            padding-left:10px;
            height:1100px;
            
            
        }
    `;
const ListDetails = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        align-items:start;
        margin:20px;
        padding:10px;
        gap:10px;


        
    `;
const BlockDetails = styled.div`
        display:flex;
        flex-direction:colum;
        align-items:start;
        gap:5px;

        @media (max-width:480px){
            flex-direction:column;
            justify-content:flex-start;
            padding-left:60px;
        }
    `;
const Span = styled.span `
        color:#ffffff;

        @media (max-width:480px){
            display:none;
        }
    `
const Img = styled.img`
        width:383px;
        height: 574px;
        border-radius:8px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        @media (max-width:480px){
            width:186px;
            align-items:center;
            padding:10px;
            margin:10px;
        }
    `;

const Titulo = styled.h3`
        font-size:32px;
        font-style:normal;
        font-weight:700;
        color: #FFFFFF;

        @media (max-width:480px){
           padding-left: 60px;
        }
    `;
const ReleaseDate = styled.div`
        display:flex;
        flex-direction:row;
        gap:5px;
        
    `;
const Paragraph = styled.p`
    font-size:18px;
    font-style:normal;
    font-weight:400;
    color:#FFFFFF;
    text-transform:uppercase;
    `
const Adult = styled.p`
    font-size:14px;
    font-style:normal;
    font-weight:400;
    color:#FFFFFF;
    `;
const RunTime = styled.h3 `
        font-size:16px;
        font-style:normal;
        font-weight:400;
        color: #FFFFFF;

    `
const Subtitulo = styled.h3`
    font-size:20px;
    font-style:normal;
    font-weight:700;
    color:#FFFFFF;
    text-align:left;

    @media (max-width:480px){
            padding-left:60px;
        }
    `
const Overview = styled.p `
    
    font-size:14px;
    font-style:normal;
    font-weight:400;
    color:#FFFFFF;

    width:500px;
    height:120px;


    @media (max-width:480px){
            padding-left:60px;
            width:380px;
            height:150px;
        }
    `;
const Genres = styled.p`
    font-size:14px;
    font-style:normal;
    font-weight:400;
    color:#FFFFFF;
    `;
const Pontuation = styled.div `
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:10px;

        @media (max-width:480px){
            padding-left:60px;
        }
    `;
const Ellipse = styled.div`
        width:80px;
        height:80px;
        border-radius:50px;
        border:5px solid #14FF00;
        background-color:#412d65;
        padding:10px;
    `;
const Voto = styled.h2`
        font-style:bold;
        color:#14FF00;
        font-size:18px;
        text-align:center;
        padding:28%;
    `;
const Label = styled.h2`
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color:#ffffff;
    `
// Lista de filmes
const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';


function Detalhes(props) {
    let { id } = useParams();
    
    

    const [movieDetail, setMovieDetail] = useState({});


    useEffect(() => {
        api.get(`/movie/${id}`).then(resp => {
            setMovieDetail(resp.data)
        });
    }, []);

    
        
    
    return (
        <>
            <Header />

            <Container>

                <Img src={`${imgUrl}${movieDetail.poster_path}`} alt="results.title" />
                <ListDetails>
                    <Titulo> {movieDetail.title}</Titulo>
                    <BlockDetails>
                        <Adult>{movieDetail.adult}</Adult>
                        
                        <ReleaseDate>
                            <Paragraph>{movieDetail.release_date}</Paragraph>
                            <Paragraph>({movieDetail.original_language})</Paragraph>
                        </ReleaseDate>
                        <Span>•</Span>
                        {
                            movieDetail.genres && movieDetail.genres.map((gender) => {
                                return (
                                <Genres>{gender.name},</Genres>
                                    )
                            })
                        }
                        <Span>•</Span>
                        <RunTime>{movieDetail.runtime} Minutos</RunTime>
                    </BlockDetails>
                    <Pontuation>
                        <Ellipse>
                            <Voto>{movieDetail.vote_average}</Voto>
                        </Ellipse>
                        <Label>Avaliação dos Usuarios</Label>
                    </Pontuation>
                    <Subtitulo>Sinopse</Subtitulo>
                    <Overview>{movieDetail.overview}</Overview>
                    <Crew />


                </ListDetails>
            </Container>
            <Cast/> 
            <Trailer/>  
            <Recomendations />     

        </>
    );
}
export default Detalhes;