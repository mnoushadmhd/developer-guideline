import { Box, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { ContentBox, GridBox, TextBold, TextContent } from './theme';
import styled from '@emotion/styled';
const drawerWidth = 200;
const TypoGraphy = () => {
  return (
    <>
      <ContentBox sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <TextContent gutterBottom>Keeping typography consistent and sticking to logical hierarchies ensures that elements in the UI are clear and easily recognizable when scanning the page. Text sizes, styles, and layouts were selected to balance content and UI and to foster familiarity.</TextContent>
          <Box>
            <H1Typo >Main Title headings &lt;H1&gt;</H1Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>The H1 is optimised for "main title" headings — the heading for the main content of a page. It should typically appear once per page.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 48px</TextContent>
                  <TextContent>Font weight: 500 / medium</TextContent>
                  <TextContent>Character spacing: -</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height: 28px</TextContent>
                  <TextContent>Margin Top : 40px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H2Typo >Functionality Headings &lt;H2&gt;</H2Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>The H2 should be used for headings that identify key functionality on a page.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 36px</TextContent>
                  <TextContent>Font weight: 500 / medium</TextContent>
                  <TextContent>Character spacing:  -0.008em</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height: 24px</TextContent>
                  <TextContent>Margin Top : 28px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H3Typo >Sub-section and field group Headings &lt;H3&gt;</H3Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>Use H3 if you have multiple logical groupings of content on the page.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 24px</TextContent>
                  <TextContent>Font weight: 600 / medium</TextContent>
                  <TextContent>Character spacing:  -0.006em</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height : 20px</TextContent>
                  <TextContent>Margin Top : 20px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H4Typo >Deep Headings &lt;H4&gt;</H4Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>Use H4 when you need to highlight important pieces of information.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 20px</TextContent>
                  <TextContent>Font weight: 600 / medium</TextContent>
                  <TextContent>Character spacing:  -0.003em</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height : 20px</TextContent>
                  <TextContent>Margin Top : 20px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H5Typo >List Headings &lt;H5&gt;</H5Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>The H5 element is intended for use above groups of items. Use it within page content above ordered, unordered, or structured lists of data.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 16px</TextContent>
                  <TextContent>Font weight: 600 / medium</TextContent>
                  <TextContent>Character spacing:  -0.003em</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                  <TextContent>text-transform: uppercase</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height : 16px</TextContent>
                  <TextContent>Margin Top : 20px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H6Typo >Low-level Headings &lt;H6&gt;</H6Typo>
            <Divider/>
            <GridBox>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextContent>The H5 element is intended for use above groups of items. Use it within page content above ordered, unordered, or structured lists of data.</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>Basic properties</TextBold>
                  <TextContent>Font size: 14px</TextContent>
                  <TextContent>Font weight: 600 / medium</TextContent>
                  <TextContent>Character spacing: 0</TextContent>
                  <TextContent>Color: #1d1d1f  / Maxwell Black</TextContent>
                  <TextContent>text-transform: uppercase</TextContent>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextBold>UI properties</TextBold>
                  <TextContent>Line height : 16px</TextContent>
                  <TextContent>Margin Top : 20px</TextContent>
                </Grid>
              </Grid>
            </GridBox>
          </Box>
          <Box>
            <H4Typo >Formatting</H4Typo>
              <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{width:"25%"}}><TextBold>Style</TextBold></TableCell>
                      <TableCell sx={{width:"15%"}} ><TextBold>Size</TextBold></TableCell>
                      <TableCell sx={{width:"60%"}}><TextBold>Content</TextBold></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow
                        sx={{ '& td, & th': { border: 0 } }}
                      >
                        <TableCell><TextBold>Bold</TextBold></TableCell>
                        <TableCell><TextContent>14px</TextContent></TableCell>
                        <TableCell>Use &lt;strong&gt; to emphasize text.</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{ '& td, & th': { border: 0 } }}
                      >
                        <TableCell ><Italic>Italics</Italic></TableCell>
                        <TableCell><TextContent>14px</TextContent></TableCell>
                        <TableCell>Use &lt;em&gt; to italicize text.</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{ '& td, & th': { border: 0 } }}
                      >
                        <TableCell ><SmallText>small</SmallText></TableCell>
                        <TableCell><TextContent>14px</TextContent></TableCell>
                        <TableCell>Use &lt;small&gt; primarily on help text under form fields, and as secondary supporting text in applications. It should be used sparingly.</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{ '& td, & th': { border: 0 } }}
                      >
                        <TableCell ><LinkText>Link</LinkText></TableCell>
                        <TableCell><TextContent>14px</TextContent></TableCell>
                        <TableCell>Use when you are linking just a few words of text, or when a link is standalone.</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
          </Box>
      </ContentBox>
    </>
  )
}
const H1Typo=styled(Typography)({
  fontSize:"48px",
  lineHeight:"55px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})
const H2Typo=styled(Typography)({
  fontSize:"36px",
  lineHeight:"43px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})
const H3Typo=styled(Typography)({
  fontSize:"24px",
  lineHeight:"31px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})
const H4Typo=styled(Typography)({
  fontSize:"20px",
  lineHeight:"27px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})
const H5Typo=styled(Typography)({
  fontSize:"16px",
  lineHeight:"23px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})
const H6Typo=styled(Typography)({
  fontSize:"14px",
  lineHeight:"21px",
  margin:"30px 0px 10px 0px",
  fontWeight:"bold"
})

const Italic=styled(Typography)({
  fontSize:"14px",
 fontStyle:"italic"
})
const SmallText=styled(Typography)({
  fontSize:"11px",
 fontStyle:"italic"
})
const LinkText=styled('a')({
  fontSize:"14px"
})
export default TypoGraphy