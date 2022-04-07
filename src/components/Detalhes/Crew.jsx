import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from '../../services/api';


const CrewBox = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        flex-wrap:wrap;
        align-items:center;
        gap:10px;
        width:400px;
        height:170px;

        @media (max-width:480px){
            padding-left:60px;

            justify-content:space-around;
        }
        
    `;
const Div = styled.div `
            display:flex;
            flex-direction:column;
        `
const Name = styled.h3`
        font-size:16px;
        font-weight:700;
        font-style:normal;
        color:#ffffff;
    `;
const Department = styled.p`
        font-size:14px;
        font-weight:400;
        font-style:normal;
        color:#ffffff;
        margin-top:10px;
    `;





function Crew(props){
    let { id } =  useParams();

    const [listCrew, setListCrew] = useState([])

    useEffect(() => {
        api.get(`/movie/${id}/credits`).then(resp => {
            setListCrew(resp.data.crew)
        });
    }, []);



    return(
        
            <CrewBox>
                {listCrew.slice(0,6).map(crew => {
                    
                    return (
                        <Div>
                            <Name>{crew.name}</Name>
                            <Department>{crew.department}</Department>
                        </Div>
                        )
                })}
            </CrewBox>
            
    )

}
export default Crew;