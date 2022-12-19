import React from 'react';
import styled from 'styled-components';

const ButtonBgWhite = ({
  width,
  text,
  func,
  type = 'button',
  border = false,
  icon,
}) => {
  return (
    <Button width={width} border={border} onClick={func}>
      <p>{text}</p>
      {icon && <span>{icon}</span>}
    </Button>
  );
};

export default ButtonBgWhite;

const Button = styled.button`
  width: ${({ width }) => width};
  border: ${({ border }) => (border ? border : 'none')};
  height: 54px;
  background: rgba(255, 255, 255, 0.01);
  border: 1.03958px solid #0077fe;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

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
    color: var(--primaryColor);
  }

  /* svg */

  svg {
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--primaryColor);
    align-self: flex-end;
  }
`;
