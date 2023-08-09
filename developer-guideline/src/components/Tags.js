import React,{useEffect} from 'react'
import { CardHeader, ContentBox } from './theme'
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import TypoGraphy from './TypoGraphy';
const drawerWidth = 200;
const Tags = () => {
  const theme =useTheme()

  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <CardHeader>Tags</CardHeader>
      <Box sx={{marginTop:"20px",display:"flex",columnGap:"10px"}}> 
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>Entries</Text12>
            <img src={require('../images/icons/chevron_grey_down.png')} />
          </GreyPlain>
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>Content Type</Text12>
            <img src={require('../images/icons/hamburger.png')} />
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>iOS</Text12>
            <img src={require('../images/icons/chevron_grey_down.png')} />
          </GreyPlain>
      </Box>
      <Box sx={{marginTop:"40px",display:"flex",columnGap:"10px"}}> 
          <OutlineBox>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor2,borderWidth:"1px",
            borderStyle:"solid",
            borderColor:theme.palette.mgsColors.typoColor2}}>
              Blog Post
            </Text12>
          </OutlineBox>
          <OutlineBox>
            <Text12 sx={{color:theme.palette.mgsColors.danger,borderWidth:"1px",
            borderStyle:"solid",
            borderColor:theme.palette.mgsColors.danger}}>
              Overdue
            </Text12>
          </OutlineBox>
          <OutlineBox>
            <Text12 sx={{color:theme.palette.mgsColors.success,borderWidth:"1px",
            borderStyle:"solid",
            borderColor:theme.palette.mgsColors.success}}>
              Enabled
            </Text12>
          </OutlineBox>
      </Box>
      <Box sx={{marginTop:"40px",display:"flex"}}> 
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>artificial intelligence</Text12>
            <img src={require('../images/icons/close_grey.png')} />
          </GreyPlain>
      </Box>
      <Box sx={{marginTop:"40px",display:"flex",columnGap:"10px"}}> 
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>Option 1</Text12>
            <img src={require('../images/icons/close_grey.png')} />
          </GreyPlain>
          <GreyPlainA>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4 ,paddingLeft:"10px"}}>Option 1</Text12>
            <CloseWrapper sx={{ backgroundColor:theme.palette.mgsColors.typoColor2}}>
              <img src={require('../images/icons/close_white.png')} />
            </CloseWrapper>
            <CursorWrapper>
              <img src={require('../images/icons/hand.png')}/>
            </CursorWrapper>
          </GreyPlainA>
      </Box>
      <Box sx={{marginTop:"40px",display:"flex",columnGap:"10px"}}> 
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>aplha</Text12>
            <img src={require('../images/icons/close_grey.png')} />
          </GreyPlain>
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>beta</Text12>
            <img src={require('../images/icons/close_grey.png')} />
          </GreyPlain>
          <GreyPlain>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>Maximum width for tag lorew...</Text12>
            <img src={require('../images/icons/close_grey.png')} />
          </GreyPlain>
      </Box>
      <Box sx={{marginTop:"40px",display:"flex",flexDirection:"column",columnGap:"10px"}}> 
          <Text12 gutterBottom sx={{color:theme.palette.mgsColors.typoColor2,fontWeight:"700"}}>Tags</Text12>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={6} >
                <GreyBox>
                  <GreyPlain sx={{borderWidth:"1px",
                    borderStyle:"solid",
                    borderColor:theme.palette.mgsColors.typoColor1}}>
                    <Text12 sx={{color:theme.palette.mgsColors.typoColor4}}>Option 1</Text12>
                      <img src={require('../images/icons/close_grey.png')} />
                    </GreyPlain>
                </GreyBox>
            </Grid>
          </Grid>
      </Box>
      
    </ContentBox>
  )
}
const GreyBox=styled(Box)({
  backgroundColor:"#EDF1F7",
  padding:"20px 10px",
  display:"flex",
  columnGap:"5px",
  alignItems:"center" 
})
const GreyPlain=styled(Box)({
  backgroundColor:"#EDF1F7",
  padding:"5px 10px",
  display:"flex",
  columnGap:"5px",
  borderRadius:"4px",
  alignItems:"center" 
})
const GreyPlainA=styled(Box)({
  backgroundColor:"#A9B6CB",
  display:"flex",
  columnGap:"5px",
  borderRadius:"4px",
  alignItems:"center",
  position:"relative" 
})
const Text12=styled(Typography)({
  fontSize:"12px",
  fontWeight:"700",
  borderRadius:"4px"
})
const OutlineBox=styled(Box)({
  borderRadius:"4px",
  padding:"5px",
  width:"80px",
  textAlign:"center"
})
const CloseWrapper=styled(Box)({
 padding:"0px 4px",
 height:"100%",
 borderTopRightRadius:"4px",
 borderBottomRightRadius:"4px"
})
const CursorWrapper=styled(Box)({
  position:"absolute",
  right:"-10px",
  bottom:"-25px",
})


export default Tags