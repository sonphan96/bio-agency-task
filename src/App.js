import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import ShortenURLs from './components/ShortenURLs/ShortenURLs';
import { UrlContext } from './context/UrlContext';

const App = () => {
  const [shortenUrls, setShortenUrls] = useState([]);
  const [url, setUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('newShortenUrls');

    JSON.parse(retrievedObject);
    if(retrievedObject){
      setShortenUrls(JSON.parse(retrievedObject));
    }
  }, [])
 
  const onSubmit = async (text) => {
    setIsSuccess(false);
    const {data} = await axios.get('https://api.shrtco.de/v2/shorten', {
      params: {
        url: text
      }
    });



    if(data.result.short_link) {
      const obj = {
        url: text,
        shortenUrl : data.result.short_link
      };

      const newShortenUrls = [...shortenUrls, obj];
      setShortenUrls(newShortenUrls);
  
      localStorage.setItem('newShortenUrls', JSON.stringify(newShortenUrls));
      setUrl('');
      setIsSuccess(true);
    }

  }


  return(
    <div className='ui container' style={{ marginTop: '10px'}}>
      <UrlContext.Provider value={{ url, setUrl }}>
        <SearchBar onSubmit={onSubmit} setIsSuccess={setIsSuccess} />
        {shortenUrls && <ShortenURLs shortenUrls={shortenUrls} isSuccess={isSuccess} /> }
      </UrlContext.Provider>

    </div>
  );
}

export default App;