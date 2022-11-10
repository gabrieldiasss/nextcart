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
    }


    body {
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        background-color: var(--blue-500);
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: var(--link);
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
    
    li {
        list-style: none;
    }
    a:hover {
        text-decoration: underline;
    }
    body, strong, p, span {
        font-family: 'Roboto', sans-serif;
    }
    button, input, select {
        font-family: 'Poppins', sans-serif;
        border: 0;
        border-radius: 7px;
    }
    button {
        background: var(--blue);
        cursor: pointer;
        font-weight: 600;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.20);
    }
    .warning {
        font-size: 1.4rem;
        color: var(--username);
        font-family: 'Poppins', sans-serif;
        
    }
`