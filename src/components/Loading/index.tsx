import React from 'react';
import LoadingWrapper from './Loading.styled';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <LoadingWrapper data-testid='loading'>
      <CircularProgress />
    </LoadingWrapper>
  );
};

export default Loading;