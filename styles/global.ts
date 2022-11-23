import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --blue-500: #2F3A58;
        --white: #fff;
        --green: #50E485;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        background-color: var(--blue-500);
    }
`