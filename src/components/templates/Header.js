import React, { useState, useEffect, useContext } from 'react';
import Star from '../elements/Star/Star';
import Logo from '../elements/Logo/Logo';
import Language from '../elements/Language/Language';
import { Context } from '../../Store.js';
import './Header.css'

function Header() {
  const [state, setState] = useContext(Context);
  const [clickStar, setClickStar] = useState(0);

  const StarClickHandler = () => {
    clickStar === 0 ? setClickStar(1) : setClickStar(0);
  }

  useEffect(() => {
    if(clickStar){
      setState({...state, view: 'starred'});
    } else{
      setState({...state, view: null});
    }
  },[clickStar, setState]);

  return (
      <header className='header'>
        <nav className='header-nav grow'>
          <Logo />
          <div className='header-right'>
            <Star width={35} height={35} starclick={StarClickHandler} color = {clickStar ? 'color' : null}/>
            <Language />
          </div>

        </nav>
      </header>
  );
}

export default Header;
