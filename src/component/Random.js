import React from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
import './Random.css'

const Random = () => {

    const {gif, loading, getGif} = useGif('');

    function clickHandler() {
        getGif();
    };

  return (
    <div className='random-container'>
        <div className='random-heading'>
            <h3>Random Gifs</h3>
        </div>
        <div className='random-spin'>
            {
                loading ? (<Spinner/>) : (<img src= {gif} />)
            }
        </div>
        <div className='random-button'>
            <button onClick={clickHandler}>Generate</button>
        </div>
    </div>
  );
}

export default Random;

