import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Followed, Header, FollowingContainer } from './styles';

function Following() {
  const { data } = useAuth();
  const [following, setFollowing] = useState([]);

  const logedUser = data.user[0];

  useEffect(() => {
    api.get(`/users/${logedUser.login}/following`).then(response => {
      setFollowing(response.data);
      console.log(response.data);
    });
  }, [logedUser.login]);

  return (
    <Container>
      <Header>
        <Link to={'/dashboard'}>
          <AiOutlineArrowLeft size={18} />
        </Link>
        <span>Seguindo {logedUser.following}</span>
      </Header>
      <FollowingContainer>
        {following.map(followed => (
          <Followed key={followed.id}>
            <img src={followed.avatar_url} alt="avatar" />
            <h4>{followed.login}</h4>
            <Link to={`details/${followed.login}`}>
              <FiArrowRight size={16} />
            </Link>
          </Followed>
        ))}
      </FollowingContainer>
    </Container>
  );
}

export default Following;
