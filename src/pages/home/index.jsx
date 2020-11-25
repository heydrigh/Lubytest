import React, { useCallback, useEffect, useState } from 'react';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { Container, Form, Error } from './styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/github.svg';
import api from '../../services/api';

function Home() {
  const history = useHistory();
  const [login, setLogin] = useState();
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState(() => {
    const logedUser = localStorage.getItem('@Github:users');
    if (logedUser) {
      return JSON.parse(logedUser);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Github:users', JSON.stringify(users));
  }, [users]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!login) {
      setInputError('Digite o nome do usuário.');
      return;
    }
    try {
      const response = await api.get(`users/${login}`);

      const user = response.data;

      setUsers([...users, user]);
      setLogin('');
      history.push('/dashboard');
    } catch (err) {
      setInputError('Erro na busca por este usuário');
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" style={{ height: 96, width: 98 }} />
      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          value={login}
          onChange={e => setLogin(e.target.value)}
        ></input>
        {inputError && <Error>{inputError}</Error>}
        <button type="submit">
          Entrar <AiOutlineArrowRight size={18} />
        </button>
      </Form>
    </Container>
  );
}

export default Home;
