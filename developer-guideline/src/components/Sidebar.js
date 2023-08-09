import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, Navigate } from "react-router-dom";
import styled from '@emotion/styled';
import { useRef, useEffect, useState} from 'react';
import mgslogo from '../images/MGS_logo.svg'
import { useLocation } from 'react-router-dom';
const mainElements=[{text:'Colours',path:'/'}, {text:'Typography',path:'/typography'}]
const subElements=[{text:'Buttons',path:'/elements/buttons'}, {text:'Form Elements',path:'/elements/form_elements'},
{text:'Checkbox',path:'/elements/checkbox'},{text:'Radio Buttons',path:'/elements/radio_buttons'},
{text:'Tabs',path:'/elements/tabs'},{text:'Tags',path:'/elements/tags'},{text:'Select',path:'/elements/select'}]
const drawerWidth = 200;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Ref to detect scroll and fix sidebar
  const elementRef = useRef(null);
  const sidebarRef = useRef(null);
  // For finding exact path for active button 
  let capitalizedContent=''
  const location = useLocation();
  if(location.pathname.length > 1){
    const currentUrl = location.pathname;
    const extractedContent = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    if(extractedContent.includes("_")){
      const words = extractedContent.split("_");
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      capitalizedContent=capitalizedWords.join(" ");
    }
    else{
      capitalizedContent = extractedContent[0].toUpperCase() + extractedContent.slice(1)
    }
    
  }
  else{
    capitalizedContent='Colours'
  }
  const[active,setActive]=useState(capitalizedContent)


  useEffect(() => {
    const handleScroll = () => {
      const { current: element } = elementRef;
      const { current: sidebar } = sidebarRef;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isPastElement = rect.bottom <= 0 ;
        if (isPastElement) {
          sidebar.style.position = 'fixed';
          sidebar.style.top = '0';
          sidebar.style.width='200px'
        } else {
          sidebar.style.position = 'relative';
          sidebar.style.top = 'auto';
        }
      }
    };

     document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(()=>{

  },[])
  const handleClick=(text)=>{
      setActive(text)
  }

  const drawer = (
    <div>
      <Toolbar  sx={{backgroundColor:'#285A6E',display: { xs: 'block', sm: 'none' }}} />
      <Divider />
      <List>
        <ListItem disablePadding>
            <ListHead>Content</ListHead>
        </ListItem>
        {mainElements.map(({text,path}, index) => (
          <ListItem key={text} disablePadding>
            <Link style={{textDecoration:"none",color:"inherit",width:"100%"}} to={path}>
            <ListItemButton onClick={()=>handleClick(text)}>
              <ListItemText sx={{color: active === text ? '#F9A61B' : 'inherit',}} primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
                <ListHead>Elements</ListHead>
        </ListItem>
      </List>
      <Divider />
      <List>
        {subElements.map(({text,path}, index) => (
          <ListItem key={text} disablePadding>
          <Link style={{textDecoration:"none",color:"inherit",width:"100%"}} to={path}>
          <ListItemButton onClick={()=>handleClick(text)}>
            <ListItemText sx={{color: active === text ? '#F9A61B' : 'inherit',}} primary={text} />
          </ListItemButton>
          </Link>
        </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Headerbox ref={elementRef}>
          <MgsLogo src={mgslogo} />
          <Heading  variant='h4'>Design System</Heading>
          <SubHeading  variant='h4'>Colours</SubHeading>
      </Headerbox>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{backgroundColor:"#285A6E",boxShadow:'none',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{display: { xs: 'block', md: 'none',lg:'none' }}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' }}}
          >
            <Typography sx={{color:"#fff"}}>///</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SideDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </SideDrawer>
        <SideBox 
          ref={sidebarRef}
          variant="permanent"
          sx={{display: { xs: 'none', md: 'block' },}}
          open
        >
          {drawer}
        </SideBox>
      </Box>

    </Box>
    </>
  );
}

const ListHead=styled(Typography)({
    padding:"8px 16px",
    fontWeight:"700"
})
const SideDrawer=styled(Drawer)({
    border:"none",
    '& .MuiDrawer-paper':{
        boxSizing: 'border-box',
        width: drawerWidth,
        borderRight:'none',
        backgroundColor:'#f5f5f5'
    }

})
const SideBox=styled(Box)({
      boxSizing: 'border-box',
      width: drawerWidth,
      borderRight:'none',
      backgroundColor:'#f5f5f5',
      height:'100vh'
})
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

export default Sidebar;
