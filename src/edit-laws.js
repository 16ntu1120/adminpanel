import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SpeakerPhoneOutlinedIcon from '@material-ui/icons/SpeakerPhoneOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const moveTowardsLaw = () =>{
  window.location = '/laws';
}
const moveTowardsProfile = () => {
  window.location = '/dashboared';
}
const moveTowardsEditLaws = () => {
  window.location = '/edit-laws';
}
const moveTowardsPosts = () => {
  window.location = '/posts';
}
const moveTowardsFeedback = () => {
  window.location = '/feedback';
}
const moveTowardsAnnouncement = () => {
  window.location = '/annoucement';
}
 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Profile'].map((text, index) => (
          <Paper onClick = {moveTowardsProfile}>
          <ListItem button key={text}  component={Link}>
            <ListItemIcon>{<AccountCircleRoundedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Paper>
        ))}
      </List>
      <List>
        {['Laws'].map((text, index) => (
          <Paper onClick = {moveTowardsLaw}>
          <ListItem button key = {text} >
            <ListItemIcon >{<MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Paper>
        ))}
      </List>
      <List>
        <Paper>
        {['Edit Laws'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<BorderColorRoundedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          
        ))}
        </Paper>
      </List>
      <List>
        {['Posts'].map((text, index) => (
          <Paper onClick = {moveTowardsPosts}>
          <ListItem button key={text}>
            <ListItemIcon>{<MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Paper>
        ))}
      </List>
      
      <List>
        {['Customer Feedback'].map((text, index) => (
          <Paper onClick = {moveTowardsFeedback}>
          <ListItem button key={text}>
            <ListItemIcon>{<ThumbUpAltRoundedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Paper>
        ))}
      </List>
      <List>
        {['Announcments'].map((text, index) => (
          <Paper onClick = {moveTowardsAnnouncement}>
          <ListItem button key={text}>
            <ListItemIcon>{<SpeakerPhoneOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Paper>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Lawyer's Community Services App
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       <Typography paragraph>Edit laws here.</Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
