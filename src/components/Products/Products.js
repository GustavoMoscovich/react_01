import React, {useState, useEffect} from 'react';
import "./Products.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { shadows } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  alignContent: 'center',
  color: theme.palette.text.secondary,
}));

const cardStyle = {
  display: 'block',
  height: '450px'
}

const Products = () => {

    const [prod, setProd] = useState([]);
    
    useEffect(() => {
      fetch('https://641f0c51f228f1a83eaf6212.mockapi.io/mi-ecommerce/v1/articles')
      .then((response) => response.json())  
      .then((json) => setProd(json));
  }, []);

  return ( 
        prod.map((prodItem) => { 
          
          return (
            <Grid xs={3} sm={4} md={4} key={prodItem.id}>
              <Item>
                <div  >
                  <Card sx={{ maxWidth: 345, boxShadow: 10 }} style={cardStyle}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={prodItem.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {prodItem.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {prodItem.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Item>
            </Grid>
          )
        } )
    )
}

export default Products
