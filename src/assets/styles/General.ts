import { css } from "styled-components";

export const cssResets = css`
  //css resets
  html {
    min-height: 100%;
    body {
      margin: 0;
      padding: 0;
      position: relative;
      min-height: 100%;
      overflow-x: hidden;
      font-size: 16px;
      background-color: #f5f5f5;
      * {
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  em,
  strong,
  i,
  address,
  b {
    margin: 0;
    font-style: normal;
  }

  p {
    margin: 0;
  }

  a,
  a:hover {
    text-decoration: none !important;
  }

  dl,
  ol,
  ul {
    list-style: none;
    margin: 0;
  }

  a,
  i {
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
`;

export const globals = css`
  .p-2 {
    padding: 16px;
  }

  .mb-1 {
    margin-bottom: 8px;
  }

  .d-flex {
    display: flex !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #d5d5d5;
    width: 100%;
  }
  
`;

