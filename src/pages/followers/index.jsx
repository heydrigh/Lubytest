import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import api from '../../services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Follower, Header, FollowersContainer } from './styles';

function Followers() {
  const { data } = useAuth();
  const [followers, setFollowers] = useState([]);

  const logedUser = data.user[0];

  useEffect(() => {
    api.get(`/users/${logedUser.login}/followers`).then(response => {
      setFollowers(response.data);
      console.log(response.data);
    });
  }, [logedUser.login]);

  return (
    <Container>
      <Header>
        <Link to={'/dashboard'}>
          <AiOutlineArrowLeft size={18} />
        </Link>
        <span>{logedUser.followers} Seguidores </span>
      </Header>
      <FollowersContainer>
        {followers.map(follower => (
          <Follower key={follower.id}>
            <img src={follower.avatar_url} alt="avatar" />
            <h4>{follower.login}</h4>
            <Link to={`details/${follower.login}`}>
              <FiArrowRight size={16} />
            </Link>
          </Follower>
        ))}
      </FollowersContainer>
    </Container>
  );
}

export default Followers;
