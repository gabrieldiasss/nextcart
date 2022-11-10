import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-top: 1rem;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    max-width: 500px;
    min-width: 500px;
    padding: 0.6rem;
    border-bottom: 1px solid #000;
    border-radius: 5px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 1rem;
    }

    strong {
        font-family: Inter;
    } 

    p {
        font-family: Inter;
    }

    div {
        display: block;
    }
`