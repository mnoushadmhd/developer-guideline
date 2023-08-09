import React from 'react'
import { ContentBox, TextBold, TextContent } from './theme'
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
const drawerWidth = 200;
const FormElements = () => {
  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <Grid container>
        <LeftWrapper  item xs={12} sm={12} md={5} lg={4}>
          <TextBold sx={{fontSize:"10px"}} gutterBottom>Text Field Title <sup>*</sup></TextBold>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Input24 readOnly value='Placeholder Text'/>
              </Grid>
          </Grid>
        </LeftWrapper>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <InputWrapper>
                <SizeWrapper><SizeBox1>24px</SizeBox1></SizeWrapper>
                  <VerticalBox1>
                    <VerticalLine/>
                  </VerticalBox1>
                  <InputBox>
                    <SizeWrapper><SizeBox1>240px</SizeBox1></SizeWrapper>
                    <HorizontalWrapper>
                      <HorizontalBox>
                        <HorizontalLine/>
                      </HorizontalBox>
                    </HorizontalWrapper>
                   <Grid>
                    <Input24 readOnly value='Placeholder Text'/>
                   </Grid>
                  </InputBox>
                </InputWrapper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{marginTop:"30px"}} container>
        <LeftWrapper  item xs={12} sm={12} md={5} lg={4}>
          <TextBold sx={{fontSize:"10px"}} gutterBottom>Text Field Title <sup>*</sup></TextBold>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Input32 readOnly value='Placeholder Text'/>
              </Grid>
          </Grid>
        </LeftWrapper>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <InputWrapper>
                <SizeWrapper><SizeBox2>32px</SizeBox2></SizeWrapper>
                  <VerticalBox2>
                    <VerticalLine/>
                  </VerticalBox2>
                  <InputBox>
                    <SizeWrapper><SizeBox2>240px</SizeBox2></SizeWrapper>
                    <HorizontalWrapper>
                      <HorizontalBox>
                        <HorizontalLine/>
                      </HorizontalBox>
                    </HorizontalWrapper>
                   <Grid>
                    <Input32 readOnly value='Placeholder Text'/>
                   </Grid>
                  </InputBox>
                </InputWrapper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>  
      <Box>
        <RedHeading>Standard Sizes</RedHeading>
        <Grid  container spacing={2}>
          <Grid item xs={4} sm={4} md={1} lg={1}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                      <SizeWrapper><SizeBox2>80px</SizeBox2></SizeWrapper>
                      <HorizontalWrapper>
                        <HorizontalBox>
                          <HorizontalLine/>
                        </HorizontalBox>
                      </HorizontalWrapper>
                    <Grid>
                      <Input24A readOnly value='Placeholder'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={8} md={2} lg={2}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                      <SizeWrapper><SizeBox2>160px</SizeBox2></SizeWrapper>
                      <HorizontalWrapper>
                        <HorizontalBox>
                          <HorizontalLine/>
                        </HorizontalBox>
                      </HorizontalWrapper>
                    <Grid>
                      <Input24A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={8} md={4} lg={4}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                      <SizeWrapper><SizeBox2>240px</SizeBox2></SizeWrapper>
                      <HorizontalWrapper>
                        <HorizontalBox>
                          <HorizontalLine/>
                        </HorizontalBox>
                      </HorizontalWrapper>
                    <Grid>
                      <Input24A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                      <SizeWrapper><SizeBox2>320px</SizeBox2></SizeWrapper>
                      <HorizontalWrapper>
                        <HorizontalBox>
                          <HorizontalLine/>
                        </HorizontalBox>
                      </HorizontalWrapper>
                    <Grid>
                      <Input24A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                    <VerticalBox1>
                      <VerticalLine/>
                    </VerticalBox1>
                    <SizeWrapper><SizeBox1>24px</SizeBox1></SizeWrapper>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>  
        <Grid sx={{marginTop:"20px"}}  container spacing={2}>
          <Grid item xs={4} sm={4} md={1} lg={1}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                    <Grid>
                      <Input32A readOnly value='Placeholder'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={8} md={2} lg={2}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                    <Grid>
                      <Input32A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={8} md={4} lg={4}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                    <Grid>
                      <Input32A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <InputWrapper>
                    <InputBoxA>
                    <Grid>
                      <Input32A readOnly value='Placeholder Text'/>
                    </Grid>
                    </InputBoxA>
                    <VerticalBox2>
                      <VerticalLine/>
                    </VerticalBox2>
                    <SizeWrapper><SizeBox2>32px</SizeBox2></SizeWrapper>
                  </InputWrapper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>  
      </Box> 
      <Box>
        <RedHeading>Different States of Text Fields</RedHeading>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
             <Input24A readOnly value='Placeholder Text'/>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
              <Grid container justifyContent="center" alignItems="center">
                 <Typography sx={{color:"#515E66"}}>NORMAL</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Input24A readOnly value='Placeholder Text'/>
          </Grid>  
        </Grid>
        <Grid sx={{marginTop:"15px"}} container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
             <Input24A sx={{border: "1px solid #285A6E"}} readOnly value='Placeholder Text'/>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
              <Grid container justifyContent="center" alignItems="center">
                 <Typography sx={{color:"#515E66"}}>FOCUS</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
              <Input24A sx={{border: "1px solid #285A6E"}} readOnly value='Placeholder Text'/>
          </Grid>  
        </Grid>
        <Grid sx={{marginTop:"15px"}} container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
             <Input24A sx={{border: "1px solid #EB0028"}} readOnly value='Placeholder Text'/>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
              <Grid container justifyContent="center" alignItems="center">
                 <Typography sx={{color:"#515E66"}}>ERROR</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
              <Input24A sx={{border: "1px solid #EB0028"}} readOnly value='Placeholder Text'/>
          </Grid>  
        </Grid>
        <Grid sx={{marginTop:"15px"}} container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
             <Input24A sx={{border: "1px solid #056A1B"}} readOnly value='Placeholder Text'/>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
              <Grid container justifyContent="center" alignItems="center">
                 <Typography sx={{color:"#515E66"}}>SUCCESS</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
              <Input24A sx={{border: "1px solid #056A1B"}} readOnly value='Placeholder Text'/>
          </Grid>  
        </Grid>
        <Grid sx={{marginTop:"15px"}} container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
             <Input24AD  readOnly value='Placeholder Text'/>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
              <Grid container justifyContent="center" alignItems="center">
                 <Typography sx={{color:"#515E66"}}>DISABLED</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
              <Input24AD  readOnly value='Placeholder Text'/>
          </Grid>  
        </Grid>
      </Box>
      <Box>
        <Grid sx={{marginTop:"45px"}} container>
            <Grid item xs={6} sm={6} md={6} lg={4} >
              <InputWrapper >
                  <InputBox sx={{flexGrow:1}}>
                    <SizeWrapper><SizeBox1>320px</SizeBox1></SizeWrapper>
                    <HorizontalWrapper>
                      <HorizontalBox>
                        <HorizontalLine/>
                      </HorizontalBox>
                    </HorizontalWrapper>
                   <TextArea style={{height:"80px"}} />
                  </InputBox>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <VerticalBoxA sx={{height:"80px"}}>
                      <VerticalLine />
                    </VerticalBoxA>
                    <SizeWrapper><SizeBox1>80px</SizeBox1></SizeWrapper>
                  </Box>
                </InputWrapper> 
            </Grid>
        </Grid>
        <Grid sx={{marginTop:"30px"}} container>
            <Grid item xs={8} sm={8} md={8} lg={8} >
                <InputWrapper2 >
                  <InputBox sx={{flexGrow:1}}>
                   <TextArea style={{height:"140px"}} />
                   <HorizontalWrapper>
                      <HorizontalBox>
                        <HorizontalLine/>
                      </HorizontalBox>
                    </HorizontalWrapper>
                    <SizeWrapper><SizeBox1>420px</SizeBox1></SizeWrapper>
                  </InputBox>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <VerticalBoxA sx={{height:"140px"}}>
                      <VerticalLine />
                    </VerticalBoxA>
                    <SizeWrapper><SizeBox1>140px</SizeBox1></SizeWrapper>
                  </Box>
                </InputWrapper2> 
            </Grid>
        </Grid>
      </Box>
    </ContentBox>
  )
}
const Input24=styled('input')({
  backgroundColor:'#FAFBFC',
  height:"26px",
  fontSize:"10px",
  border:'1px solid #DFE1E6',
  padding:"5px",
  borderRadius:"4px",
  width:"240px",
  outline:"none",
  '@media (max-width:1200px)': {
    width:"200px"
  }
})
const Input32=styled('input')({
  backgroundColor:'#FAFBFC',
  height:"32px",
  fontSize:"10px",
  backgroundColor:'#FAFBFC',
  border:'1px solid #DFE1E6',
  padding:"5px",
  borderRadius:"4px",
  width:"240px",
  outline:"none",
  '@media (max-width:1200px)': {
    width:"200px"
  }
})
const Input24A=styled('input')({
  backgroundColor:'#FAFBFC',
  height:"26px",
  fontSize:"10px",
  border:'1px solid #DFE1E6',
  padding:"5px",
  borderRadius:"4px",
  outline:"none",
  width:"100%"
})
const Input24AD=styled('input')({
  backgroundColor:'#EFEFEF',
  height:"26px",
  fontSize:"10px",
  border:'1px solid #DFE1E6',
  padding:"5px",
  borderRadius:"4px",
  outline:"none",
  width:"100%"
})
const Input32A=styled('input')({
  backgroundColor:'#FAFBFC',
  height:"32px",
  fontSize:"10px",
  backgroundColor:'#FAFBFC',
  border:'1px solid #DFE1E6',
  padding:"5px",
  borderRadius:"4px",
  outline:"none",
  width:"100%",
  minWidth:"36px"
})
const HorizontalBox=styled(Box)({
  height:"15px",
  display:"flex",
  alignItems:"center",
  borderLeft:"1px solid #EB0028",
  borderRight:"1px solid #EB0028",
  flexGrow:"1"
})
const VerticalBox1=styled(Box)({
  height:"26px",
  display:"flex",
  width:"15px",
  flexDirection:"column",
  alignItems:"center",
  borderTop:"1px solid #EB0028",
  borderBottom:"1px solid #EB0028"
})
const VerticalBox2=styled(Box)({
  height:"32px",
  display:"flex",
  width:"15px",
  flexDirection:"column",
  alignItems:"center",
  borderTop:"1px solid #EB0028",
  borderBottom:"1px solid #EB0028"
})
const VerticalBoxA=styled(Box)({
  display:"flex",
  width:"15px",
  flexDirection:"column",
  alignItems:"center",
  borderTop:"1px solid #EB0028",
  borderBottom:"1px solid #EB0028"
})
const HorizontalLine=styled(Box)({
  borderBottom:"1px solid #EB0028",
  width:"100%"
})
const VerticalLine=styled(Box)({
  borderRight:"1px solid #EB0028",
  width:"2px",
  height:"100%"
})

