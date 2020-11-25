import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import api from '../../services/api';

import {
  Container,
  InfoContainer,
  NumbersContainer,
  Followers,
  Following,
  Repos,
  Bio,
  Header,
} from './styles';

function Details() {
  const [user, setUser] = useState(null);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/users/${params.username}`).then(response => {
      setUser(response.data);
    });
  }, [params.username]);

  return (
    <Container>
      {user && (
        <>
          <Header>
            <Link to={'/dashboard'} id="link">
              <AiOutlineArrowLeft size={18} />
            </Link>
            <button onClick={console.log('teste')}>
              Salvar <FiLogOut size={16} color={'#5CBC29'} />
            </button>
          </Header>

          <InfoContainer>
            <img src={user.avatar_url} alt="Avatar" />
            <h2>{user.name}</h2>
            <span>{user.email}</span>
            <span>{user.location}</span>
          </InfoContainer>
          <NumbersContainer>
            <Followers>
              <Link to={'/followers'}>
                <h4>{user.followers}</h4>
                <span>Seguidores</span>
              </Link>
            </Followers>
            <Following>
              <Link to={'/following'}>
                <h4>{user.following}</h4>
                <span>Seguindo</span>
              </Link>
            </Following>
            <Repos>
              <Link to={'/repos'}>
                <h4>{user.public_repos}</h4>
                <span>repos</span>
              </Link>
            </Repos>
          </NumbersContainer>
          <Bio>
            <h4>Bio</h4>
            <p>{user.bio}</p>
          </Bio>
        </>
      )}
    </Container>
  );
}

export default Details;
