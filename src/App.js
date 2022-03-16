import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage/LoginPage';
import { AuthContextProvider } from './components/auth/context';
import Layout from './components/layout/Layout';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/adverts" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
