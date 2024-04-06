import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios
      .get('/weather-app')
      .then((response) => setBackendData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {typeof backendData.users === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
