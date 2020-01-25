import React, { useState , useEffect } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieForm from './Movies/MovieForm';
import AddMovie from './Movies/AddMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [updateMovie, setUpdateMovie] = useState();

  useEffect(() => {
    console.log('effect in app', updateMovie)
  },[updateMovie])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} setUpdateMovie={setUpdateMovie}/>;
        }}
      />
      <Route
        path='/update-movie/:id'
        render={props => {
          return <MovieForm {...props} changeMovie={setUpdateMovie} updateMovie={updateMovie}/>
        }}
      />
      <Route
        path='/add-movie'
        render={props => {
          return <AddMovie {...props} />
        }}
      />
    </>
  );
};

export default App;
