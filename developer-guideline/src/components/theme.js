import styled from "@emotion/styled";
import { Box, Typography, createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      fontSize: '14px',
      fontWeight:'700',
      height:"34.5px",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary:{
      main:"#fff"
    },
    secondary:{
      main:"#000"
    },
    mgsColors: {
      tungston: '#285A6E',
      danger: '#D62400',
      success:'#36B37E',
      info:'#FFAE0A',
      typoColor1:"#A9B6CB",
      typoColor2:"#647696",
      typoColor3:"#222222",
      typoColor4:"#475161"

    },
  }
});

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };
export const CardHeader=styled(Typography)({
  padding:"5px 10px",
  backgroundColor:"#A9B6CB",
  display:"flex",
  marginBottom:"40px",
  fontSize:"14px",
  fontWeight:"600",
  display:"inline-block"
})
export const ContentBox=styled(Box)({
    padding:"15px",
    minHeight:"100vh",
    '@media (min-width: 768px)': {
        position:'absolute',top:"265px",right:"0px",
        padding:"30px 20px 20px 20px",
      }   
})
export const TextContent=styled(Typography)({
  fontSize:"14px",
  color:"#000"
})
export const TextContent12=styled(Typography)({
  fontSize:"14px",
  color:"#000"
})
export const TungstonText=styled(Typography)({
  fontSize:"14px",
  color:"#285A6E"
})
export const WhiteText=styled(Typography)({
  fontSize:"14px",
  color:"#fff"
})
export const PlainText=styled(Typography)({
  fontSize:"14px",
  color:"#475161"
})
export const TextBold=styled(Typography)({
  fontSize:"14px",
  color:"#000",
  fontWeight:"700"
})
export const GridBox=styled(Box)({
  marginTop:"30px"
})



