import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import { AiFillLock, AiFillUnlock, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Container, Repository, Header, RepositoriesContainer } from './styles';

function Repos() {
  const { data } = useAuth();
  const [repositories, setRepositories] = useState([]);

  const logedUser = data.user[0];

  useEffect(() => {
    api.get(`/users/${logedUser.login}/repos`).then(response => {
      setRepositories(response.data);
      console.log(response.data);
    });
  }, [logedUser.login]);

  return (
    <Container>
      <Header>
        <Link to={'/dashboard'}>
          <AiOutlineArrowLeft size={18} />
        </Link>
        <span>{logedUser.public_repos} Repositórios </span>
      </Header>
      <RepositoriesContainer>
        {repositories.map(repository => (
          <Repository key={repository.id}>
            <h4>{repository.name}</h4>
            <p>{repository.description}</p>
            <span>
              <BsStar size={16} color={'#FFCE00'} />
              {repository.stargazers_count} stars{' '}
              <AiFillLock
                size={16}
                color={'#CC042A'}
                style={{ float: 'right' }}
              />
              <AiFillUnlock
                size={16}
                color={'#63BF1F'}
                style={{ float: 'right' }}
              />
            </span>
            <hr />
          </Repository>
        ))}
      </RepositoriesContainer>
    </Container>
  );
}

export default Repos;
