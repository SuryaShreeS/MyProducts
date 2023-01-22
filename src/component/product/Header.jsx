import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import faq from './faqCategory.json';
import Button from '@mui/material/Button';
import listCategory from './listCategory.json';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <>
          {listCategory.map((el, index) => (
            <>
              <Button
                color='inherit'
                id='fade-button'
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {el.name}
              </Button>
             

              <Menu
                id='fade-menu'
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {/* {el.brands[index].model[index].map((al)=>(
            
            <MenuItem onClick={handleClose}>{al.model_name}</MenuItem>

            
          ))} */}
              </Menu>
            </>
          ))}
           <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            // color="#FFA500"
            style={{padding:"25px"}}
          >
            GSD PRODUCTS
          </Typography>
        </>
      </Toolbar>
    </AppBar>
  );
};
