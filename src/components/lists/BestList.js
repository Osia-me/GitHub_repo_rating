import React, { useContext } from 'react';
import Card from '../card/Card';
import { Context } from '../../Store.js';
import './BestList.css';

function BestList() {
  const [state, setState] = useContext(Context);
  const arrayOfItems = state.items;
  const favList = state.fav;

  if(!state.view){
    return (
      <div className="list">
        {arrayOfItems ? arrayOfItems.map((repo) =>
          <Card
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            numberOfStars={repo.stargazers_count}
            link={repo.html_url} />
          ) : null}
      </div>
    );
  } else {
    return (
      <div className="list">
        {favList ? favList.map((repo) =>
          <Card
            key={`${repo.id}`}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            numberOfStars={repo.stargazers_count}
            link={repo.html_url} />
          ) : null}
      </div>
    );
  }
}

export default BestList;
