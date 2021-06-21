import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Context = React.createContext(null);

export const Store = ({children}) => {
  const [state, setState] = useState([]);
  const linkToLastWeek = "https://api.github.com/search/repositories?q=created:%3E2021-06-13&sort=stars&order=desc";
  const linkToReposByLang = (lang) => `https://api.github.com/legacy/repos/search/language=${lang}`

  useEffect(() => {
    axios
      .get(linkToLastWeek)
      .then((response) => {
        setState({
          items: response.data.items,
          fav: [],
          view: null,
          language: 'Select language'
        });
      })
      .catch((error) => {
        alert('Something went wrong!')
      });
  }, []);

  useEffect(() => {
    if(state.language && state.language !== 'Select language'){
      axios.get(linkToReposByLang(state.language)).then((response) => {
        setState({
          items: response.data.repositories.map( el => ({
            name: el.name,
            description:el.description,
            html_url: el.url,
            stargazers_count: Math.round(el.score),
            id: Math.random() * 2.5
          })),
          fav: [],
          view: null,
          language: state.language
        });
      })
      .catch((error) => {
        alert('Something went wrong!')
      });
    }
  },[state.language])

  return (
    <Context.Provider value={[state, setState]}>
      { children }
    </Context.Provider>
  );
};

export default Store;
