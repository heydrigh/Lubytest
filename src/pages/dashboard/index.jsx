import React from 'react';
import { useAuth } from '../../context/auth';

// import { Container } from './styles';

function Dashboard() {
  const { data } = useAuth();

  console.log(data.user);
  return <h1>Dashboard</h1>;
}

export default Dashboard;
