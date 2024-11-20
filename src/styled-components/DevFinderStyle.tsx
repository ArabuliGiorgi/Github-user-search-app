import styled from "styled-components";

const Search = styled.div<{darkmode: string}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .search-bar{
        width: 100%;
        max-width: 730px;
        min-height: 60px;
        box-shadow: ${(props) => props.darkmode === "true" ? 'none' : '0px 16px 30px -10px #4660BB33'};
        border-radius: 15px;
        background-color: ${(props) => props.darkmode === "true" ? '#1E2A47' : '#FEFEFE'};
        padding: 6.5px 7px 7.5px 16px;
        display: flex;
        flex-direction: column;

        img{
            height: 20px;
        }
        input{
            width: 100%;
            margin: 0 7px 0 9px;
            background-color: transparent;
            outline: none;

            font-size: 13px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#222731'};
        }
        input::placeholder{
            font-size: 13px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#4B6A9B'};
        }
        button{
            height: 46px;
            border-radius: 10px;
            background-color: #0079FF;
            padding: 0 14px 0 18px;

            h1{
                font-size: 14px;
                font-weight: 700;
                line-height: 20.73px;
                text-align: center;
                color: #FFFFFF;
            }
        }
        button:active{
            background-color: #60ABFF;
        }
        #result-error{
            font-size: 15px;
            font-weight: 700;
            line-height: 22.22px;
            color: #F74646;
            text-align: center;
        }
    }
    #search-result{
        width: 100%;
        max-width: 730px;
        padding: 32px 24px 48px;
        box-shadow: ${(props) => props.darkmode === "true" ? 'none' : '0px 16px 30px -10px #4660BB33'};
        border-radius: 15px;
        background-color: ${(props) => props.darkmode === "true" ? '#1E2A47' : '#FEFEFE'};
        position: relative;

        #avatar{
            position: absolute;
            height: 70px;
            border-radius: 50%;
        }
        .head-info{
            text-align: left;
            margin-bottom: 33px;
            padding-left: 89px;
            min-height: 69px;
        }
        #name{
            font-size: 16px;
            font-weight: 700;
            line-height: 23.7px;
            text-align: left;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#2B3442'};
        }
        #login{
            font-size: 13px;
            font-weight: 400;
            line-height: 19.25px;
            text-align: left;
            color: #0079FF;
            margin-bottom: 6px;
        }
        #created-at{
            font-size: 13px;
            font-weight: 400;
            line-height: 19.25px;
            text-align: left;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#697C9A'};
        }
        #bio{
            font-size: 13px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#4B6A9B'};
            margin-bottom: 23px;
        }
        .stats{
            width: 100%;
            height: 85px;
            border-radius: 10px;
            background-color: ${(props) => props.darkmode === "true" ? '#141D2F' : '#F6F8FF'};
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 14px;
            margin-bottom: 24px;

            .stats-divs{
                width: 80px;
                height: 48px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .stats-fonts{
                    font-size: 11px;
                    font-weight: 400;
                    line-height: 16.29px;
                    text-align: center;
                    color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#4B6A9B'};
                }
                .stats-numbers{
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 23.7px;
                    text-align: center;
                    color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#2B3442'};
                }
            }
        }
        .footer-info{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 16px;

            .footer-info-divs{
                display: flex;
                align-items: center;
                gap: 13px;

                h1{
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 19.25px;
                    text-align: left;
                    color: ${(props) => props.darkmode === "true" ? '#FFFFFF' : '#4B6A9B'};
                }
            }
        }
    }
`

export {Search}