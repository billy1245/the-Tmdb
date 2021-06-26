import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { GenreContext, MoviesContext } from '../context';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {


const {setStar} = useContext(MoviesContext);
const {star} = useContext(MoviesContext);
const {genres} = useContext(MoviesContext);
const {setGenres} = useContext(MoviesContext);
const {setGenre} = useContext(GenreContext);
const {genre} = useContext(GenreContext)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  
  const handleChange = (event) => {
    if(star == ""){
        setStar(null);  
    }
    setStar(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const handleChanges = (event) => {
   setGenres(event.target.value)
  };

  const handleCloses = () => {
    setOpens(false);
  };

  const handleOpens = () => {
    setOpens(true);
  };


  return (
    <div className="filter">
      <Button className={classes.button} onClick={handleOpen}>
        Filter By rating       
        </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Rating</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={star}
          onChange={handleChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
              new Array(10).fill(0).map((e,i) => <MenuItem value={i}>{i}</MenuItem>)
          }


        </Select>
        
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Genre</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={opens}
          onClose={handleCloses}
          onOpen={handleOpens}
          value={genres}
          onChange={handleChanges}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
              genre.map((e,i) => <MenuItem key={i}  value={e.id}>{e.name}</MenuItem>)
          }


        </Select>
        
      </FormControl>
    </div>
  );
}
