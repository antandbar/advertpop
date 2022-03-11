import { useState } from 'react';
import LoginPage from './components/auth/LoginPage/LoginPage';


function App() {
  const [isLogged, setIsLogged] = useState(false);

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
