import React from 'react'
import { CardHeader, ContentBox, TextContent12 } from './theme'
import { Box, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react';
const drawerWidth = 200;
const RadioButtons = () => {
  const theme = useTheme();
  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Box sx={{marginTop:"30px"}}>
        <CardHeader>RADIO BUTTON</CardHeader>
        <Grid container spacing={2}>
          <Grid  item xs={12} sm={12} md={6} lg={4}>
            <RedHeader>For Background: #FFFFFF</RedHeader>
          </Grid>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }} item xs={12} sm={12} md={6} lg={4}>
            <RedHeader>For Background : #F5F5F5</RedHeader>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end" spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box sx={{padding:"30px 20px"}}>
            <FlexBox sx={{visibility:"hidden"}}>
              <Typography>MULTI SELECT</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/single_radio.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor1}}>SINGLE SELECT</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/active_radio.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor2}}>Active Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/inactive_radio.png')}/>
              <Typography sx={{opacity:"0.3"}}>Inactive Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/rest_radio_1.png')}/>
              <Typography>At Rest</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/hover_radio1.png')}/>
              <Typography>On Hover</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/pressed_radio.png')}/>
              <Typography>Pressed</Typography>
            </FlexBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RedHeader sx={{ marginBottom:"10px",display: { xs: 'block', md: 'none' } }}>For Background : #F5F5F5</RedHeader>
          <ColorBox>
          <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/single_radio.png')}/>
              <Typography sx={{color: theme.palette.mgsColors.typoColor1}}>SINGLE SELECT</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/active_radio.png')}/>
              <Typography>Active Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/inactive_radio.png')}/>
              <Typography sx={{opacity:"0.3"}}>Inactive Disabled</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/rest_radio_2.png')}/>
              <Typography>At Rest</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/hover_radio2.png')}/>
              <Typography>On Hover</Typography>
            </FlexBox>
            <FlexBox sx={{marginTop:"20px"}}>
              <img src={require('../images/icons/radiobuttons/pressed_radio.png')}/>
              <Typography>Pressed</Typography>
            </FlexBox>
          </ColorBox>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{marginTop:"30px"}}>
        <CardHeader>SWITCH</CardHeader>
        <SwitchBox>
          <Box sx={{display:"flex"}}>
          <Box sx={{visibility:"hidden"}}>
            <SwitchContentA><TextContent12>False</TextContent12></SwitchContentA>
          </Box>
            <Box sx={{display:"flex"}}>
                <SwitchContent>Default</SwitchContent>
                <SwitchContent>Disabled</SwitchContent>
                <SwitchContent>Hover/Focused</SwitchContent>
            </Box>  
          </Box>
          <Box sx={{display:"flex"}}>
            <Box>
              <SwitchContentA sx={{marginBottom:"20px"}}><TextContent12>False</TextContent12></SwitchContentA>
              <SwitchContentA><TextContent12>True</TextContent12></SwitchContentA>
            </Box>
            <Box sx={{border:"1px dashed #6C5CE7",borderRadius:"4px"}}>
            <Box sx={{display:"flex",marginBottom:"20px"}}>
                <SwitchContent><img src={require('../images/icons/switch/default_false.png')}/></SwitchContent>
                <SwitchContent><img src={require('../images/icons/switch/disabled_false.png')}/></SwitchContent>
                <SwitchContent><img  src={require('../images/icons/switch/hover_false.png')}/></SwitchContent>
            </Box>
            <Box sx={{display:"flex"}}>
                <SwitchContent><img src={require('../images/icons/switch/default_true.png')}/></SwitchContent>
                <SwitchContent><img src={require('../images/icons/switch/disabled_true.png')}/></SwitchContent>
                <SwitchContent><img  src={require('../images/icons/switch/hover_true.png')}/></SwitchContent>
            </Box>
            </Box>
          </Box>
        </SwitchBox>
      </Box>
    </ContentBox>
  )
}
const SwitchBox=styled(Box)({
  display:"flex",
  flexDirection:"column",
  overflow:"auto"
})
const SwitchContent=styled(Box)({
  padding:"15px",
  width:"150px",
  textAlign:"center",
  display:"flex",
  alignItems:"flex-end",
  justifyContent:"center"
})
const SwitchContentA=styled(Box)({
  padding:"15px 15px 15px 0px",
  width:"100px"
})
const FlexBox=styled(Box)({
  display:"flex",
  columnGap:"7px",
  alignItems:"center"
})
const RedHeader=styled(Typography)({
  fontSize:"16px",
  fontWeight:"bold",
  color:"#D62400"
})
const ColorBox=styled(Box)({
  backgroundColor:"#F5F5F5",
  padding:"30px 20px"
})

export default RadioButtons