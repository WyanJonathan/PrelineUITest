'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 786,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
  },
});

export default theme;
