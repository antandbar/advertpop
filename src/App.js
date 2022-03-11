import { useState } from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';


function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };


  return (
    <div className="App">
      {isLogged ? (
        <h1>Hola</h1>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
