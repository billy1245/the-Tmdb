import './App.css';
import {gsap ,Power1} from 'gsap'
import { useEffect, useState , useContext} from 'react';
import Header from './components/Header';
import MoviesCard from './components/MoviesCard';
import {MoviesContext , GenreContext} from './context/index'
import Filter from './components/Filter';
import Pagination from "react-js-pagination";

function App() {
  // seter for movies list (used in fetch)
  const [movies , setMovies] = useState([])
  // seter for filter by rank 
  const [star, setStar] = useState(null);
    // seter for filter by gender
  const [genres, setGenres] = useState(null);
  // seter for pagination 
  const [page, setPage] = useState(1);
  // seter for pagination result
  const [totalResult , setTotalResult] = useState('')
  //seter to get all the gender (used in fetch)
  const [genre, setGenre] = useState([])

  useEffect(() => {
    // fetch the movies list and total Result (we need theme to pagination)
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d68689ce6bbf5998e4a2c4c0e8e0dfcc&page='+page).then(results => results.json()).then(results =>{
      setMovies(results.results) 
      setTotalResult(results.total_results)

  }  )
  // fetch the genres lists
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d68689ce6bbf5998e4a2c4c0e8e0dfcc&language=en-US').then(results => results.json()).then(results =>{
    setGenre(results.genres) 
    console.log(results.genres)

  }  )

  
  },[])
// function to get the current page and fetch the page then set the new movies lists in (setMovies) 
// set the number of the current page in setPage
const handlePageChange = (e)=>{
setPage(e)
fetch('https://api.themoviedb.org/3/discover/movie?api_key=d68689ce6bbf5998e4a2c4c0e8e0dfcc&page='+e).then(results => results.json()).then(results =>{
      setMovies(results.results) } )
  }

  return (
    <div className="App">
      <div class="app">
        <MoviesContext.Provider value={{movies , setMovies , star , setStar , genres, setGenres}}>
        <Header  />
        <GenreContext.Provider value={{genre , setGenre}}>
        <Filter />
        <MoviesCard />
        {//pagination lib  
        //activePage is  page number is active now its change whene we change the page thats why we used state (setPage)
        // totalItemsCount we alrady fetched it and  use the result in state (setTotalResult)
        // onchange we called a function
        }

        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={totalResult}
          pageRangeDisplayed={10}
          onChange={(e)=>handlePageChange(e)}
        />
        </GenreContext.Provider>
        </MoviesContext.Provider>
      </div>
    </div>

  );
}

export default App;
