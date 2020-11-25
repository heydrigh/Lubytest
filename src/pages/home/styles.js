import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;

  img {
    align-self: center;
  }
`;

export const Form = styled.form`
  margin-top: 48px;
  max-width: 339px;

  display: flex;
  flex-direction: column;
  input {
    height: 56px;
    border-radius: 12px;
    padding-left: 20px;
    color: #535353;
    border: 1px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    background-color: #ffce00;
    color: #030202;
    height: 56px;
    border-radius: 12px;
    margin-top: 19px;
    border: 0;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
