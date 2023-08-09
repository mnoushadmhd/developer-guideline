
import React from 'react'
import { CardHeader, ContentBox, TextContent, TextContent12 } from './theme';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const drawerWidth = 200;

const Checkbox = () => {
  const theme = useTheme();
  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <Box>
      <CardHeader>Checkbox</CardHeader>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RedHeader>For Background: #FFFFFF</RedHeader>
        </Grid>
        <Grid  sx={{ display: { xs: 'none', md: 'block' } }} item xs={12} sm={12} md={6} lg={4}>
          <RedHeader>For Background : #F5F5F5</RedHeader>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box sx={{padding:"30px 20px"}}>
            <FlexBox>
              <img src={require('../images/icons/checkboxes/multi_check.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor1}}>MULTI SELECT</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/active_check.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor2}}>Active Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/inactive_check.png')}/>
              <Typography sx={{opacity:"0.3"}}>Inactive Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/intermediate_check.png')}/>
              <Typography>Indeterminate</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/rest_check1.png')}/>
              <Typography>At Rest</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/hover_check1.png')}/>
              <Typography>On Hover</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/active_cilled_check.png')}/>
              <Typography>Active</Typography>
            </FlexBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RedHeader sx={{ marginBottom:"10px",display: { xs: 'block', md: 'none' } }}>For Background : #F5F5F5</RedHeader>
          <ColorBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/active_check.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor2}}>Active Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/inactive_check.png')}/>
              <Typography sx={{opacity:"0.3"}}>Inactive Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/intermediate_check.png')}/>
              <Typography>Indeterminate</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/rest_check2.png')}/>
              <Typography>At Rest</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/hover_check2.png')}/>
              <Typography>On Hover</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/checkboxes/active_cilled_check.png')}/>
              <Typography>Active</Typography>
            </FlexBox>
          </ColorBox>
        </Grid>
      </Grid>
      </Box>
    </ContentBox>
  )
}
const RedHeader=styled(Typography)({
  fontSize:"16px",
  fontWeight:"bold",
  color:"#D62400"
})
const ColorBox=styled(Box)({
  backgroundColor:"#F5F5F5",
  padding:"30px 20px"
})
const FlexBox=styled(Box)({
  display:"flex",
  columnGap:"7px",
  alignItems:"center"
})

export default Checkbox