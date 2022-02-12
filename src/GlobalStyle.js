import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #141617;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  gap: ${(props) => props.gap || "0px"};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  grid-gap: ${(props) => props.gap || "0px"};
  grid-auto-flow: ${(props) => props.flow || "row"};
  grid-auto-columns: ${(props) => props.columns};
  grid-auto-rows: ${(props) => props.rows};
`;
