import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import listProduct from './listProducts.json';
import Slipper from '../images/slipper.png';
import colorCode from '../images/colorcode.png';
import { IoEllipseSharp } from 'react-icons/io5';
import Chip from '@mui/material/Chip';

export const Product = () => {
  return (
    <>
      <Grid container spacing={2} padding={2}>
        {listProduct.map((el, index) => (
          <Grid item md={3} xs={3}>
            {console.log(el.product_size)}
            <Card sx={{ maxWidth: 345 }} style={{borderBlockColor:'#C0C0C0'}}>
              <CardActionArea>
                <img src={Slipper} alt='l' width='250' height='250' />
                <CardContent>
                  <IoEllipseSharp
                    style={{ color: `${el.product_color_code}` }}
                  />
                  {el.is_active === '0' ? (
                    <div style={{ padding: 8 }}>
                      {' '}
                      <Chip label='Out of Stock' style={{ color: '#A52A2A' }} />
                    </div>
                  ) : (
                    ''
                  )}
                  {/* <img src={colorCode} alt='l' width='30' height='30' style={{color:`${el.product_color_code}`}} /> */}
                  <Typography gutterBottom variant='h5' component='div'>
                    {el.product_brand_name} {el.product_name}{' '}
                    {el.product_category_name} {el.product_model_name}
                  </Typography>

                  <Typography variant='h6' style={{ color: '#008000' }}>
                    Rs. {el.product_price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
