import React, { useState, useEffect } from 'react';
import { Gif } from '@giphy/react-components';
import { Input, Typography } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import './App.css';

const { Title } = Typography;
const { Search } = Input;

const style= {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '50px'
}

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
      <Title style={{color: '#1890FF', textAlign: 'center'}}>GIPHY Search!</Title>
      <Search
        placeholder="Search"
        loading={loading}
        enterButton
        onSearch={value => setQuery(value)} />

      <div style={style}>
        {query ? 
          gif.data.map(g => {
            return <div ><Gif gif={g} width={200}/></div>
          }) : 
          <SmileTwoTone />
        }
      </div>
    </div>
  );
}

export default App;
