import React, { useContext, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { fade, InputBase, makeStyles } from '@material-ui/core';
import { MoviesContext } from '../context';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
export default function Header() {
    const classes = useStyles();
    const [input ,setInput] = useState(null);
    const {setMovies} = useContext(MoviesContext)
    
    const handelSearch = (e) =>{
        e.preventDefault();
        fetch("https://api.themoviedb.org/3/search/movie?api_key=d68689ce6bbf5998e4a2c4c0e8e0dfcc&query="+input).then(results => results.json()).then(results =>{
            setMovies(results.results)
        })
    } 
  return (
    <div>
        <header>
        <h1>Tm<strong>DB</strong></h1>
        <nav></nav>
        <form >
        <div className={classes.search} on>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              on
              onChange={(e)=> setInput(e.target.value)}
            />
            <button onClick={(e)=>handelSearch(e) } hidden></button>
          </div>
          </form>
        </header>
    </div>
  )
}
