import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: red;
  color: yellow;
`;

export const StyledDiv = styled.div`
  background-color: blue;

  p {
    color: ${(props) => (props.color ? props.color : 'white')};
  }

  &:hover {
    background-color: green;
  }
`;
