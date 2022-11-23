import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;

    position: relative;

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    max-width: 500px;
    min-width: 500px;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #000;
    cursor: pointer;

    @media(max-width: 500px) {
        width: 90%;
        max-width: 400px;
        min-width: 400px;
        margin: 0 auto;
    }

    @media(max-width: 390px) {
        max-width: 300px;
        min-width: 300px;
    }

    :hover {
        background-color: #D9D9D9;
        transition: 0.7s;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 1rem;
        background-color: var(--green);
        border: 5px solid var(--blue-500);
    }

    strong {
        font-family: Inter;
    } 

    p {
        margin-top: 4px;
        font-family: Inter;
    }

    div {
        display: block;
        
    }


`