const InputWrapper=styled(Box)({
  display:"flex",
  alignItems:"flex-end",
  columnGap:"5px",
  '@media (max-width:767px)': {
     marginTop: '15px',
  }
})
const InputWrapper2=styled(Box)({
  display:"flex",
  alignItems:"flex-start",
  columnGap:"5px",
  '@media (max-width:767px)': {
     marginTop: '15px',
  }
})
const HorizontalWrapper=styled(Box)({
  display:"flex",
  alignItems:"flex-end"
})
const InputBox=styled(Box)({
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-end",
  rowGap:"5px",
})
const InputBoxA=styled(Box)({
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-end",
  rowGap:"5px",
  flexGrow:"1"
})
const SizeBox1=styled("span")({
  backgroundColor:"#EB0028",
  color:"#fff",
  fontSize:"12px",
  borderRadius:"4px",
  padding:"5px",
  display:"inline-block",
  height:"26px"
})
const SizeBox2=styled("span")({
  backgroundColor:"#EB0028",
  color:"#fff",
  fontSize:"12px",
  borderRadius:"4px",
  padding:"5px",
  display:"inline-block",
  height:"32px"
})
const SizeWrapper=styled(Box)({
  display:"flex",
  justifyContent:"center"
})
const LeftWrapper=styled(Grid)({
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-end"
})
const RedHeading=styled(Typography)({
  marginTop:"30px",
  marginBottom:"20px",
  color:"#EB0028",
  fontSize:"16px"
})
const TextArea=styled("textarea")({
  backgroundColor:"#FAFBFC",
  color:"#EB0028",
  fontSize:"14px",
  width:"100%",
  resize:"none",
  outline:"none",
  border:"2px solid  #DFE1E6"
})

export default FormElements