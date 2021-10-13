import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CardList from './component/List'

function App() {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://random-data-api.com/api/users/random_user?size=10");
      if (res && res.data) {
        setData(res.data)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <CardList data={data} />
    </div>
  );
}

export default App;
