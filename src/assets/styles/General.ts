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
  .p-1 {
    padding: 8px;
  }

  .pt-1 {
    padding-top: 8px;
  }

  .pb-1 {
    padding-bottom: 8px;
  }

  .py-1 {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .p-2 {
    padding: 16px;
  }
  .m-1 {
    margin: 4px;
  }
  .my-1 {
    margin-bottom: 8px !important;
    margin-top: 8px !important;
  }

  .mt-1 {
    margin-top: 8px;
  }

  .mb-1 {
    margin-bottom: 8px;
  }

  .w-25 {
    width: 25%;
  }

  .d-block {
    display: block;
  }

  .d-flex {
    display: flex !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .flex-direction-column {
    flex-direction: column !important;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }
`;
