"use client";

import useUser from '../lib/useUser';   

const Dashboard = () => {
  const { user } = useUser({ redirectTo: '/api/login' });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <a href="/api/logout">Logout</a>
    </div>
  );
};

export default Dashboard;
