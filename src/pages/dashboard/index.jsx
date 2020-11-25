import React from 'react';
import { useAuth } from '../../context/auth';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  InfoContainer,
  NumbersContainer,
  Followers,
  Following,
  Repos,
  Bio,
} from './styles';

function Dashboard() {
  const { data, signOut } = useAuth();

  const logedUser = data.user[0];
  return (
    <Container>
      <button onClick={signOut}>
        Sair <FiLogOut size={16} color={'#D03434'} />
      </button>
      <InfoContainer>
        <img src={logedUser.avatar_url} alt="Avatar" />
        <h2>{logedUser.name}</h2>
        <span>{logedUser.email}</span>
        <span>{logedUser.location}</span>
      </InfoContainer>
      <NumbersContainer>
        <Followers>
          <Link to={'/followers'}>
            <h4>{logedUser.followers}</h4>
            <span>Seguidores</span>
          </Link>
        </Followers>
        <Following>
          <Link to={'/following'}>
            <h4>{logedUser.following}</h4>
            <span>Seguindo</span>
          </Link>
        </Following>
        <Repos>
          <Link to={'/repos'}>
            <h4>{logedUser.public_repos}</h4>
            <span>repos</span>
          </Link>
        </Repos>
      </NumbersContainer>
      <Bio>
        <h4>Bio</h4>
        <p>{logedUser.bio}</p>
      </Bio>
    </Container>
  );
}

export default Dashboard;
