import React from 'react'
import { CardHeader, ContentBox } from './theme'
import { Box, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
const drawerWidth = 200;
const TabSection = () => {
  const theme = useTheme()
  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <CardHeader>Tab Style 1</CardHeader>
      <Box sx={{display:"flex"}}>
        <TabWrapper>
          <TabContent sx={{borderBottom:"2px solid #285A6E"}}>
            <Text12>Content Types</Text12>
          </TabContent>
          <img style={{height:"20px"}} src={require('../images/icons/seperator.png')}/>
          <TabContent>
            <Text12>Labels</Text12>
          </TabContent>
        </TabWrapper>
      </Box>
      <Box sx={{margin:"50px 0px"}}>
        <Divider sx={{width:"70%"}}/>
      </Box>
      <CardHeader>Tab Style 2</CardHeader>
      <Box>
        <TabWrapperB>
          <TabContentB sx={{borderBottom:"1px solid #285A6E"}}>
            <Text12>All</Text12>
            <LineWrapper1>
              <LineContent1>
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
              </LineContent1>
            </LineWrapper1>
            <Arrow20>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",rowGap:"5px",alignItems:"center"}}>
                  <img src={require('../images/icons/lines/Tabs_arrow_20.png')}/> 
                  <Typography sx={{fontSize:"12px",color:"#A9B6CB"}}>20px</Typography>
              </Box>
            </Arrow20> 
          </TabContentB>
          <TabContentB >
            <img src={require('../images/icons/tabs/image_light.png')}/>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor1}}>Image</Text12> 
            <LineWrapper1>
              <LineContent2>
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
              </LineContent2>
            </LineWrapper1> 
            <LineWrapper2>
              <HorizontalLine>
                <img src={require('../images/icons/lines/horizontal_line.png')} /> 
                <img src={require('../images/icons/lines/horizontal_line.png')} /> 
              </HorizontalLine>
            </LineWrapper2>    
            <Arrow50>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",rowGap:"5px",alignItems:"center"}}>
                  <img src={require('../images/icons/lines/Tabs_arrow.png')}/> 
                  <Typography sx={{fontSize:"12px",color:"#A9B6CB"}}>50px</Typography>
              </Box>
            </Arrow50>      
          </TabContentB>
          <TabContentB >
            <img src={require('../images/icons/tabs/video_light.png')}/>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor1}}>Video</Text12>  
            <LineWrapper1>
              <LineContent3>
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
                <img src={require('../images/icons/lines/Tabs_line.png')} /> 
              </LineContent3>
            </LineWrapper1>  
            <LineWrapper2>
              <HorizontalLine>
                <img src={require('../images/icons/lines/horizontal_line.png')} /> 
                <img src={require('../images/icons/lines/horizontal_line.png')} /> 
              </HorizontalLine>
            </LineWrapper2>   
            <Arrow50>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",rowGap:"5px",alignItems:"center"}}>
                  <img src={require('../images/icons/lines/Tabs_arrow.png')}/> 
                  <Typography sx={{fontSize:"12px",color:"#A9B6CB"}}>50px</Typography>
              </Box>
            </Arrow50>        
          </TabContentB>
          <TabContentB >
            <img src={require('../images/icons/tabs/audio_light.png')}/>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor1}}>Audio</Text12>          
          </TabContentB>
          <TabContentB >
            <img src={require('../images/icons/tabs/document_light.png')}/>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor1}}>Document</Text12>          
          </TabContentB>
          <TabContentB >
            <img src={require('../images/icons/tabs/code_light.png')}/>
            <Text12 sx={{color:theme.palette.mgsColors.typoColor1}}>Code</Text12>          
          </TabContentB>
        </TabWrapperB>
      </Box>
      <Box sx={{marginTop:"50px"}}>
        <TabWrapperC>
          <Box sx={{display:"flex",flexDirection:"column",rowGap:"20px"}}>
            <TabContentB sx={{borderBottom:"1px solid #285A6E"}}>
              <Text12>All</Text12>
            </TabContentB>
            <TabContentB sx={{color:"#D62400"}}>
              <Text12>Selected</Text12>
            </TabContentB>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column",rowGap:"20px"}}>
            <TabContentB >
              <img src={require('../images/icons/tabs/image_tungston.png')}/>
              <Text12 sx={{color:theme.palette.mgsColors.tungston}}>Image</Text12> 
            </TabContentB>
            <TabContentB sx={{color:"#D62400"}}>
              <Text12>Hover state</Text12>
            </TabContentB>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column",rowGap:"20px"}}>
            <TabContentB>
              <img src={require('../images/icons/tabs/image_light.png')}/>
              <Text12 sx={{color:theme.palette.mgsColors.tungston}}>Image</Text12> 
            </TabContentB>
            <TabContentB sx={{color:"#D62400"}}>
              <Text12>Normal / At Rest</Text12>
            </TabContentB>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column",rowGap:"20px"}}>
            <TabContentB>
              <img src={require('../images/icons/tabs/image_filled_tungston.png')}/>
              <Text12 sx={{color:theme.palette.mgsColors.tungston}}>Image</Text12> 
            </TabContentB>
            <TabContentB sx={{color:"#D62400"}}>
              <Text12>Selected</Text12>
            </TabContentB>
          </Box>
        </TabWrapperC>
      </Box>
    </ContentBox>
  )
}
const TabWrapper=styled(Box)({
  display:"flex",
  columnGap:"5px",
  borderRadius:"8px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  alignItems:"center"
})
const TabContent=styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"10px",
  width:"110px"

})
const Text12=styled(Typography)({
fontSize:"12px",
fontWeight:"700"
})
const TabWrapperB=styled(Box)({
  display:"flex",
  columnGap:"30px",
  alignItems:"center",
  flexWrap:"wrap",
  borderBottom:"1px solid #EDF1F7"
})
const TabWrapperC=styled(Box)({
  display:"flex",
  columnGap:"30px",
  alignItems:"center",
  flexWrap:"wrap"
})
const TabContentB=styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"10px 20px",
  position:"relative",
  columnGap:"5px"
})
const LineWrapper1=styled(Box)({
  position:"absolute"
})
const LineContent1=styled(Box)({
  display:"flex",
  columnGap:"15px",
})
const LineContent2=styled(Box)({
  display:"flex",
  columnGap:"55px",
})
const LineContent3=styled(Box)({
  display:"flex",
  columnGap:"53px",
})
const LineWrapper2=styled(Box)({
  position:"absolute",
  left:"10px"
})
const HorizontalLine=styled(Box)({
  display:"flex",
  flexDirection:"column",
  rowGap:"16px",
})
const Arrow20=styled(Box)({
  position:"absolute",
  left:"-6px",
  top:"-20px"
})
const Arrow50=styled(Box)({
  position:"absolute",
  left:"24px",
  bottom:"-35px"
})

export default TabSection