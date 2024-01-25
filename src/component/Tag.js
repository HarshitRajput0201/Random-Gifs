import React from 'react';
import useGif from '../hooks/useGif';
import { useState } from 'react';
import Spinner from './Spinner';
import './Tag.css'


const Tag = () => {

    const [tag, setTag] = useState('Bikes');
    const {gif,loading, getGif} = useGif(tag);

    function clickHandler() {
        getGif();
    };

    function changeHandler(event) {
        setTag(event.target.value);
    };

  return (
    <div className='tag-container'>
        <div className='tag-heading'>
            <h3>Random {tag} Gifs</h3>
        </div>
        <div className='tag-spin'>
            {
                loading ? (<Spinner />) : (<img src= {gif} />)
            }
        </div>
        <div className='tag-input'>
            <input type="text" onchange={changeHandler} placeholder='Type Here'></input>
        </div>
        <div className='tag-button'>
            <button onClick={clickHandler}>Generate</button>
        </div>
    </div>
  );
}

export default Tag;

