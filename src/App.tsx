import React, { useEffect, useState } from 'react';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import './App.css';
import { Layout, Spin } from 'antd';
import { useActions } from './hooks/useAction';
import { IUser } from './models/IUser';

const App: React.FC = () => {
  const { setUser, setIsAuth } = useActions();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    checkIsUserAuth();
  }, []);

  const checkIsUserAuth = () => {
    const auth = localStorage.getItem('auth');

    if (auth) {
      setUser({ username: localStorage.getItem('user') } as IUser);
      setIsAuth(true);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <Spin size='large' />
      ) : (
        <>
          <Navbar />
          <Layout.Content>
            <AppRoutes />
          </Layout.Content>
        </>
      )}
    </Layout>
  );
};

export default App;
