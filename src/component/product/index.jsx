import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import faq from './faqCategory.json';
import Button from '@mui/material/Button';
import listCategory from './listCategory.json';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import { Product } from './Product';
import Accordion from './Accordian';
export const ProductIndex = () => {
  console.log(faq, 'hghnh');

  const [posts, setPosts] = useState([]);

  return (
    <>
      <Grid container spacing={8}>
        <Grid item md={12}>
          <Header />
        </Grid>
        <Grid item md={12}>
          <Product />
        </Grid>
        <Footer />
      </Grid>
    </>
    // ... consume here
  );
};
