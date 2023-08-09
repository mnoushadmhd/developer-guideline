import React from 'react'
import { ContentBox, GridBox, PlainText, TextBold, TungstonText, WhiteText } from './theme'
import { Box, Button, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Cursor1 from '../images/Cursor1.svg'
import Cursor2 from '../images/Cursor2.svg'

const drawerWidth = 200;
const Buttons = () => {
const theme = useTheme();
  return (
    <>
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <CardHeader2 sx={{marginLeft:"14px"}}>Primary</CardHeader2>
        <BasicWrapper>
            <Grid  container>
                <Grid item xs={12} sm={12} md={12} lg={8} spacing={2}>
                    <Grid  container spacing={2}>
                        <Grid xs={6} sm={6} md={4} lg={4} item>
                            <TextBold gutterBottom>Normal</TextBold>
                            <NormalButton>Add New</NormalButton>
                        </Grid>
                        <Grid xs={6} sm={6} md={4} lg={4} item>
                            <TextBold gutterBottom>Hover</TextBold>
                            <HoverButton></HoverButton>
                            <PlainText>20% of #222</PlainText>
                        </Grid>
                        <Grid xs={6} sm={6} md={4} lg={4} item>
                            <TextBold gutterBottom>*Disabled</TextBold>
                            <DisabledButton disabled>
                                Add New Entry
                                <AbsImage1 src={Cursor2}/>
                            </DisabledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </BasicWrapper>
        <ColorWrapper>
            <Grid   container>
                <ColorGird item xs={12} sm={12} md={12} lg={8} spacing={2}>
                    <Grid  container spacing={2}>
                        <Grid xs={6} sm={6} md={4} lg={4} item>
                            <PlainButton sx={{color:theme.palette.mgsColors.danger,   
                            borderWidth: '1px',borderStyle: 'solid',
                            borderColor: theme.palette.mgsColors.danger}}>
                            Delete
                            </PlainButton>
                            <PlainButton sx={{color:theme.palette.mgsColors.success}}>Btn Success</PlainButton>
                            <PlainButton sx={{color:theme.palette.mgsColors.danger}}>Btn Danger</PlainButton>
                            <PlainButton sx={{color:theme.palette.mgsColors.info, margin: '0 !important' }}>Btn Info</PlainButton>
                        </Grid>
                        <Grid xs={6} sm={6} md={4} lg={4} item>
                            <FilledButton sx={{backgroundColor:theme.palette.mgsColors.danger,
                            '&:hover': { backgroundColor: theme.palette.mgsColors.danger,}}}>
                                Delete
                            </FilledButton>
                            <FilledButton sx={{backgroundColor:theme.palette.mgsColors.success,
                            '&:hover': { backgroundColor: theme.palette.mgsColors.success,}}}>
                            Btn Success
                            </FilledButton>
                            <FilledButton sx={{backgroundColor:theme.palette.mgsColors.danger,
                            '&:hover': { backgroundColor: theme.palette.mgsColors.danger,}}}>
                                Btn Danger
                            </FilledButton>
                            <FilledButton sx={{backgroundColor:theme.palette.mgsColors.info,
                            '&:hover': { backgroundColor: theme.palette.mgsColors.info,}}}>
                                Btn Info
                            </FilledButton>
                        </Grid>
                    </Grid>
                </ColorGird>
            </Grid>
        </ColorWrapper>
        <CardHeader2 sx={{margin:"40px 0px 0px 14px"}}>Secondary</CardHeader2>
        <BasicWrapper>
            <Grid  container>
                <Grid item xs={12} sm={12} md={12} lg={8} spacing={2}>
                    <Grid  container spacing={2}>
                        <Grid xs={12} sm={6} md={6} lg={4} item>
                            <TextBold gutterBottom>Normal</TextBold>
                            <OutlinedButton>Add New Entry</OutlinedButton>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} lg={4} item>
                            <TextBold gutterBottom>Hover</TextBold>
                            <PlainText>CS team will provide with <br/>CSS properties (% of black)</PlainText>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} lg={4} item>
                            <TextBold gutterBottom>*Disabled</TextBold>
                            <DisabledButton disabled>
                                Add New Entry
                                <AbsImage1 src={Cursor2}/>
                            </DisabledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </BasicWrapper>
        <CardHeader2 sx={{margin:"40px 0px 0px 14px"}}>Outline Button</CardHeader2>
        <BasicWrapper>
            <Grid  container>
                <Grid item xs={12} sm={12} md={12} lg={8} spacing={2}>
                    <Grid  container spacing={2}>
                        <Grid xs={12} sm={12} md={6} lg={4} item>
                            <OutlinedButton2>Choose from uploads</OutlinedButton2>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={4} item>
                            <OutlinedButton2>
                                Choose from uploads
                                <AbsImage2 src={Cursor1}/>
                            </OutlinedButton2>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={4} item>
                            <DisabledButton2 disabled>
                                Choose from uploads
                                <AbsImage1 src={Cursor2}/>
                            </DisabledButton2>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </BasicWrapper>
        <CardHeader2 sx={{margin:"40px 0px 0px 14px"}}>Tertiary Buttons</CardHeader2>
        <ColorWrapper>
            <Grid sx={{height:"150px"}}  container>
                <ColorGird item xs={12} sm={12} md={12} lg={8} spacing={2}>
                    <Grid  container spacing={2}>
                        <Grid xs={12} sm={6} md={4} lg={4} item>
                                <TungstonText>Upload a new file</TungstonText>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} item>
                                <WhiteText>Cancel</WhiteText>
                        </Grid>
                    </Grid>
                </ColorGird>
            </Grid>
        </ColorWrapper>  
    </ContentBox>
    </>
  )
}
const NormalButton=styled(Button)({
    backgroundColor:"#285A6E",
    fontWeight:"700",
    color:"#fff",
    padding:"5px 15px",
    marginTop:"10px",
    '&:hover': {
        backgroundColor: "#285A6E"
      }
})
const HoverButton=styled(Button)({
    backgroundColor:"#222222",
    color:"#fff",
    width:"120px",
    padding:"5px 15px",
    marginTop:"10px",
    opacity:"0.3",
    marginBottom:"15px",
    '&:hover': {
        backgroundColor: "#222222"
      }
})
const DisabledButton=styled(Button)({
    backgroundColor:"#EDF1F7",
    color:"#fff",
    width:"150px",
    fontSize:"13px",
    padding:"5px 15px",
    marginTop:"10px",
    '&:hover': {
        backgroundColor: "#EDF1F7"
      }
})
const DisabledButton2=styled(Button)({
    backgroundColor:"#EDF1F7",
    color:"#fff",
    width:"200px",
    fontSize:"13px",
    padding:"5px 10px",
    marginTop:"10px",
    '&:hover': {
        backgroundColor: "#EDF1F7"
      }
})
const OutlinedButton=styled(Button)({
    backgroundColor:"#fff",
    color:"#285A6E",
    width:"150px",
    padding:"5px 15px",
    marginTop:"10px",
    fontSize:"13px",
    border:"1px solid #285A6E ",
    '&:hover': {
        backgroundColor: "#fff"
      }
})
const OutlinedButton2=styled(Button)({
    backgroundColor:"#fff",
    color:"#285A6E",
    width:"200px",
    padding:"5px 10px",
    marginTop:"10px",
    fontSize:"13px",
    border:"1px solid #285A6E ",
    '&:hover': {
        backgroundColor: "#fff"
      }
})
const ColorGird=styled(Grid)({
    padding:"15px",
    backgroundColor:"#EDF1F7",

})
const BasicWrapper=styled(Box)({
    padding:"15px"

})
const ColorWrapper=styled(Box)({
    marginTop:"30px"

})
const PlainButton=styled(Button)({
    backgroundColor:"#FFF",
    width:"130px",
    padding:"5px 15px",
    marginTop:"10px",
    marginBottom:"30px",
    display:"block",
    fontSize:"13px",
    '&:hover': {
        backgroundColor: "#FFF"
      }
})
const FilledButton=styled(Button)({
    color:"#fff",
    width:"120px",
    padding:"5px 15px",
    width:"130px",
    marginTop:"10px",
    marginBottom:"30px",
    fontSize:"13px",
    display:"block",
})
const CardHeader2=styled(Typography)({
    padding:"5px 10px",
    backgroundColor:"#A9B6CB",
    display:"flex",
    marginBottom:"25px",
    fontSize:"14px",
    fontWeight:"700",
    display:"inline-block"
})
const AbsImage1=styled('img')({
    position:'absolute',
    bottom: '-17px',
    right: '-5px'
})
const AbsImage2=styled('img')({
    position:'absolute',
    bottom: '-5px',
    right:0
})
export default Buttons