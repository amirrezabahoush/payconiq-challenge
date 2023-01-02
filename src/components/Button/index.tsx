import React from 'react';
import StyledButton from './Button.styled';

const Button = React.memo<React.HTMLProps<HTMLButtonElement>>(props => {
  return (
    // @ts-ignore
    <StyledButton  {...props}>
      {props.children}
    </StyledButton>
  )
});

Button.displayName = 'ButtonComponent';

export default Button;