import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from '../../services/api';


    // Elenco Original
const CastBox = styled.section`
        display:flex;
        flex-direction:column;
        background-color:#E5E5E5;
        width:100%;
        height:450px;
        padding-left:100px;
        padding-top:20px;

        @media (max-width:480px){
            height:1450px;
            
        }

    `;
const Title = styled.h2`
        font-size:28px;
        font-style:normal;
        font-weight:700;
        margin:20px;
        color:#131313;

        @media (max-width:480px){
            text-align:left;
            margin-left:-60px;
        }
    `;
const Img = styled.img`
        width:175px;
        height:222px;
        border-radius:4px;

        

    `;
const ScrollCast = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        position:relative;
        margin:20px;

        @media (max-width:480px){
            flex-wrap:wrap;
            margin:0;
            justify-content:start;
        }
    `;
const BoxImage = styled.div`
        display:flex;
        flex-direction:column;
        gap:3px;
    `;
const NameOriginal = styled.h3`
        font-size:  18px;
        font-style:normal;
        font-weight:700;
        color:#131313;
    `;
const Caracter = styled.p`
    font-size:  16px;
    font-style:normal;
    font-weight:400;
    color:#131313;
    `

function Cast(props){


    let { id } =  useParams();

    const [listCast, setListCast] = useState([])

    const ImgURL = "https://image.tmdb.org/t/p/w185";

    useEffect(() => {
        api.get(`/movie/${id}/credits`).then(resp => {
            setListCast(resp.data.cast)
        });
    }, []);

    return(
        <CastBox>
            <Title>Elenco Original</Title>
            <ScrollCast>
                {listCast.slice(0,5).map(cast => {
                    return(
                        <BoxImage>
                            <Img src={`${ImgURL}${cast.profile_path}`} alt="results.title"></Img>
                            <NameOriginal>{cast.name}</NameOriginal>
                            <Caracter>{cast.character}</Caracter>
                        </BoxImage>

                    )
                })}
                
            </ScrollCast>
        </CastBox>
    )



}
export default Cast;