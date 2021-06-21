import React, { useState, useEffect, useContext } from 'react';
import Star from '../elements/Star/Star';
import { Context } from '../../Store.js';

import './Card.css';

function Card({id, name, description, numberOfStars, link}) {
  const [state, setState] = useContext(Context);
  const [updatedNumberOfStars, setUpdatedNumberOfStars] = useState(numberOfStars);
  const [clickStar, setClickStar] = useState(0);
  const [updateDescription, setUpdateDescription] = useState(description);

  const containJapanese = (string) => string.match(/[\u3400-\u9FBF]/);

  const StarClickHandlerOnCard = () => {

    clickStar === 0 ? setClickStar(1) : setClickStar(0);

    let output = AddOrDeleteId(state.fav.map(el => el.id), id);
    setState({
      ...state,
      fav: state.items.filter(value => output.includes(value.id))
    });
  }

  const AddOrDeleteId = (arr, id) => {
    if(arr.includes(id)){
      arr = arr.filter(inp => inp !== id);
    } else {
      arr.push(id);
    }
    return arr;
  }

  useEffect(() => {
    const updatedNumber = numberOfStars +1;
    if(clickStar === 1){
      setUpdatedNumberOfStars(updatedNumber);
    } else {
      setUpdatedNumberOfStars(numberOfStars);
    }
  },[clickStar, numberOfStars]);

  useEffect(() => {
    if(description && description.length > 80 && containJapanese(description))
      setUpdateDescription(`${description.substring(0,28)}...`);
    if(description && description.length > 80 && !containJapanese(description))
      setUpdateDescription(`${description.substring(0,80)}...`);
    if(!description || description === '')
      setUpdateDescription("This repository doesn't contain any description")
  },[description]);

  return (
    <div className='card'>
      <div className='card-text'>
        <div className='card-name'>Name: { name.length > 20 ? `${name.substring(0,20)}...` : name}</div>
        <div className='card-info'>
        <div className='card-decsription'>{updateDescription}</div>
        <div className='star'>
          <Star width={25} height={25} starclick={StarClickHandlerOnCard} color = {clickStar ? 'color' : null}/>
          <span className='star-number'>
            {updatedNumberOfStars}
          </span>
        </div>
        </div>
        <div className='card-link'>
          <a href={link} target="_blank" rel="noreferrer">Visit it</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
