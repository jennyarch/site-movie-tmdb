import React from "react";
import LogoMain from '../../assets/Logo.svg'
import styled from "styled-components";
import { createBrowserHistory } from 'history';


const EstiloCabecalho = styled.nav`
        background-color: #5C16C5;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 15vw;
        width:100%;
        height: 10vh;
        align-items: center;


        @media (max-width:480px){
            flex-direction:column;
            justify-content:center;
        }
    `;

const Logo = styled.img 
    `
        width: 184px;
        height: 24px;
        cursor:pointer;
    `

const Header = () => {
    function PageHome (){
        const history = createBrowserHistory();
        history.push(`/Home/`);
        history.go();
    }
    return(
        <EstiloCabecalho>
            <Logo src={LogoMain} alt="Logo do TMDB - Home" onClick={PageHome} />
        </EstiloCabecalho>
        
    )
}
export default Header;