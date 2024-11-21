import styled from "styled-components";

const Main = styled.div<{darkmode: string}>`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.darkmode === "true" ? '#141D2F' : '#F6F8FF'};
    padding: 31px 24px 79px;
    display: flex;
    align-items: start;
    justify-content: center;

    .logo{
        font-size: 26px;
        font-weight: 700;
        line-height: 38.51px;
        text-align: left;
        color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#222731'};
    }
    .dark-mode{
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;

        h1{
            font-size: 13px;
            font-weight: 700;
            line-height: 19.25px;
            letter-spacing: 2.5px;
            text-align: right;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#4B6A9B'};
        }
        img{
            height: 20px;
        }
    }

    @media only screen and (min-width: 720px){
        padding: 140px 97px 140px;
    }

    @media only screen and (min-width: 1400px){
        padding: 50px 0 50px;
        align-items: center;
    }
`

export {Main}