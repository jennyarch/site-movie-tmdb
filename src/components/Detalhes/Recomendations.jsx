import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from '../../services/api';

//Estilos

const BoxRecomendations = styled.section`
        display:flex;
        flex-direction:column;
        gap:10px;
        background-color:#E5E5E5;
        padding:30px;
        padding-left:100px;

        @media (max-width:480px){
            height:1500px;
        }

    `;
const Title = styled.h3`
        font-size:28px;
        font-weight:700;
        font-style:normal;
        color: #131313;

        @media (max-width:480px){
            margin-left:-60px;
        }
    `;
const ListMoviesBox = styled.div`
        display:flex;
        flex-direction:row;
        gap:25px;

        @media (max-width:480px){
            width:400px;
            margin-left:-60px;
            flex-direction:row;
            flex-wrap:wrap;
        }
        
    `
const ListMovies = styled.div`
        display:flex;
        height:350px;
        flex-direction:column;
        justify-content:flex-start;
        gap:5px;

        
        
    `
const Img = styled.img`
        width: 176px;
        height:264px;
        border-radius:4px;

        @media (max-width:480px){
            width:156px;
            height:232px;
            margin-left:-30px;
        }

    `;
const TitleMovie = styled.h4 `
        font-size:16px;
        font-weight:700;
        font-style:normal;
        color:#000000;
        word-break: break-word;
        width: 176px;
    `;
const DataRelease = styled.p`
        font-size:14px;
        font-weight:bold;
        font-style:normal;
        color:#646464;
    `

function Recomendations (){
    let {id} = useParams();

    const [listRecomendations, setListRecomendations] = useState([])
    const ImgUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        api.get(`/movie/${id}/recommendations`).then(resp => {
            setListRecomendations(resp.data.results)
        })
    }, [id]);



    return (
        
        <BoxRecomendations>
            <Title>Recomendações</Title>
                <ListMoviesBox>
                {listRecomendations.slice(0,6).map(recomendation => {
                    return(
                        <ListMovies>
                            
                            <Img src={`${ImgUrl}${recomendation.poster_path}`}></Img>
                            <TitleMovie>{recomendation.title}</TitleMovie>
                            <DataRelease>{recomendation.release_date}</DataRelease>
                        
                        </ListMovies>

                    )
                })}
                </ListMoviesBox>
        </BoxRecomendations>
    )
}
export default Recomendations;
