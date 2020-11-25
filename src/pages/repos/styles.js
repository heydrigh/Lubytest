import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
`;

export const Repository = styled.div`
  margin-top: 70px;
  height: 115px;
  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 9px;
  }
  p {
    font-size: 15px;
    font-weight: lighter;
    margin-bottom: 13px;
  }
  span {
    font-size: 15px;
    font-weight: lighter;
  }

  hr {
    margin-top: 39px;
  }
`;

export const Header = styled.header`
  height: 68px;
  left: 0;
  width: 100vw;
  position: absolute;
  background: #1f1f1f;
  align-content: center;
  text-align: center;
  padding-top: 27px;
  padding-bottom: 20px;
  span {
    font-size: 17px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin-right: 10%;
  }
`;

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
