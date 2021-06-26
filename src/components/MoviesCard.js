import React, { useContext } from 'react'
import { GenreContext, MoviesContext } from '../context'
import Chip from '@material-ui/core/Chip';

function MoviesCard() {
    // all this we get them in context
    const {movies} = useContext(MoviesContext)
    const {star} = useContext(MoviesContext)
    const {genre} = useContext(GenreContext)
    const {genres} = useContext(MoviesContext)
    
  return (
    <section className="movies">
        {
            // this if there is a filter by rank filter the movieslist if not go to next step
        }
        { star   ? movies.filter((item)=> item.vote_average >= star).map((e , index) => {

            return (<div className="movie" key={index}>
            <img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path} alt="" className="poster" />
            <div className="title">{e.original_title}</div>
            <div className="info">
              <span className="length">{Math.ceil(e.vote_average)}</span>
              <span className="year">{e.vote_count}</span>
              <span className="year">{e.release_date}</span>
              <div className="chip">
              {
                e.genre_ids.map(el => {
                return   ( genre.filter(l => l.id == el).map(f => {
                
                        return (<Chip
                            size="small"
                            label={f.name}
                            clickable
                            color="primary"
                            />)
                    }
                    )
                        )
                })
            
                }
                </div>
            </div>
            
          </div>)
        }) : //else if there is genres filter if not go to next step
        genres ? movies.map((movie ,index) => {
            return (movie.genre_ids.filter(e => e == genres ).map(el=>{
                
                return(<div className="movie" key={index}>
                <img src={"https://image.tmdb.org/t/p/w500/"+movie.backdrop_path} alt="" className="poster" />
                <div className="title">{movie.original_title}</div>
                <div className="info">
                  <span className="length">{Math.ceil(movie.vote_average)}</span>
                  <span className="year">{movie.vote_count}</span>
                  <span className="year">{movie.release_date}</span>
                
                  <div className="chip">
                  {
                    movie.genre_ids.map(el => {
                    return   ( genre.filter(l => l.id == el).map(f => {
                    
                            return (<Chip
                                size="small"
                                label={f.name}
                                clickable
                                color="primary"
                                />)
                        }
                        )
                            )
                    })

                
                    }
                    </div>
                  
    
                </div>
                
              </div>)
              
            }))
        }) : // this is the final step of the movies card because ther is no star or no genre so show us all the movies list 
        movies?.map((e , index) => {
            return (<div className="movie" key={index}>
            <img src={e.backdrop_path == null ? "https://jollyjohnskodi.b-cdn.net/wp-content/uploads/2020/02/How-to-Install-TheMovieDB-Helper-Kodi.jpg": "https://image.tmdb.org/t/p/w500/"+e.backdrop_path} alt="" className="poster" />
            <div className="title">{e.original_title}</div>
            <div className="info">
              <span className="length">{Math.ceil(e.vote_average)}</span>
              <span className="year">{e.vote_count}</span>
              <span className="year">{e.release_date}</span>
            
              <div className="chip">
              {
                e.genre_ids.map(el => {
                return   ( genre.filter(l => l.id == el).map(f => {
                
                        return (<Chip
                            size="small"
                            label={f.name}
                            clickable
                            color="primary"
                            />)
                    }
                    )
                        )
                })
            
                }
                </div>
              

            </div>
            
          </div>)
        }) 
    }
        
    </section>
  )
}

export default MoviesCard
