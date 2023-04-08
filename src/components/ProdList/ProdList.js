
import Products from "../Products/Products";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ProdList = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Products brand={ props.brand === undefined? "*" :  props.brand}  />
    </Grid>
  </Box>
);

};

export default ProdList;
