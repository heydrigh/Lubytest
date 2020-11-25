import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;

  img {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    margin-left: 25%;
    margin-bottom: 45px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const Header = styled.header`
  align-items: center;
  justify-content: center;
  a {
    position: absolute;
    padding-top: 30px;
  }

  button {
    border: 0;
    background: none;
    color: #ffffff;
    margin-top: 28px;
    float: right;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  h2 {
    font-size: 26px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  background: #5252525d;
  height: 96px;
  align-items: center;
  align-content: space-between;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 53px;
  h4 {
    font-size: 40px;
    font-weight: bold;
  }
  span {
    font-size: 17px;
  }
`;

export const Followers = styled.div`
  margin-left: 16px;
`;

export const Following = styled.div`
  margin-left: 47px;
`;

export const Repos = styled.div`
  margin-left: 49px;
`;

export const Bio = styled.div`
  h4 {
    font-size: 26px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    font-weight: lighter;
  }
`;
