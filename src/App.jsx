import './App.css';
import Auth from './components/auth/Auth';
import { useState } from 'react'

function App() {

  const [ sessionToken, setSessionToken ] = useState('Sample Token');
  // console.log(sessionToken)

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
  }

  return (
    <div className="App">
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
