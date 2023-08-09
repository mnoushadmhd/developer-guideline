import React from 'react'
import { CardHeader, ContentBox, TextContent12 } from './theme'
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
const drawerWidth = 200;
const Select = () => {
  const theme = useTheme()
  return (
    <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Box>
            <CardHeader>SINGLE</CardHeader>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.typoColor1}}>Select Title</TextCont14>
                            <img src={require('../images/icons/down-arrow_grey.png')} />
                        </PlainSelect>
                    </Box>      
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <LightSelect>
                            <TextCont14>Select Title</TextCont14>
                            <img src={require('../images/icons/down-arrow_grey.png')} />
                            <AbsoluteHand>
                                <img src={require('../images/icons/hand.png')} />
                            </AbsoluteHand>
                        </LightSelect>
                    </Box>  
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>Select Title</TextCont14>
                            <img src={require('../images/icons/up_arrow_dark.png')} />
                        </PlainSelect>
                    </Box>     
                    <RoundedBox>
                        <SelectItemLight>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                             Item One       
                            </TextCont14>

                            <AbsoluteHand>
                                <img src={require('../images/icons/hand.png')} />
                            </AbsoluteHand>
                        </SelectItemLight>
                        <SelectItem>
                            <TextCont14>
                            Item Two
                            </TextCont14>
                        </SelectItem>
                    </RoundedBox>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box>
                        <TextCont12 sx={{marginBottom:"15px"}}>Set Master Language (Required)</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.typoColor1}}>Select a language</TextCont14>
                            <img src={require('../images/icons/down-arrow_grey.png')} />
                        </PlainSelect>
                    </Box>  
                    <Box sx={{borderBottom:'1px dashed rgba(100, 118, 150, 0.30)',strokeWidth:"1px",width:"200px",margin:"20px 0px"}}></Box>
                    <Box>
                        <TextCont12 sx={{marginBottom:"15px"}}>Set Master Language (Required)</TextCont12> 
                        <LightSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>Select a language</TextCont14>
                            <img src={require('../images/icons/down-arrow_grey.png')} />
                            <AbsoluteHand>
                                <img src={require('../images/icons/hand.png')} />
                            </AbsoluteHand>
                        </LightSelect>
                    </Box>
                    <Box sx={{borderBottom:'1px dashed rgba(100, 118, 150, 0.30)',strokeWidth:"1px",width:"200px",margin:"20px 0px"}}></Box> 
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Set Master Lanugage (Required)</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>Select a language</TextCont14>
                            <img src={require('../images/icons/up_arrow_dark.png')} />
                        </PlainSelect>
                    </Box>     
                    <RoundedBox>
                        <SelectItemLight>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                             English       
                            </TextCont14>

                            <AbsoluteHand>
                                <img src={require('../images/icons/hand.png')} />
                            </AbsoluteHand>
                        </SelectItemLight>
                        <SelectItem>
                            <TextCont14>
                              Hindi
                            </TextCont14>
                        </SelectItem>
                    </RoundedBox>
                    <Box sx={{borderBottom:'1px dashed rgba(100, 118, 150, 0.30)',strokeWidth:"1px",width:"200px",margin:"20px 0px"}}></Box>
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Set Master Lanugage (Required)</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>English</TextCont14>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:"15px"}}>
                                <img src={require('../images/icons/close_grey.png')} />
                                <img src={require('../images/icons/down-arrow_grey.png')} />
                            </Box>
                        </PlainSelect>
                    </Box> 
                </Grid>
            </Grid>
        </Box>
        <Box sx={{marginTop:"30px"}}>
            <CardHeader>Multi select</CardHeader>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>Select Title</TextCont14>
                            <img src={require('../images/icons/up_arrow_dark.png')} />
                        </PlainSelect>
                    </Box>     
                    <RoundedBox>
                        <SelectItemLight>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item One       
                                </TextCont14>
                            </Box>
                            <AbsoluteHand>
                                <img src={require('../images/icons/hand.png')} />
                            </AbsoluteHand>
                            <AbsoluteLine>
                                <Box sx={{display:"flex",flexDirection:"column",position:"relative",rowGap:"10px"}}>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <Box  sx={{display:"flex",alignItems:"cener",justifyContent:"flex-end",position:"absolute",right:"-9px"}}>
                                        <img src={require('../images/icons/lines/arrow_10.png')} />
                                        <Typography sx={{fontSize:"11px",lineHeight:"10px",color:"#A9B6CB"}}>10px</Typography>
                                    </Box>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <AbsoluteVertical>
                                        <img src={require('../images/icons/lines/Line_vertical_10.png')} />
                                    </AbsoluteVertical>
                                </Box>
                            </AbsoluteLine>
                        </SelectItemLight>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Two       
                                </TextCont14>
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Three      
                                </TextCont14>
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Four       
                                </TextCont14>
                            <AbsoluteLineA>
                                <Box sx={{display:"flex",flexDirection:"column",position:"relative",rowGap:"20px"}}>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <Box  sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",position:"absolute",right:"-9px"}}>
                                        <img src={require('../images/icons/lines/arrow_20.png')} />
                                        <Typography sx={{fontSize:"13px",lineHeight:"14px",color:"#A9B6CB"}}>20px</Typography>
                                    </Box>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <AbsoluteVertical20>
                                        <img src={require('../images/icons/lines/Line_vertical_20.png')} />
                                    </AbsoluteVertical20>
                                </Box>
                            </AbsoluteLineA>
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Five       
                                </TextCont14>
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Six      
                                </TextCont14>
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>
                                Item Seven       
                                </TextCont14>
                            </Box>
                        </SelectItem>
                    </RoundedBox>
                    <Box sx={{marginTop:"30px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <Box sx={{display:"flex",columnGap:"10px",position:"relative"}}> 
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
                            <AbsoluteLineB>
                                <Box sx={{display:"flex",flexDirection:"column",position:"relative",rowGap:"14px"}}>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <Box  sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",position:"absolute",right:"-9px"}}>
                                        <img src={require('../images/icons/lines/arrow_15.png')} />
                                        <Typography sx={{fontSize:"13px",lineHeight:"14px",color:"#A9B6CB"}}>15px</Typography>
                                    </Box>
                                    <img src={require('../images/icons/lines/Line_horizontal.png')} />
                                    <AbsoluteVertical15>
                                        <img src={require('../images/icons/lines/Line_vertical_15.png')} />
                                    </AbsoluteVertical15>
                                </Box>
                            </AbsoluteLineB>
                        </Box>
                    </Box> 
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{marginTop:"20px"}}>
                        <TextCont12 sx={{marginBottom:"15px"}}>Title</TextCont12> 
                        <PlainSelect>
                            <TextCont14 sx={{color:theme.palette.mgsColors.tungston}}>Select Title</TextCont14>
                            <img src={require('../images/icons/up_arrow_dark.png')} />
                        </PlainSelect>
                    </Box>     
                    <RoundedBox>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px',height:"22px"}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                        <SelectItem>
                            <Box sx={{display:"flex",alignItems:"center",columnGap:'10px'}}>
                                <img  src={require('../images/icons/checkboxes/checkbox-inactive.png')} />
                                <img  src={require('../images/icons/lines/Rectangle.png')} />
                            </Box>
                        </SelectItem>
                    </RoundedBox>
                </Grid>
            </Grid>
            <Box sx={{marginTop:"50px"}}>
                <CardHeader>Tooltips</CardHeader>
                <Box sx={{display:"flex",alignItems:"center",columnGap:"8px"}}>
                 <GreyRounded>
                    <Text12 sx={{color:"#fff"}}>Label Text</Text12>
                 </GreyRounded>
                 <img  src={require('../images/icons/Subtract.png')} />
                </Box>
            </Box>

        </Box>
    </ContentBox>
  ) 
}
const PlainSelect=styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"200px",
    padding:"10px ",
    height:"40px"
})
const LightSelect=styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"200px",
    padding:"10px ",
    backgroundColor:"#EDF1F7",
    height:"40px",
    position:"relative"
})
const TextCont12=styled(Typography)({
    fontSize:"12px",
    fontWeight:"600",
    marginBottom:"10px"
})
const TextCont14=styled(Typography)({
    fontSize:"14px"
})
const AbsoluteHand=styled(Box)({
    position:"absolute",
    right:"15%",
    bottom:"-10px"
})
const RoundedBox=styled(Box)({
    padding:"10px 0px 15px 0px",
    borderRadius:"8px",
    boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.06)",
    width:"200px"
})
const SelectItem=styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"200px",
    position:"relative",
    padding:"10px ",
})
const SelectItemLight=styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"200px",
    position:"relative",
    backgroundColor:"#F5F5F5",
    padding:"10px ",
})
const AbsoluteLine=styled(Box)({
    position:"absolute",
    right:"-20px",
    top:"0px"
})
const AbsoluteLineA=styled(Box)({
    position:"absolute",
    right:"-20px",
    bottom:"-10px"
})
const AbsoluteLineB=styled(Box)({
    position:"absolute",
    left:"25px",
    top:"-15px"
})
const AbsoluteVertical=styled(Box)({
    position:"absolute",
    right:"30px",
    top:"-10px"
})
const AbsoluteVertical20=styled(Box)({
    position:"absolute",
    right:"30px",
    top:"-22px"
})
const AbsoluteVertical15=styled(Box)({
    position:"absolute",
    right:"30px",
    top:"-22px"
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
  const CloseWrapper=styled(Box)({
    padding:"0px 4px",
    height:"100%",
    borderTopRightRadius:"4px",
    borderBottomRightRadius:"4px"
   })
   const Text12=styled(Typography)({
    fontSize:"12px",
    fontWeight:"700",
    borderRadius:"4px"
  })
  const CursorWrapper=styled(Box)({
    position:"absolute",
    right:"-10px",
    bottom:"-25px",
  })
  const GreyRounded=styled(Box)({
    backgroundColor:"#475161",
    columnGap:"5px",
    borderRadius:"4px",
    padding:"5px 10px"
  })
export default Select