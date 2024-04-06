import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    axios
      .get('/weather')
      .then((response) => setBackendData(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {backendData ? <p>{console.log(backendData)} </p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
