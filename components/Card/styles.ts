import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-top: 1rem;

    display: flex;
    align-items: center;

    gap: 20px;
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
    cursor: pointer;

    :hover {
        background-color: #D9D9D9;
        transition: 0.7s;
    }

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

export const InfosAdd = styled.div`
    background-color: #fff;
    border-radius: 5px;
    transition: 0.5s;
    padding: 0 0 0 0;

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