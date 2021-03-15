import React from 'react';
import clsx from 'clsx';
import {
  makeStyles, Link, Button, Drawer, Toolbar, AppBar,
  List, ListItem, ListItemText, Divider, IconButton
} from '@material-ui/core';
import { Menu, AccountCircle, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import config from '../../../constants/config';
import logo from '../../../assets/images/logo.jpeg'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: "transparent",
    position: "absolute",
    boxShadow: "none",
   // borderBottom:'2px solid #ff0018',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'red'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  desktopNav: {

  },
  mobileNav: {

  }
}));



function Header({ menus }) {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerProfileOpen = () => {
    setOpenProfile(true);
  };
  const handleDrawerProfileClose = () => {
    setOpenProfile(false);
  };

  const isLogin = localStorage.getItem("userDetails");
  return (
   
      <AppBar
        // position="fixed"
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className="navigation-wrapper">
            <Link  onClick={() => {
              history.push("/")
            }} color="inherit" className="logo-link" >
              <img width="90px" className="coursePointer" src={logo} alt={config.appName} />
              
            </Link>
            
            
            <div className="mobile-nav">
             
              <Button onClick={handleDrawerOpen}><Menu /></Button>
              <Drawer classes={{
                paper: classes.drawerPaper,
              }}
                anchor={"right"} open={open} onClose={handleDrawerClose}>
                <List style={{
                  width: "100%"
                }} >
                 
                  <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='Home' />
                      </ListItem>
                      <Divider />
                    
                  
                  <Divider />
                  <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='About' />
                      </ListItem>
                      <Divider />

                      <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='Contact' />
                      </ListItem>
                      <Divider />
                    
                  
                 
                  
                </List>
              </Drawer>
              
            </div>
          </div>
        </Toolbar>
      </AppBar>

  );
}


const mapStateToProps = state => ({
  menus: state.app.menus,
});

export default connect(mapStateToProps)(Header)