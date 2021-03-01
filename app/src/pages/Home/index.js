import React, { useEffect }  from 'react';
import {Header, Sidebar, TextArea, Botao, Footer} from '../../components';
import { makeStyles, Container } from '@material-ui/core';
import Api from '../../services/Api'
const useStyles = makeStyles({
    root: {
      background: '#fff',
      width:'100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      textAlign: 'center',  
    },
    reader: {
      background: '#f1f2f3'
    }
});
 function Home() {
  const [ histories , setHistory ] = React.useState([]);
  const [Palavrachave, setPalavrachave] = React.useState("");
  const [Categorias, setCategorias] = React.useState("");

 function handleInputChange(e){
  setPalavrachave(e.target.value)
 };
 function handleSelectedChange(e){
  setCategorias(e.target.value)
 };
useEffect(() => {
  Api.get('/random').then( response => {
    const categores = response.data
    setHistory([categores])
  });
},[])
 async  function onClick(e){
  if (Palavrachave !== "" ){
    
    Api.get(`/random?category/${ Palavrachave }`).then( category => {
      const categores = category.data
      setHistory([categores])
      setPalavrachave("")
    })
  }  else if(Categorias !== "") {
    
    Api.get(`/search/${ Categorias }`).then( category => {
     const categores = category.data
     setHistory(categores.result) 
    });
  } else {
    Api.get('/random').then( response => {
      const categores = response.data
      setHistory([categores]) 
    }); 
  } 
 }
 const classes = useStyles();

  return(
    <Container className={ classes.root }>
      <Header />
      <Sidebar
        value={ Palavrachave }
        handleInputChange={ handleInputChange } 
        handleSelectedChange={ handleSelectedChange }
      />
      <Botao
          handleOnclick={onClick}/>
          {histories?.map(item =>(
      <TextArea
          key={item.id}
          history={item}/>
          ))}
      <Footer />
    </Container>
  ) 
}

export default Home;
