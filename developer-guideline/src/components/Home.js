
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CardHeader, ContentBox } from './theme';
import styled from '@emotion/styled';
const primary=[{color:"MGS Gold",hex:"#F9A61B",rgb:'RGB (249, 166, 27)',cval:'C 0%  M 33%   Y 87%   K 2%'},
{color:"MGS Tungsten",hex:"#285A6E",rgb:'RGB (40, 90, 110)',cval:'C 27%  M 8%   Y 0%   K 57%'},
{color:"MGS Blue",hex:"#035AA6",rgb:'RGB (3, 90, 166)',cval:'C 64%  M 30%   Y 0%   K 35%'}
]
const neutrals=[{color:"MGS Black",hex:"#1D1D1D",rgb:'RGB (29, 29, 29)',cval:'C 0%  M 0%   Y 0%   K 89%'},
{color:"MGS Dark Grey",hex:"#545E65",rgb:'RGB (149, 149, 171)',cval:'C 9%  M 3%   Y 0%   K 33%'},
{color:"MGS Mid Gray",hex:"#98A4AA",rgb:'RGB (245, 246, 250)',cval:'C 2%  M 2%   Y 0%   K 2%'},
{color:"MGS Light Gray",hex:"#F5F6FA",rgb:'RGB (245, 246, 250)',cval:'C 2%  M 2%   Y 0%   K 2%'}
]
const brands=[{color:"MGS User",hex:"#035AA6",rgb:'RGB (214, 36, 0)',cval:'C 0%  M 70%   Y 84%   K 16%'},
{color:"MGS Learn",hex:"#70309F",rgb:'RGB (255, 174, 10)',cval:'C 0%  M 32%   Y 96%   K 0%'},
{color:"MGS Services",hex:"#FBB03C",rgb:'RGB (54, 179, 126)',cval:'C 49%  M 0%   Y 21%   K 30%'},
{color:"MGS Tech",hex:"#285A6E",rgb:'RGB (0, 184, 217)',cval:'C 85%  M 13%   Y 0%   K 15%'},
{color:"MGS Support",hex:"#03C9ED",rgb:'RGB (101, 84, 192)',cval:'C 36%  M 42%   Y 0%   K 25%'},
{color:"MGS Admin",hex:"#7A6FB9",rgb:'RGB (101, 84, 192)',cval:'C 36%  M 42%   Y 0%   K 25%'}
]
const palette=[{color:"Warning | MGS Red",hex:"#D62400",rgb:'RGB (214, 36, 0)',cval:'C 0%  M 70%   Y 84%   K 16%'},
{color:"Attention | MGS Yellow",hex:"#FFAE0A",rgb:'RGB (255, 174, 10)',cval:'C 0%  M 32%   Y 96%   K 0%'},
{color:"Success | MGS Green",hex:"#36B37E",rgb:'RGB (54, 179, 126)',cval:'C 49%  M 0%   Y 21%   K 30%'},
{color:"Information | MGS Aqua",hex:"#00B8D9",rgb:'RGB (0, 184, 217)',cval:'C 85%  M 13%   Y 0%   K 15%'},
{color:"Help | MGS Purple",hex:"#6554C0",rgb:'RGB (101, 84, 192)',cval:'C 36%  M 42%   Y 0%   K 25%'}
]


const drawerWidth = 200;
const Home = () => {
  return (
   <>
      <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <CardHeader>PRIMARY</CardHeader>
        <Grid container spacing={2}>
            {
                primary.map((res,i)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Box
                                sx={{ height: 140,backgroundColor:res.hex}}
                            />
                            <CardContent>
                                <CardHead gutterBottom variant="h6">
                                {res.color}
                                </CardHead>
                                <CardCont gutterBottom variant="h6">
                                {res.hex}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.rgb}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.cval} 
                                </CardCont>
                            </CardContent>
                        </Card>    
                    </Grid>
                    )
                })
            }
        </Grid>
        <CardHeader sx={{marginTop:"30px"}}>NEUTRALS</CardHeader>
        <Grid container spacing={2}>
            {
                neutrals.map((res,i)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Box
                                sx={{ height: 140,backgroundColor:res.hex}}
                            />
                            <CardContent>
                                <CardHead gutterBottom variant="h6">
                                {res.color}
                                </CardHead>
                                <CardCont gutterBottom variant="h6">
                                {res.hex}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.rgb}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.cval} 
                                </CardCont>
                            </CardContent>
                        </Card>    
                    </Grid>
                    )
                })
            }
        </Grid>
        <CardHeader sx={{marginTop:"30px"}}>EXTENDED BRANDS</CardHeader>
        <Grid container spacing={2}>
            {
                brands.map((res,i)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Box
                                sx={{ height: 140,backgroundColor:res.hex}}
                            />
                            <CardContent>
                                <CardHead gutterBottom variant="h6">
                                {res.color}
                                </CardHead>
                                <CardCont gutterBottom variant="h6">
                                {res.hex}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.rgb}
                                </CardCont>
                                <CardCont gutterBottom variant="h6">
                                {res.cval} 
                                </CardCont>
                            </CardContent>
                        </Card>    
                    </Grid>
                    )
                })
            }
        </Grid>
        <CardHeader sx={{marginTop:"30px"}}>EXTENDED PALETTE</CardHeader>
        <Grid container spacing={2}>
            {
                palette.map((res,i)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <Box
                                    sx={{ height: 140,backgroundColor:res.hex}}
                                />
                                <CardContent>
                                    <CardHead gutterBottom variant="h6">
                                    {res.color}
                                    </CardHead>
                                    <CardCont gutterBottom variant="h6">
                                    {res.hex}
                                    </CardCont>
                                    <CardCont gutterBottom variant="h6">
                                    {res.rgb}
                                    </CardCont>
                                    <CardCont gutterBottom variant="h6">
                                    {res.cval} 
                                    </CardCont>
                                </CardContent>
                            </Card>    
                        </Grid>
                    )
                })
            }
        </Grid>
      </ContentBox>
   </>
  )
}

const CardHead=styled(Typography)({
    fontSize:"14px",
    fontWeight:"700"
})
const CardCont=styled(Typography)({
    fontSize:"14px",
})


export default Home