import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#009688',
    accent: '#94c720',
    warn: '#c70d38',
    text: {
      default: '#404040',
      tableHeader: '#8d8d8d'
    }
  },
  fontSize: {
    pageTitle: '48px',
    sectionTitle: '24px',
    body: '16px'
  },
  card: {
    boxShadow: '0 0 0.5px 0.5px rgba(213, 215, 225, 0.5)',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  border: {
    radius: '3px'
  },
  antIcon: {
    color: '#CBD4E1'
  }
};
export default theme;
