import React, { useContext } from 'react';
import { Context } from '../../../Store.js';
import "./Language.css";

function Language() {
  const [state, setState] = useContext(Context);
  const listOfLanguages = ['Javascript', 'Python', 'Go', 'Scala'];

  const languageSelectHandler = (language) => {
    setState({...state, language: language});
  }

  return (
    <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a>{state.language}</a>
            <ul className="nav__submenu">
              {listOfLanguages.map(language => (
                <li className="nav__submenu-item" key={language.length+1}>
                  <a onClick={() => languageSelectHandler(language)}>{language}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
  );
}

export default Language;
