import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #fff;

    .image {
        width: 300px;
        height: 60px;

        @media(max-width: 500px) {
            width: 200px;
            height: 50px;
        }
    }

    div {
        display: flex;
        justify-content: center;
        padding: 1.438rem 0 1.688rem 0;

        img {
            cursor: pointer;
        }
    }
`