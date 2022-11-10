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


    body {
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        background-color: var(--blue-500);
    }
`