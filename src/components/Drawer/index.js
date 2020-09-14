import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PublicIcon from '@material-ui/icons/Public';
import ComputerIcon from '@material-ui/icons/Computer';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to='/'>
          <ListItem button key='Inicio'>
            <ListItemIcon>
               <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary='Inicio' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
            <Link to='/category/politica'>
              <ListItem button key='Política'>
                  <ListItemIcon>
                    <PeopleIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Política' />
              </ListItem>
            </Link>
            <Link to='/category/internacionales'>
              <ListItem button key='Internacionales'>
                  <ListItemIcon>
                    <PublicIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Internacionales' />
              </ListItem>
            </Link>
            <Link to='/category/tecnologia'>
              <ListItem button key='Tecnología'>
                  <ListItemIcon>
                    <ComputerIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Tecnología' />
              </ListItem>
            </Link>
            <Link to='/category/espectaculos'>
              <ListItem button key='Espectáculos'>
                  <ListItemIcon>
                    <TheatersIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Espectáculos' />
              </ListItem>
            </Link>
            <Link to='/category/deportes'>
              <ListItem button key='Deportes'>
                  <ListItemIcon>
                    <SportsFootballIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Deportes' />
              </ListItem>
            </Link>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key='top'>
            <IconButton
                    onClick={toggleDrawer('top', true)}
                    edge="start"
                    //className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={state['top']} onClose={toggleDrawer('top', false)}>
                {list('top')}
            </Drawer>
        </React.Fragment>
    </div>
  );
}