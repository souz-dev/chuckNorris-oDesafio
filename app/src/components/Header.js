import React from 'react';
import Chuck from '../assets/chuckHeader.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    padding:'16px',
  },
  h1:{
    padding:'0px',
    margin: '0px',
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
  p:{
  padding: '0px',
  margin: '0',
  fontSize: '1.4rem',
  textTransform: 'uppercase',
  }
});
function Header(){
  const classes = useStyles();
    return(
      <nav  className={classes.header}>
        
          <img  src={Chuck} width="200px" margin-bottom="" alt="Chuck-Invible"/>
          
          <div > 
          <h1 className={classes.h1}>Chuck Norris</h1>
          <p className={classes.p}>Uma lenda, varias histórias!</p>
          </div>
      </nav>
    );
}
export default Header;
