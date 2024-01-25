import { useState, useEffect } from 'react';

const API_KEY = 'xujQIcyTD3v4Yq6dioiPS5VuE6uHu3D4';

const useGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

    async function getGif(tag) {
      try {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const response = await fetch(tag ? `${url}&tag=${tag}` : url);
        const data = await response.json();
        setGif(data.data.images.downsized_large.url);
        setLoading(false);
      }
      catch (error) {
        console.error('Error fetching GIF:', error);
      }
    };

    useEffect(() => {
      getGif('bikes');
    }, []);
    

  return {gif, loading, getGif}; 
};

export default useGif;
