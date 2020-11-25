import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
`;

export const Followed = styled.div`
  :first-child {
    margin-top: 70px;
  }
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 115px;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  border-bottom: 1px solid;
  h4 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 9px;
  }
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
  a {
    text-decoration: none;
    color: #fff;
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
    margin-right: 20px;
  }
`;

export const FollowingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
