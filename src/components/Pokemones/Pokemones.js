import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Pokemones = () => {

    const [poke, setPoke] = useState([]);
    const [poke1, setPoke1] = useState([]);
    const arr = [];

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then((response) => response.json())  
      .then((json) => setPoke(json.results.map((item) => {
          fetch(item.url)
          .then((response)=> response.json())
          .then((poke) => arr.push(poke));
          setPoke1(arr)
      })
        ));
  }, []);

console.log(poke1)

  return ( 
        poke1.map((pokemon) => {                   
          return (
            <div key={pokemon.id} >
              <p>ESTO SERIA UNA CARD</p>
            </div>
          )
        } )
    )
}

export default Pokemones
