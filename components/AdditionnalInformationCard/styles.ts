import styled from "styled-components";

export const InfosAdd = styled.div`
    background-color: #fff;
    border-radius: 5px;
    transition: 0.5s;
    position: absolute;
    right: -210px;

    @media(max-width: 500px) {
        margin-bottom: 1rem;
        width: 100%;
        position: static;
        text-align: center;
    }

    strong {
            font-family: Inter;
            background-color: var(--green);
            padding: 0.6rem;
            border-radius: 5px;
        }

    div {
        padding: 1rem;

       
        p {
            font-family: Inter;
            font-weight: 300;
        }
    }

    
`