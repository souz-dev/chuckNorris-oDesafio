import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  btn: {
    
    margin: '0.6rem 0',
  }

 })

 function BtnSearch({handleOnclick}) {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.btn}  color='primary' disableElevation  onClick={handleOnclick}>
      Buscar
    </Button>
  );
}

export default BtnSearch;
