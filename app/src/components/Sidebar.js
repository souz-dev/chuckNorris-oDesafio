import React, { useEffect} from 'react';
import Api from '../services/Api';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width:'100% !important' ,
    maxWidth:'800px !important',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    background:'#ffe0b2',
    padding:'1.2rem',
    borderRadius: '1.3rem',
    boxShadow: '4px 4px 4px rgba(0,0,0,.5)'

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 800, 
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({handleInputChange, handleSelectedChange, value}) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");
  const [ categorias, setCategorias] = React.useState([]);
  
  const onchange = (e) => {
    setPersonName(e.target.value)
    handleSelectedChange(e) 
  }
  useEffect(() => {
    Api.get('/categories').then( categorias =>{
      setCategorias(categorias.data)
    });
  }, [])
  return (
    
    
      <div  className={classes.form}>
       <TextField
          value={value}
          onChange={handleInputChange}
          id="standard-textarea"
          label="Busque uma Historia!"
          placeholder="Placeholder"
          multiline
        />
      <FormControl className={classes.formControl} >
        <InputLabel id="demo-mutiple-name-label">Categorias</InputLabel>
        <Select
          
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={personName}
          onChange={onchange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {categorias.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    
  );
}
