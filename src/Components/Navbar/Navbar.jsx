import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from 'assets/images/Logo.png';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  
   const { i18n } = useTranslation();

    const changeLanguageHandler = (lang) => {
        i18n.changeLanguage(lang);
    }
  
return(
  <>
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
       <select
            value={i18n.language}
            onChange={changeLanguageHandler}
          >
            <option value="en">English</option>
            <option value="sp">Spanish</option>
        </select>
    </Stack>
  </Stack>
  </>

)}

export default Navbar;