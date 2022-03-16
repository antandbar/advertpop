import { useState } from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';
import { AuthContextProvider } from './components/auth/context';


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
      {isLogged ? (
        <h1>Hola</h1>
      ) : (
        <LoginPage/>
      )}
      </AuthContextProvider>
    </div>
  );
}

export default App;
