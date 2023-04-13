import React from 'react';
import { StyledButton, StyledDiv } from './Button.styled';

export default function Button({ color }) {
  return (
    <div>
      <StyledButton onClick={() => console.log('hello')}>Hello</StyledButton>
      <StyledDiv color={color}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias dolore quas sed
          aspernatur, beatae veritatis nobis rem earum voluptatum! Possimus labore asperiores dicta
          voluptatibus eaque facilis iure eius sapiente.
        </p>
      </StyledDiv>
    </div>
  );
}
