import React from "react";
import styled from "styled-components";
import api from '../../services/api';
import { useEffect, useState } from "react";

    const Box = styled.div`

        background-color: #2D0C5E;
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 100%;
        height: 450px;

        //Mobile
        
        
        @media (max-width:600px){
            height:550px;
        }
        
        
    
    `;
    const Titulo = styled.h1`
    
        width:780px;
        height:112px;
        font-weight:700;
        font-size: 48px;
        color: #FFFFFF;
        text-align:center;
        margin:60px;

        @media (max-width: 480px){
            width:300px;
            font-size:24px;
            text-align:left;
        }
        @media (max-width: 600px){
            width:400px;
            font-size:24px;
            text-align:left;
        }
        
        

    `;

const Subtitulo = styled.p`

        font-size: 14px;
        text-align:center;
        color:#FFFFFF;
    `;

const Nav = styled.nav`

        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        width:1030px;
        height:128px;
        gap:8px;


        @media (max-width:480px){
            width:460px;
            justify-content:flex-start;
        }
        @media (max-width:600px){
            width:460px;
            justify-content:flex-start;
        }
        
        
        
        
    `;
const BtnContainer = styled.a`

        text-align:center;
        background:#FFFFFF;
        border-radius:4px;
        border:1px solid #FFFFFF;
        padding: 8px 16px;
        cursor:pointer;
        color:#323232;
        &:hover{
            background:#D18000;
            border:none;
        }

        @media (max-width:412px){
            
            height:32px;
        }

    `;


    

    function ChoiceGenre (genres){
        const selectGenre = (genres.id);

        selectGenre()
            
    }

const Container = () => {
        const btnList = [{
            href:"#",
            id:28,
            name: "Ação"
        },
        {
            href:"#",
            id:12,
            name:"Aventura"
        },
        {
            href:"#",
            id:16,
            name:"Animação"
        },
        {
            href:"#",
            id:35,
            name:"Comédia"
        },
        {
            href:"#",
            id:80,
            name:"Crime"
        },
        {
            href:"#",
            id:99,
            name:"Documentário"
        },
        {
            href:"#",
            id:18,
            name:"Drama"
        },
        {
            href:"#",
            id:10751,
            name:"Família"
        },
        {
            href:"#",
            id:14,
            name:"Fantasia"
        },
        {
            href:"#",
            id:36,
            name:"História"
        },
        {
            href:"#",
            id:27,
            name:"Terror"
        },
        {
            href:"#",
            id:10402,
            name:"Música"
        },
        {
            href:"#",
            id:9648,
            name:"Mistério"
        },
        {
            href:"#",
            id:10770,
            name:"Romance"
        },
        {
            href:"#",
            id:878,
            name:"Ficção Científica"
        },
        {
            href:"#",
            id:10770,
            name:"Cinema TV"
        },
        {
            href:"#",
            id:53,
            name:"Triller"
        },
        {
            href:"#",
            id:10752,
            name:"Guerra"
        },
        {
            href:"#",
            id:37,
            name:"Faroeste"
        }
        ]

        const [genres, setGenres] = useState([]);
        
        
            useEffect(() => {
                
                api.get("/genre/movie/list").then(resp => {
                    setGenres(resp.data.results)
                }) 
            }, []);
        
        

    return (
        <Box>
            <Titulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Titulo>
            <Subtitulo>FILTRE POR:</Subtitulo>
            
                <Nav >
                    {btnList.map((results) => {
                        return(
                            <BtnContainer href={results.href} onClick={(e) => {ChoiceGenre(results.genres)}}>{results.name}</BtnContainer>

                        )
                    })}
                </Nav>

            
            
        </Box>
    )
}

export default Container;

