import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import {
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export function MyDrawer() {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <Container>
        <Drawer
          style={{ width: '250px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <Divider />
          <List>
            <Link component={RouterLink} to="/authenticated/userprofile" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'Usuário'} />
              </ListItem>
            </Link>
            <Divider />
            <Link component={RouterLink} to="/authenticated/todolist" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Drawer>
      </Container>
    </div>
  );
}
