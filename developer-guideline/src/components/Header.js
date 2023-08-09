import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import mgslogo from '../images/MGS_logo.svg'
import React from 'react'

const Header = () => {
  return (
    <>
        <Headerbox>
            <MgsLogo src={mgslogo} />
            <Heading  variant='h4'>Design System</Heading>
            <SubHeading  variant='h4'>Colours</SubHeading>
        </Headerbox>
    </>
  )
}

const Headerbox=styled(Box)({
    padding:"60px 0px 30px 16px",
    backgroundColor:"#285A6E",
    position:"relative",
    width:"100%",
})
const MgsLogo=styled('img')({
    width:'300px'
})
const Heading=styled(Typography)({
   fontSize:"30px",
   color:"#fff" ,
   marginTop:"10px"
})
const SubHeading=styled(Typography)({
    fontSize:"30px",
    color:"#fff" ,
    marginTop:"10px"
 })

export default Header
