import { createGlobalStyle } from 'styled-components';
import { cssResets, globals } from './General';

const GlobalStyle = createGlobalStyle`
  ${cssResets}
  ${globals}
`;

export default GlobalStyle;
