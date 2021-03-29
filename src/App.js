
import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import "./Movie.css";

// className component
class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async() => {
    const {
      data : {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false }); // movies : movies 와 같음  
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="contatiner">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key = {movie.id} // chils의 유일한 key prop(없으면 warning)
                  id = {movie.id} 
                  year = {movie.year} 
                  title = {movie.title} 
                  summary = {movie.summary} 
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
