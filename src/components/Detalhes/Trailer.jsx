import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from '../../services/api';
import YouTube from 'react-youtube';


//Styles
const SectionTrailer = styled.section`
        display:flex;
        flex-direction:column;
        align-items:start;
        background-color:#E5E5E5;
        padding:30px;
        padding-left:100px;

        @media (max-width:480px){
            height:400px;
        }
    `;
const Title = styled.h3`
        color: #131313;
        font-size:28px;
        font-weight:700;
        font-style:normal;
        margin:20px 0 20px 0;

        @media (max-width:480px){
            margin-left:-60px;
        }
    `;
const Video = styled.video`
        width:907px;
        height:50px;

        @media (max-width:480px){
            margin-left:-60px;
            width:324px;
            height:182px;
        }
    `;


    

function Trailer (){

    let { id } = useParams();
    
    const [listTrailer, setListTrailer] = useState([])
    
    useEffect(() => {
        api.get(`/movie/${id}/videos`).then(resp => {
            setListTrailer(resp.data.results)
        })
    }, [id]);
    
   /*  const opts = {
        height:'390',
        width:'640',
        playerVars:{
            `https://www.youtube.com/watch?v=${listTrailer.key}`,
            autoplay:1,
        }
    } */
    // const videoURL = `https://www.youtube.com/watch?v=`;
    const opts = {
        height: '510',
        width: '907',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    return (
        
        <SectionTrailer>
            
            <Title>Trailer</Title>
            <Video src={listTrailer.key} constrols>
            </Video>
            <YouTube 
                videoId={listTrailer.key}
                opts={opts}
                
            />
                    
        </SectionTrailer>
    )
}
export default Trailer;