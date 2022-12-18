import React from 'react';
import styled from 'styled-components';

const ButtonBlueBg = ({
  width,
  text,
  func,
  type = 'button',
  border = false,
  icon,
}) => {
  return (
    <Button width={width} border={border}>
      <p>{text}</p>
      {icon && <span>{icon}</span>}
    </Button>
  );
};

export default ButtonBlueBg;

const Button = styled.button`
  width: ${({ width }) => width};
  border: ${({ border }) => (border ? border : 'none')};
  height: 54px;
  background-color: var(--primaryColor);
  border-radius: 10px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  /* Text */
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 18px;
    letter-spacing: -0.02em;
  }

  /* svg */

  svg {
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;
