import React, { useState, useEffect } from 'react';
import { Gif } from '@giphy/react-components';
import { Input } from 'antd';
import './App.css';

const { Search } = Input;

function App () {
  const [gif, setGif] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const url = 'http://api.giphy.com/v1/gifs/search';
  const key = 'vFRmKw6bhGH6cEgJlHd9wblD1XT36IF7';

  useEffect(() => {
    setLoading(true);
    fetch(url + `?q=${query}&api_key=${key}&limit=1`)
      .then(response => response.json())
      .then((result) => {
        setGif(result);
        setLoading(false);
        console.log('result', result);
      },
      (error) => {
        console.log(error);
      })
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div className="App">
      <Search
        placeholder="Search"
        loading={loading}
        enterButton
        onSearch={value => setQuery(value)} />
      
      { gif && 
        gif.data.map(g => {
          return <Gif gif={g} width={200} />
        })
      }
    </div>
  );
}

export default App;
