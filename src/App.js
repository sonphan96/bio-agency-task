import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import ShortenURLs from './components/ShortenURLs/ShortenURLs';

const App = () => {
  const [shortenUrls, setShortenUrls] = useState([]);

  useEffect(() => {
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('newShortenUrls');

    JSON.parse(retrievedObject);
    console.log(JSON.parse(retrievedObject));
    if(retrievedObject){
      setShortenUrls(JSON.parse(retrievedObject));
    }
  }, [])
 
  const onSubmit = async (text) => {
    const {data} = await axios.get('https://api.shrtco.de/v2/shorten', {
      params: {
        url: text
      }
    });

    const obj = {
      url: [text],
      shortenUrl : data.result.short_link
    }

    const newShortenUrls = [...shortenUrls, obj]
    setShortenUrls(newShortenUrls);

    localStorage.setItem('newShortenUrls', JSON.stringify(newShortenUrls));


  }

  return(
    <div className='ui container' style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={onSubmit} />
      <ShortenURLs shortenUrls={shortenUrls}/>
    </div>
  );
}

export default App;